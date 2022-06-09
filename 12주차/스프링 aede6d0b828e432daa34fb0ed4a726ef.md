# 스프링

- 라이브러리
    - 스프링 부트 라이브러리
        - spring-boot-starter-web
            - spring-boot-starter-tomcat : 톰캣 (웹서버)
            - spring-webmvc : 스프링 웹 MVC
        - spring-boot-starter-thymeleaf : 타임리프 템플릿 엔진
        - spring-boot-starter : 스프링 부트 + 스프링 코어 + 로깅
            - spring-boot
                - spring-core
            - spring-boot-starter-logging
                - logback, slf4j
    - 테스트 라이브러리
        - spring-boot-starter-test
            - junit : 테스트 프레임워크
            - mockito : 목 라이브러리
            - assertj : 테스트 코드를 좀 더 편하게 도와주는 라이브러리
            - spring-test : 스프링 통합 테스트 지원
    
- 동작환경
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled.png)
    
    - 컨트롤러에서 리턴 값으로 문자를 반환하면 뷰 리졸버(viewResolver)가 화면을 찾아서 처리한다
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%201.png)
    
- 정적 컨텐츠
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%202.png)
    
    - 파일을 그대로 웹 브라우저에 전달해준다
- MVC와 템플릿 엔진
    - MVC : Model, View, Controller
    - html을 바꿔서 웹 브라우저에 전달해준다
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%203.png)
    
- API
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%204.png)
    
    - 데이터구조 포맷으로 클라이언트한테 데이터를 전달하는 방식
    
- 계층 구조
    
    ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%205.png)
    
    - 컨트롤러 : 웹 MVC의 컨트롤러 역할
    - 서비스 : 핵심 비즈니스 로직 구현
    - 리포지토리 : 데이터베이스에 접근, 도메인 객체를 DB에 저장하고 관리
    - 도메인 : 비즈니스 도메인 객체
        - 회원, 주문, 쿠폰 등 주로 데이터베이스에 저장하고 관리한다
    
- JUnit 프레임워크
    - 테스트 케이스의 단점을 해결한다
        - 실행하는데 시간이 오래 걸린다
        - 반복 실행하기 어렵다
        - 여러 테스트를 한번에 실행하기 어렵다
- 어노테이션
    - @AfterEach
        - 각 테스트가 종료될 때 마다 기능 실행 → 메모리 DB에 저장된 데이터를 삭제한다
            
            ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%206.png)
            
    - @BeforeEach
        
        ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%207.png)
        
        - 각 테스트가 실행되기 전에 호출된다
        - 테스트가 서로 영향이 없도록 항상 새로운 객체를 생성하고, 의존관계도를 새로 맺어준다
    - @Autowired
        
        ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%208.png)
        
        - 스프링이 연관된 객체를 스프링 컨테이너에서 찾아서 넣어준다
            
            → DI (Dependency Injection) : 객체 의존관계를 외부에서 넣어주는 것 (의존성 주입)
            
            → 기존 코드를 전혀 손대지 않고, 설정만으로 구현 클래스를 변경할 수 있다
            
    - @Transactional
        - 테스트 시작 전에 트랜잭션을 시작하고, 테스트 완료 후에 항상 롤백한다
            
            → DB에 데이터가 남지 않는다
            
    
- 스프링 빈 등록
    - 컴포넌트 스캔과 자동 의존관계 설정
        - @Component / @Controller : 자동 등록
            - @Component를 포함하는 어노테이션도 자동 등록된다
        
    - 자바 코드로 직접 스프링 빈 등록
        
        
- AOP (Aspect Oriented Programming)(=관점 지향 프로그래밍)
    - 어떤 로직을 기준으로 핵심적인 관점, 부가적인 관점으로 나눠서 보고 그 관점을 기준으로 각각 모듈화 하는것
        
        ![Untitled](%E1%84%89%E1%85%B3%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%86%BC%20aede6d0b828e432daa34fb0ed4a726ef/Untitled%209.png)
        

---

# Reference

- AOP
    
    [[Spring] 스프링 AOP (Spring AOP) 총정리 : 개념, 프록시 기반 AOP, @AOP (tistory.com)](https://engkimbs.tistory.com/746)