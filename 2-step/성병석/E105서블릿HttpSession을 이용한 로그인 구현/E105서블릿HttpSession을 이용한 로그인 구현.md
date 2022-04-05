# 서블릿 HttpSession을 이용한 로그인 구현

서블릿에서는 세션관리를 위해 HttpSession이라는 객체를 제공한다

---

기존에 만들어 왔던 쿠키와 세션 발급,등록 코드를 모두 지워줍니다

그리고 SessionConst라는 인터페이스를 만들어줍니다(세션 조회용 상수)

### SessionConst

```java
public interface SessionConst {
    String LOGIN_MEMBER = "loginMember";
}
```

로그인과 로그아웃에 대한 컨트롤러를 수정해줍니다

### MemberController

- login

```java
@PostMapping("/login")
     public @ResponseBody
     ResponseEntity login(@RequestBody LoginDto loginDto, BindingResult result,HttpServletResponse response, HttpServletRequest request) {
         if(result.hasErrors())
             return new ResponseEntity("로그인에러", HttpStatus.BAD_REQUEST);
         String login;
         try{
             login = memberService.login(loginDto);
             if(login ==null){
                 result.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다");
                 return new ResponseEntity("로그인에러", HttpStatus.BAD_REQUEST);
             }
         }catch (RuntimeException e){
             return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
         }
         HttpSession session = request.getSession();
         session.setAttribute(SessionConst.LOGIN_MEMBER, loginDto);
         return new ResponseEntity(login, HttpStatus.OK);
     }
```

- logout

```java
@PostMapping("/logout")
     public @ResponseBody
     ResponseEntity logout(HttpServletResponse response, HttpServletRequest request){
         HttpSession session = request.getSession(false);
         if(session != null)
             session.invalidate();
         return  new ResponseEntity("로그아웃", HttpStatus.OK);
     }
```

---

### request.getSessio()

- true의 경우
    - 세션이 있으면 기존의 세션을 반환
    - 없으면 새로운 세션을 생성하여 반환
- false의 경우
    - 세션이 있으면 기존의 세션을 반환
    - 없으면 새로운 세션을 생성하지 않고 null을 반환
- 기본은 true

---

![Untitled](%E1%84%89%E1%85%A5%E1%84%87%E1%85%B3%E1%86%AF%E1%84%85%E1%85%B5%E1%86%BA%20H%203ead8/Untitled.png)