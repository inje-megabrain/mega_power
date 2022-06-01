# JWT

상태: Spring Security
속성: Login, Spring Security, SpringBoot

## JWT

### Json 객체를 이용하여 저장하는 웹토큰

- 헤더
    - 시그니처를 해싱하기 위한 알고리즘 정보들이 담겨있음
- 페이로드
    - 서버와 클라이언트가 주고받는 시스템에 실제로 사용될 정보를 담고있음
- 시그니처
    - 토큰의 유효성을 검증하기 위한 문자열

### 장점

- 인증서버, 데이터스토어에 대한 의존성이없음
- BASE64 URL SAFE Incoding → URL, COOKIE, HEADER 모두 사용가능

### 단점

- Payload의 정보가 많이지면 네트워크 사용량 증가하여 데이터 설계 고려가 필요함
- 토큰이 클라이언트에 저장되기 때문에 서버에서 클라이언트 토큰을 조작할 수 없음

---

## 초기설정

![Untitled](JWT%200703a76c8bf24795aaece88f3f033f32/Untitled.png)

---

### TestController생성

```java
package me.silvernine.tutorial.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {
    @GetMapping("hello")
    public ResponseEntity<String> hello(){
        return ResponseEntity.ok("hello");
    }
}
```

- 인증오류뜸

### SecurityConfig

```java
package me.silvernine.tutorial.config;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                .antMatchers(
                        "/h2-console/**"
                        , "favicon.ico"
                );
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/api/hello")
                .permitAll()
                .anyRequest()
                .authenticated();
    }
}
```

`@EnableWebSecurity` : 기본적인 Web보안을 활성화 하겠다는 의미

`.authorizeRequests()` : HttpServeletRequest를 사용하는 요청들에 대한 접근 제한을 설정

`.antMatchers("/api/hello").permitAll()` api/hello 에 대한 접근은 인증 없이 접근을 허용하겠다

`.anyRequest()``.authenticated();` 나머지 요청에대해서는 인증을 받아야한다. 

---

### data.sql

```sql
INSERT INTO USER (USER_ID, USERNAME, PASSWORD, NICKNAME, ACTIVATED) VALUES (1, 'admin', '$2a$08$lDnHPz7eUkSi6ao14Twuau08mzhWrL4kyZGGU5xfiGALO/Vxd5DOi', 'admin', 1);

INSERT INTO AUTHORITY (AUTHORITY_NAME) values ('ROLE_USER');
INSERT INTO AUTHORITY (AUTHORITY_NAME) values ('ROLE_ADMIN');

INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_NAME) values (1, 'ROLE_USER');
INSERT INTO USER_AUTHORITY (USER_ID, AUTHORITY_NAME) values (1, 'ROLE_ADMIN');
```

---

### application.yml

```yaml
spring:
  h2:
    console:
      enabled: true

  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password:

  jpa:
    database-platform: org.hibernate.dialect.H2Dialect
		defer-datasource-initialization: true 
    hibernate:
      ddl-auto: create-drop
    properties:
      hibernate:
        format_sql: true
        show_sql: true
logging:
  level:
    me.silvernine: DEBUG
```

- h2 데이터베이스
- create-drop : SessionFactory가 시작될때 Drop, Create, Alter 종료될때 Drop
- properties : 콘솔창에서 sql들을 보기좋게 보여주는 설정 추가
- 로깅레벨도 디버그로 설정
- `defer-datasource-initialization: true`  : 스프링 2.5이상부터 테이블을 초기화 시켜줘야함. DB초기화 전략(data.sql을 쓰는경우 작성해줘야함)

### application.yml 추가

```yaml
jwt:
  header: Authorization
  secret: c2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQtc2lsdmVybmluZS10ZWNoLXNwcmluZy1ib290LWp3dC10dXRvcmlhbC1zZWNyZXQK
  token-validity-in-seconds: 86400
```

- HS512 알고리즘을 사용할 것이기 때문에 512bit, 즉 64byte 이상의 secret key를 사용해야 한다.
- 토큰 만료시간 : 86400초

### build.gradle (JWT 관련 라이브러리 추가)

```dart
implementation group: 'io.jsonwebtoken', name: 'jjwt-api', version: '0.11.2'
runtimeOnly group: 'io.jsonwebtoken', name: 'jjwt-impl', version: '0.11.2'
runtimeOnly group: 'io.jsonwebtoken', name: 'jjwt-jackson', version: '0.11.2'
```

- 초기설정 끝!
- 2.7.0 버전쓰니까 개박살남 → build.gradle에서 spring 버전을 2.6.4로 내리니까 해결~

---

## jwt패키지 생성 및 토큰 설정

### 토큰 생성 및 토근 유효성 검증을 담당할 `TokenProvider` 클래스 생성

```java
package me.silvernine.tutorial.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Component
public class TokenProvider implements InitializingBean {

   private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

   private static final String AUTHORITIES_KEY = "auth";

   private final String secret;
   private final long tokenValidityInMilliseconds;

   private Key key;

   public TokenProvider(
      @Value("${jwt.secret}") String secret,
      @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {
      this.secret = secret;
      this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
   }

   @Override
   public void afterPropertiesSet() {
      byte[] keyBytes = Decoders.BASE64.decode(secret);
      this.key = Keys.hmacShaKeyFor(keyBytes);
   }

   public String createToken(Authentication authentication) {
      String authorities = authentication.getAuthorities().stream()
         .map(GrantedAuthority::getAuthority)
         .collect(Collectors.joining(","));

      long now = (new Date()).getTime();
      Date validity = new Date(now + this.tokenValidityInMilliseconds);

      return Jwts.builder()
         .setSubject(authentication.getName())
         .claim(AUTHORITIES_KEY, authorities)
         .signWith(key, SignatureAlgorithm.HS512)
         .setExpiration(validity)
         .compact();
   }

   public Authentication getAuthentication(String token) {
      Claims claims = Jwts
              .parserBuilder()
              .setSigningKey(key)
              .build()
              .parseClaimsJws(token)
              .getBody();

      Collection<? extends GrantedAuthority> authorities =
         Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());

      User principal = new User(claims.getSubject(), "", authorities);

      return new UsernamePasswordAuthenticationToken(principal, token, authorities);
   }

   public boolean validateToken(String token) {
      try {
         Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
         return true;
      } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
         logger.info("잘못된 JWT 서명입니다.");
      } catch (ExpiredJwtException e) {
         logger.info("만료된 JWT 토큰입니다.");
      } catch (UnsupportedJwtException e) {
         logger.info("지원되지 않는 JWT 토큰입니다.");
      } catch (IllegalArgumentException e) {
         logger.info("JWT 토큰이 잘못되었습니다.");
      }
      return false;
   }
}
```

- `InitializingBean` 를 implements해서 `afterPropertiesSet` 을 Override한 이유
    - 빈이 생성이 되고 의존성 주입을 받은후 시크릿 값을 Base64 Decode해서 key변수에 할당
    
- `Authentication` 객체에 포함되어있는 권한정보들을 담은 토큰을 생성하는 `createToken(Authentication authentication)`메소드 추가
    - Authentication 권한 설정과 applicaion.yml에서 설정했던 만료시간을 설정하고 토큰 생성
    
- Token에 담겨있는 정보를 이용해 Authentication 객체를 리턴하는 `getAuthentication(String Token)` 메소드 생성
    - Token을 이용하여 클레임을 만들고 클레임에서 권한정보를 빼냄
    - 권한 정보를 이용하여 User객체를 만듦
    - 최종적으로 User객체, 토큰, 권한정보를 이용하여 authentication객체를 리턴
    
- 토큰의 유효성 검사를 할수 있는 `validateToken(String token)` 메소드 추가
    - 토큰을 파싱해고보 발생하는 exception을 캐치
    - 문제가 있으면 false, 정상이면 true를 리턴
    

---

### JWT를 위한 커스텀 필터를 만들기 위해 `JWTFilter`클래스 생성

```java
package me.silvernine.tutorial.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class JwtFilter extends GenericFilterBean {

    private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);

    public static final String AUTHORIZATION_HEADER = "Authorization";

    private TokenProvider tokenProvider;

    public JwtFilter(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        String jwt = resolveToken(httpServletRequest);
        String requestURI = httpServletRequest.getRequestURI();

        if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) {
            Authentication authentication = tokenProvider.getAuthentication(jwt);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            logger.debug("Security Context에 '{}' 인증 정보를 저장했습니다, uri: {}", authentication.getName(), requestURI);
        } else {
            logger.debug("유효한 JWT 토큰이 없습니다, uri: {}", requestURI);
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
```

- `GenericFilterBean` 을 extends해서 `doFilter` 메소드를 오버라이딩
    - 실제 필터링 로직은 doFilter 내부에 작성
- `doFilter`의 역할은 JWT의 인증정보를 현재 실행중인 SecurityContext에 저장하는 역할
- JwtFilter는 방금 만들었던 TokenProvider를 주입받음
- 필터링을 하기 위해서 토큰 정보가 있어야 하기 때문에 resolveToken 메소드 추가
    - Request Header에서 꺼내오는 메소드
- doFilter 내부 작성
    - `resloveToken`을 통해 request에서 토큰을 받아서 방금전 만들었던 유효성 검증을 통과하고 토큰이 정상적이면 Authenticaion객체를 받아와서 SecurityContext에 setAuthentication해줌

---

### TokenProvider, JwtFilter를 SecurityConfig에 적용할때 사용할 `JwtSecurityConfig`클래스 추가

```java
package me.silvernine.tutorial.jwt;

import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtSecurityConfig extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {

    private TokenProvider tokenProvider;

    public JwtSecurityConfig(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void configure(HttpSecurity http) {
        JwtFilter customFilter = new JwtFilter(tokenProvider);
        http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
```

- `SecurityConfigurerAdapter`를 extneds 하고 `TokenProvider`를 주입받음
- configure메소드를 override해서 방금 만들었던 JwtFilter를 Security로직에 필터를 등록

---

### 유효한 자격증명을 제공하지 않고 접근하려할때 401에러를 리턴하는 JwtAuthenticationEnrtyPoint 클래스 생성

```java
package me.silvernine.tutorial.jwt;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        // 유효한 자격증명을 제공하지 않고 접근하려 할때 401
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
```

- `AuthenticationEntryPoint` 를 implements하고 401에러를 send하는 클래스

---

### 필요한 권한이 존재하지 않는 경우 403에러를 리턴하는 JwtAccessDeniedHandler 클래스 생성

```java
package me.silvernine.tutorial.jwt;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException {
        //필요한 권한이 없이 접근하려 할때 403
        response.sendError(HttpServletResponse.SC_FORBIDDEN);
    }
}
```

- `AccessDeniedHandler` 를 implements해서 403에러를 send하는 클래스

---

## jwt 패키지안에 만들었던 5개의 클래스를 SecurityConfig에 추가

```java
package me.silvernine.tutorial.config;

import me.silvernine.tutorial.jwt.*;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.*;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    public SecurityConfig(
            TokenProvider tokenProvider,
            JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler
    ) {
        this.tokenProvider = tokenProvider;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) {
        web.ignoring()
                .antMatchers(
                        "/h2-console/**"
                        ,"/favicon.ico"
                        ,"/error"
                );
    }

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                // token을 사용하는 방식이기 때문에 csrf를 disable합니다.
                .csrf().disable()

                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

                // enable h2-console
                .and()
                .headers()
                .frameOptions()
                .sameOrigin()

                // 세션을 사용하지 않기 때문에 STATELESS로 설정
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .authorizeRequests()
                .antMatchers("/api/hello").permitAll()
                .antMatchers("/api/authenticate").permitAll()
                .antMatchers("/api/signup").permitAll()

                .anyRequest().authenticated()

                .and()
                .apply(new JwtSecurityConfig(tokenProvider));
    }
}
```

### @EnableGlobalMethodSecurity추가

- 나중에 `@PreAuthorize` 어노테이션을 메소드 단위로 추가하기위해서 사용

### SecurityConfig

- TokenProvider, JwtAuthenticationEntryPoint, JwtAccessDeniedHandler주입

### PasswordEncoder는 BCryptPasswordEncoder사용

### Configure메소드 추가

- Token방식을 사용하기 때문에 csrt설정은 disable

```java
								.csrf().disable()
```

- Exception을 핸들링할때 authenticationEnrtyPoint와 accessDeniedHandler를 우리가 만들었던 class들로 추가해줌

```java
								.exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)
```

- h2-console을 위한 설정 추가

```java
								// enable h2-console
                .headers()
                .frameOptions()
                .sameOrigin()
```

- Session을 사용하지 않기 때문에 세션 설정을 STALELESS로 설정

```java
								.sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
```

- 로그인, 회원가입은 토큰이 없는 상태에서 요청이 들어오기 때문에 permitAll 해줌

```java
								.antMatchers("/api/hello").permitAll()
                .antMatchers("/api/authenticate").permitAll()
                .antMatchers("/api/signup").permitAll()
```

- JwtFilter를 addFilterBefore로 등록했던 JwtSecurityConfig 클래스도 적용

```java
								.apply(new JwtSecurityConfig(tokenProvider));
```

→ 기본적인 Jwt코드개발과 Security설정추가 끝!

---

## DTO 클래스 생성

### 로그인 Dto생성

```java
package me.silvernine.tutorial.dto;

import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {

   @NotNull
   @Size(min = 3, max = 50)
   private String username;

   @NotNull
   @Size(min = 3, max = 100)
   private String password;
}
```

- Lombok어노테이션 추가, Valid관련 어노테이션 추가
- username, password 2개의 필드를 가지고 있는 dto

### TokenDto 생성

```java
package me.silvernine.tutorial.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TokenDto {

    private String token;
}
```

- token 필드를 가짐

### UserDto생성

```java
package me.silvernine.tutorial.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    @NotNull
    @Size(min = 3, max = 50)
    private String username;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotNull
    @Size(min = 3, max = 100)
    private String password;

    @NotNull
    @Size(min = 3, max = 50)
    private String nickname;

}
```

- username, password, nickname 필드를 가짐

---

## Repository관련 코드 생성

### UserEntity와 매핑되는 UserRepository 인터페이스 생성

```java
package me.silvernine.tutorial.repository;

import me.silvernine.tutorial.entity.User;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
   @EntityGraph(attributePaths = "authorities")
   Optional<User> findOneWithAuthoritiesByUsername(String username);
}
```

- JpaRepository를 extends하는 것으로 findAll, save 등의 메소드들을 기본적으로 사용할 수 있게됨
- `findOneWithAuthoritiesByUsername` : username을 기준으로 User정보를 가져올때 권한정보도 같이 가져오는 메소드
- `@EntityGraph` : 해당 쿼리가 수행될 때 Lazy조회가 아니라 Eager조회로 `"authorities"`정보를 같이 가져오게 됨

---

## 로그인 API, 관련 로직 생성

### CustomUserDetailsService 생성

```java
package me.silvernine.tutorial.service;

import me.silvernine.tutorial.entity.User;
import me.silvernine.tutorial.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
   private final UserRepository userRepository;

   public CustomUserDetailsService(UserRepository userRepository) {
      this.userRepository = userRepository;
   }

   @Override
   @Transactional
   public UserDetails loadUserByUsername(final String username) {
      return userRepository.findOneWithAuthoritiesByUsername(username)
         .map(user -> createUser(username, user))
         .orElseThrow(() -> new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다."));
   }

   private org.springframework.security.core.userdetails.User createUser(String username, User user) {
      if (!user.isActivated()) {
         throw new RuntimeException(username + " -> 활성화되어 있지 않습니다.");
      }
      List<GrantedAuthority> grantedAuthorities = user.getAuthorities().stream()
              .map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
              .collect(Collectors.toList());
      return new org.springframework.security.core.userdetails.User(user.getUsername(),
              user.getPassword(),
              grantedAuthorities);
   }
}
```

- `UserDetailsService`를 implements하고 방금 만들었던 UserRepository를 주입받음
- UserDetailsService의 `loadUserByUsername`메소드를 Override
    - 로그인시 DB에서 유저정보와 권한정보를 가져옴
    - 해당 정보를 기반으로 User가 활성화 상태라면 user의 권한정보와 username, password를 가지고 userDetails.User 객체를 생성해서 리턴

### AuthController생성

```java
package me.silvernine.tutorial.controller;

import me.silvernine.tutorial.dto.LoginDto;
import me.silvernine.tutorial.dto.TokenDto;
import me.silvernine.tutorial.jwt.JwtFilter;
import me.silvernine.tutorial.jwt.TokenProvider;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto loginDto) {

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.createToken(authentication);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
    }
}
```

- `TokenProvider`와 `AuthenticationManagerBuilder`를 주입받음

```java
private final TokenProvider tokenProvider;
private final AuthenticationManagerBuilder authenticationManagerBuilder;
```

- 로그인 api의 경로는 `/api/authenticate` 이며 POST요청을 받음

```java
@PostMapping("/authenticate")
public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto loginDto)
```

- LoginDto의 `username`, `password`를 파라미터로 받고 이를 통해서 AuthenticationToken 객체를 생성

```java
UsernamePasswordAuthenticationToken authenticationToken =
	new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());
```

- `AuthenticationToken`을 이용해서 `authenticate`메소드가 실행이 될때 `CustomUserDetailsService`에서 만들었던 `loadUserByUsername` 메소드가 실행됨
    - 이 결과값을 가지고 Authentication 객체를 생성하고 SecurityContext에 저장
    - 그 인증정보를 기준으로 TokenProvider에서 만들었던 createToken메소드를 통해 JWT Token 생성

```java
Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
SecurityContextHolder.getContext().setAuthentication(authentication);

String jwt = tokenProvider.createToken(authentication);
```

- JWT Token 을 Response Header에도 넣어주고, TokenDto를 이용해 Response Body에도 넣어서 리턴

```java
HttpHeaders httpHeaders = new HttpHeaders();
httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

return new ResponseEntity<>(new TokenDto(jwt), httpHeaders, HttpStatus.OK);
```

### Postman 켜서 test

- POST요청

```json
{
    "username":"admin",
    "password":"admin"
}
```

- 결과

```json
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTY1NDA5MjM4MX0.v0iIeP0Wn5EzyooCzSDHZ3tOecMvF7wJ-CYrNuKKzM_Kv2V2osBk568JxECOAgRkElxTyYK8JeX8oIyRzvJ76g"
}
```

---

## 회원가입 API생성

### 간단한 유틸리티 메소드를 만들기 위한 SecurityUtil클래스 생성

```java
package me.silvernine.tutorial.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Optional;

public class SecurityUtil {

   private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);

   private SecurityUtil() {
   }

   public static Optional<String> getCurrentUsername() {
      final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

      if (authentication == null) {
         logger.debug("Security Context에 인증 정보가 없습니다.");
         return Optional.empty();
      }

      String username = null;
      if (authentication.getPrincipal() instanceof UserDetails) {
         UserDetails springSecurityUser = (UserDetails) authentication.getPrincipal();
         username = springSecurityUser.getUsername();
      } else if (authentication.getPrincipal() instanceof String) {
         username = (String) authentication.getPrincipal();
      }

      return Optional.ofNullable(username);
   }
}
```

- `getCurrentUsername` 메소드를 하나 가지고 있는 클래스
- SecurityContext에서 Authentication객체를 꺼내와서 이걸 통해 username을 return해주는 간단한 유틸성 메소드
    - SecurityContext에 Authentication객체가 저장되는 시점은 이전에 만들었던 JwtFilter의 doFilter메소드에서 Request가 들어오는 시점에 SecurityContext에 Authentication객체가 저장이된다.
    - 이때 저장된 Authentication객체가 꺼내지게 된다.

### UserService 생성

```java
package me.silvernine.tutorial.service;

import java.util.Collections;
import java.util.Optional;

import me.silvernine.tutorial.dto.UserDto;
import me.silvernine.tutorial.entity.Authority;
import me.silvernine.tutorial.entity.User;
import me.silvernine.tutorial.repository.UserRepository;
import me.silvernine.tutorial.util.SecurityUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public User signup(UserDto userDto) {
        if (userRepository.findOneWithAuthoritiesByUsername(userDto.getUsername()).orElse(null) != null) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다.");
        }

        Authority authority = Authority.builder()
                .authorityName("ROLE_USER")
                .build();

        User user = User.builder()
                .username(userDto.getUsername())
                .password(passwordEncoder.encode(userDto.getPassword()))
                .nickname(userDto.getNickname())
                .authorities(Collections.singleton(authority))
                .activated(true)
                .build();

        return userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public Optional<User> getUserWithAuthorities(String username) {
        return userRepository.findOneWithAuthoritiesByUsername(username);
    }

    @Transactional(readOnly = true)
    public Optional<User> getMyUserWithAuthorities() {
        return SecurityUtil.getCurrentUsername().flatMap(userRepository::findOneWithAuthoritiesByUsername);
    }
}
```

- UserRepository, PasswordEncoder를 주입받음
- signup메소드 : 회원가입 로직을 수행하는 메소드
    - 파라미터로 받은 userDto안의 username을 기준으로해서 DB에 username으로 저장되어 있는 정보가 있는지 찾아봄
    - 없으면 권한정보를 만들고 권한정보를 넣어서 유저정보를 만들어서 UserRepository에 save메소드를 통해 DB에 user정보와 권한 정보를 저장한다.
    - 이때 유저한테는 ROLE_USER권한이 들어가게되고
    - data.sql에서 server가 시작될때 자동으로 생성되는 admin계정은 USER, ADMIN ROLE을 가지고 있다.
    - 회원가입 통해 저장한 User는 ROLE_USER권한 하나만 가지고 있음
    - 이 차이를 통해 권한검증을 한다.
- user의 권한정보를 가져오는 2개의 메소드
    - getUserWithAuthorities : username에 해당하는 user객제와 권한정보를 가져옴
    - getMyUserWithAuthorities : 현재 SecurityContext에 저장된 username에 해당하는 유저 정보와 권한 정보만 가져옴
    - 이 두개의 허용 권한을 다르게 해서 권한검증을 테스트 할 수 있음
    

---

## 권한검증 확인

### UserService 메소드 들을 호출할 UserController생성

```java
package me.silvernine.tutorial.controller;

import me.silvernine.tutorial.dto.UserDto;
import me.silvernine.tutorial.entity.User;
import me.silvernine.tutorial.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("hello");
    }

    @PostMapping("/test-redirect")
    public void testRedirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/api/user");
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signup(
            @Valid @RequestBody UserDto userDto
    ) {
        return ResponseEntity.ok(userService.signup(userDto));
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    public ResponseEntity<User> getMyUserInfo(HttpServletRequest request) {
        return ResponseEntity.ok(userService.getMyUserWithAuthorities().get());
    }

    @GetMapping("/user/{username}")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<User> getUserInfo(@PathVariable String username) {
        return ResponseEntity.ok(userService.getUserWithAuthorities(username).get());
    }
}
```

- `signup` api : UserDto 객체를 파라미터로 받아 UserService의 signup메소드를 호출하여 수행
- `getMyUserInfo` 메소드 : @PreAuthorize 를 통해 USER, ADMIN 두가지 권한을 모두 호출할 수 있는 api
- `getUserInfo` 메소드 : @PreAuthorize 를 통해 ADMIN권한만 호출할 수 있는 api

### Postman

Post : [http://localhost:8080/api/signup](http://localhost:8080/api/signup)

입력

```json
{
    "username":"sbs1621",
    "password":"sbs1621",
    "nickname":"nickname"
}
```

출력

```json
{
    "userId": 2,
    "username": "sbs1621",
    "password": "$2a$10$8o0sdQsC6vUuQsH6UaOUxe9CV576fmS8cR81c1jq7k8sB.SDEKFMK",
    "nickname": "nickname",
    "activated": true,
    "authorities": [
        {
            "authorityName": "ROLE_USER"
        }
    ]
}
```

### admin 계정의 토큰으로 User의 정보를 가져올 수 있음

- Postman의 Admin Authenticate의 Tests안에 코드 작성

```json
var jsonData = JSON.parse(responseBody)
pm.globals.set("jwt_tutorial_token", jsonData.token);
```

- getUser에서 토큰을 넣어줌

![Untitled](JWT%200703a76c8bf24795aaece88f3f033f32/Untitled%201.png)

- 출력

```json
{
    "userId": 2,
    "username": "sbs1621",
    "password": "$2a$10$8o0sdQsC6vUuQsH6UaOUxe9CV576fmS8cR81c1jq7k8sB.SDEKFMK",
    "nickname": "nickname",
    "activated": true,
    "authorities": [
        {
            "authorityName": "ROLE_USER"
        }
    ]
}
```

### User의 권한정보로도 getUser가 될까?

- User Authenticate

```json
{
    "username":"sbs1621",
    "password":"sbs1621"
}
```

- 마찬가지로 Tests는 동일
- Send후 전역변수에 해당 토큰을 담고 getUser 실행
- 출력

```json
{
    "timestamp": "2022-06-01T05:41:12.563+00:00",
    "status": 403,
    "error": "Forbidden",
    "path": "/api/user/sbs1621"
}
```

### User권한을 허용해줬던 Api를 User토큰으로 호출

- Get : [http://localhost:8080/api/user/](http://localhost:8080/api/user/)

```json
{
    "userId": 2,
    "username": "sbs1621",
    "password": "$2a$10$8o0sdQsC6vUuQsH6UaOUxe9CV576fmS8cR81c1jq7k8sB.SDEKFMK",
    "nickname": "nickname",
    "activated": true,
    "authorities": [
        {
            "authorityName": "ROLE_USER"
        }
    ]
}
```

---