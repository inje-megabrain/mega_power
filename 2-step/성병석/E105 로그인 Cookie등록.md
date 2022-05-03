# 로그인 Cookie등록

### 스프링 시큐리티에 필요한 빈을 등록해주고 권한 설정을 해준다

```java
@Configuration
 public class SecurityConfig extends WebSecurityConfigurerAdapter {

     @Bean
     public UserDetailsService userDetailsService() {
         return new PrincipalDetailService();
     }
     @Bean
     public BCryptPasswordEncoder encodePassword() {  // 회원가입 시 비밀번호 암호화에 사용할 Encoder 빈 등록
         return new BCryptPasswordEncoder();
     }

     @Override
     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
         auth.userDetailsService(userDetailsService()).passwordEncoder(encodePassword());
     }

     @Override
     protected void configure(HttpSecurity http) throws Exception {
         http
                 .csrf().disable()// CSRF 토큰 비활성
                 .authorizeRequests()
                 .antMatchers("/h2-console/**").permitAll()
                 .antMatchers("/api/v1/**").permitAll()
                 .antMatchers("/api/v1/member").permitAll()
                 // 그 외 모든 요청은 인증과정 필요
                 .anyRequest().authenticated();

         http.sessionManagement()
                 .maximumSessions(1)
                 .maxSessionsPreventsLogin(false);
     }

     @Override
     public void configure(WebSecurity web) throws Exception {
         // 정적인 파일 요청에 대해 무시
         web.ignoring().antMatchers("/h2-console/**");
     }

 }
```

---

## Password의 암호화

### 이전에 작성한 로그인 구현 코드를 조금 수정한다.

- Member

```java
public static Member createMember(NewMemberDto memberDto) {
        Member member = Member.builder()
                 .email(memberDto.getEmail())
                 .name(memberDto.getName())
                 .studentId(memberDto.getStudentId())
                 .password(new BCryptPasswordEncoder().encode(memberDto.getPassword()))
                 .role(Role.GUEST)
                 .team(memberDto.getTeam())
                 .build();
        return member;
    }
```

- MemberService

```java
public String login(LoginDto loginDto) {

         Member member =  memberRepository.findByEmail(loginDto.getEmail()).orElseThrow(() -> { //member.isEmpty()
             throw new IllegalStateException("다시 확인하세요");
         });
         BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
         if (!encoder.matches(loginDto.getPassword(), member.getPassword())) { // 암호화된 비밀번호 매칭
             throw new IllegalStateException("비밀번호를 다시 확인하세요");
         }
         return "Login 성공";
     }
```

---

## 쿠키를 이용한 로그인/로그아웃 구현

Dependency를 추가해줘야한다

`implementation 'org.springframework.boot:spring-boot-starter-security’`

### DB조회를 하는 PrincialDetail을 추가해주고 Service도 구현해준다.

- PrincialDetail

```java
@Getter
 public class PrincipalDetail implements UserDetails {

     private Member member;

     public PrincipalDetail(Member member) {
         this.member = member;
     }

     @Override
     public Collection<? extends GrantedAuthority> getAuthorities() {
         Collection<GrantedAuthority> authorityCollection = new ArrayList<>();
         authorityCollection.add(() -> {
             return "ROLE_USER";
         });
         return authorityCollection;
     }

     @Override
     public String getPassword() {
         return member.getPassword();
     }

     @Override
     public String getUsername() {
         return member.getEmail();
     }

     // 계정 만료되었는지? (true : 만료안됨)
     @Override
     public boolean isAccountNonExpired() {
         return true;
     }

     // 계정이 잠겼는가? (true : 잠기지 않음)
     @Override
     public boolean isAccountNonLocked() {
         return true;
     }

     // 비밀번호가 만료? (true : 만료 X)
     @Override
     public boolean isCredentialsNonExpired() {
         return false;
     }

     @Override
     public boolean isEnabled() {
         return true;
     }
 }
```

- PrincipalDetailService

```java
public class PrincipalDetailService implements UserDetailsService {

     private MemberRepository memberRepository;

     public PrincipalDetailService() {
     }

     @Autowired
     public void setMemberRepository(MemberRepository memberRepository) {
         this.memberRepository = memberRepository;
     }

     @Override
     public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
         Member member = memberRepository.findByEmail(email)
                 .orElseThrow(() -> {
                     return new UsernameNotFoundException("해당 사용자가 없습니다. " + email);
                 });
         return new PrincipalDetail(member);
     }
 }
```

---

### 서버에서 쿠키 생성하기

- MemberCotroller
    - Login

```java
@PostMapping("/login")
     public @ResponseBody
     ResponseEntity login(@RequestBody LoginDto loginDto, HttpServletResponse response) {
         String login;
         Cookie cookie = null;
         try {
             login = memberService.login(loginDto);
             cookie = new Cookie("memberId", loginDto.getEmail());
             response.addCookie(cookie);
         } catch (RuntimeException e) {
             return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
         }
         return new ResponseEntity(login, HttpStatus.OK);
     }
```

### 쿠키 삭제

- MemberCotroller
    - Logout

```java
@PostMapping("/logout")
     public ResponseEntity logout(HttpServletResponse response) {
         expiredCookie(response, "memberId");
         return new ResponseEntity("로그아웃", HttpStatus.OK);
     }

     private void expiredCookie(HttpServletResponse response, String cookieName) {
         Cookie cookie = new Cookie(cookieName, null);
         cookie.setMaxAge(0);
         response.addCookie(cookie);
     }
```

---

### Cookie를 사용하면 다음과 같은 보안 문제점이 있다.

- 쿠키의 값을 임의로 변경 할 수 있다
- 쿠키에 관련 정보를 타인이 가져갈 수 있다
- 한번 도용된 쿠키 정보는 계속 악용 될 수 있다

결국 중요한 개인정보들이 클라이언트에 저장되어 있기 때문에 악용이 쉽다.

→ 클라이언트가 아닌 서버에서 관리하도록 하고 외부에 노출되지 않도록 해야함

- 클라이언트는 서버가 보관하고 있는 중요 정보에 접근할 수 있는 키만 가지고 있고, 이 유효시간을 짧게 둬서 갱신하도록 하면 보안적으로 안전할것
    
    → 이러한 유지 방법을 `[세션](https://www.notion.so/Session-3edc549f35e14991a1ee1e5ea9301d9e)` 이라고 한다
    

---

# Reference

[6. 로그인 처리 1 - 쿠키, 세션](https://catsbi.oopy.io/0c27061c-204c-4fbf-acfd-418bdc855fd8)