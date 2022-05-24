## 1. 개요

- 오라클은 2018년 9월 자바 11을 출시함
- 이전 버전 10을 출시한지 불과 6개월만에 출시
- **Java 11은 Java 8 이후 첫 번째 LTS(장기 지원) 릴리스**
- LTS란?
    
    Long Term Support
    
    - 특히 리눅스를 비롯한 오픈소스 프로젝트에서 적용
    - 일반적인 경우보다 장기간에 걸쳐 지원하도록 특별히 고안된 소프트웨어의 버전 또는 에디션
    - 소프트웨어 유지보수기간을 연장
    - 소프트웨어 업데이트 (패치)의 유형과 빈도를 변경하여
        
        소프트웨어 배포의 위험부담, 비용 및 급작스런 중단을 줄이면서 소프트웨어의 신뢰성을 향상시킴
        
        [https://ko.wikipedia.org/wiki/장기_지원_버전](https://ko.wikipedia.org/wiki/%EC%9E%A5%EA%B8%B0_%EC%A7%80%EC%9B%90_%EB%B2%84%EC%A0%84)
        
    

## 2. 오라클 대 개방형 JDK

- Java 10은 라이선스 없이 상업적으로 사용할 수 있는 마지막 무료 Oracle JDK 릴리스
- Java 11부터 Oracle의 무료 LTS가 없음
    - Oracle 외에도 고려할 수 있는 다른 Open JDK 공급자가 있음
    - Oracle은 무료로 다운하여 사용할 수 있는 Open JDK 릴리스를 계속 제공중
- JDK란?
    
    Java Development Kit
    
    <aside>
    ⏩ 자바 플랫폼의 등장 이래 지금까지 가장 널리 사용되고 있는 소프트웨어 개발 키트(SDK)
    
    </aside>
    
    | apt | 어노테이션 툴 |
    | --- | --- |
    | appletviewer | 웹브라우저 없이 자바 애플릿을 실행하고 디버깅 하기위한 툴 |
    | javac | 자바 컴파일러, 자바 소스파일을 바이트코드로 변환 |
    | java | javac가 만든 클래스 파일을 해석 및 실행 |
    | jar | 서로 관련있는 클래스 라이브러리들과 리소스를 하나의 파일로 묶어두는 툴 |
    | jdb | 자바 디버깅 툴 |
    | JRE | Java가 동ㅈ악하는데 필요한 JVM, 라이브러리 등 다양한 파일들을 포함한다 |
    | JVM | Java가 실제로 동작하는 가상 환경. 하나의 Java 프로젝트를 개발해도 여러 환경에서 실행 가능 |
    
    [https://velog.io/@shelly/JAVA-JDK란](https://velog.io/@shelly/JAVA-JDK%EB%9E%80)
    

## 개발자 기능

### 3.1 새로운 문자열 메서드

- Java 11은 `String` 클래스에 새로운 메서드 추가
    - `isBlank`
    - `lines`
    - `strip`
    - `stripLeading`
    - `stripTrailing`
    - `repeat`
- 새로운 방법을 사용하여 여러 줄 문자열에서 비어 있지 않고 제거된 줄을 추출하는 방법 예시)

```java
String multilineString = "Baeldung helps \n \n developers \n explore Java.";
List<String> lines = multilineString.lines()
  .filter(line -> !line.isBlank())
  .map(String::strip)
  .collect(Collectors.toList());
assertThat(lines).containsExactly("Baeldung helps", "developers", "explore Java.");
```

- AssertJ란?
    
    자바 JUnit의 테스트코드에 사용되어, 테스트코드의 가독성과 편의성을 높여 주는 라이브러리.
    
    - 메서드 체이닝을 지원해, 더 직관적이고 읽기 쉬운 테스트코드 작성 가능
    - 테스트에 필요한 풍부한 메소드들을 제공함
    
    AssertJ에서 모든 테스트 코드는 `assertThat()`으로 시작함.
    
    ```java
    assertThat("Hello, world! Nice to meet you.") // 주어진 "Hello, world! Nice to meet you."라는 문자열은
                    .isNotEmpty() // 비어있지 않고
                    .contains("Nice") // "Nice"를 포함하고
                    .contains("world") // "world"도 포함하고
                    .doesNotContain("ZZZ") // "ZZZ"는 포함하지 않으며
                    .startsWith("Hell") // "Hell"로 시작하고
                    .endsWith("u.") // "u."로 끝나며
                    .isEqualTo("Hello, world! Nice to meet you."); // "Hello, world! Nice to meet you."과 일치합니다.
    ```
    
    - 문자열 테스트
    
    ```java
    assertThat(3.14d) // 주어진 3.14라는 숫자는
                    .isPositive() // 양수이고
                    .isGreaterThan(3) // 3보다 크며
                    .isLessThan(4) // 4보다 작습니다
                    .isEqualTo(3, offset(1d)) // 오프셋 1 기준으로 3과 같고
                    .isEqualTo(3.1, offset(0.1d)) // 오프셋 0.1 기준으로 3.1과 같으며
                    .isEqualTo(3.14); // 오프셋 없이는 3.14와 같습니다
    ```
    
    - 숫자 테스트
    
    [https://bibi6666667.tistory.com/231](https://bibi6666667.tistory.com/231)
    
- Collect란?
    
    `Collect`는 `Stream`의 데이터를 변형 등의 처리를 하고 원하는 자료형으로 변환
    
    - 스트림의 아이템들을 List 또는 Set 자료형으로 변환
    - 스트림의 아이템들을 joining
    - 스트림의 아이템들을 Sorting하여 가장 큰 객체 리턴
    - 스트림의 아이템들의 평균 값을 리턴
    
    ```java
    collect(Supplier supplier, BiConsumer accumulator, BiConsumer combiner)
    ```
    
    - 3개의 인자를 받음
    
    ```java
    Stream<String> fruits = Stream.of("banana", "apple", "mango", "kiwi", "peach", "cherry", "lemon");
    HashSet<String> fruitHashSet = fruits.collect(HashSet::new, HashSet::add, HashSet::addAll);
    for (String s : fruitHashSet) {
        System.out.println(s);
    }
    
    //결과값
    banana
    apple
    cherry
    kiwi
    lemon
    peach
    mango
    ```
    
    - `Stream`의 결과를 `HashSet<String>` 으로 리턴하는 코드
    - `HashSet`에 대한 `Supplier`, `accumulator`, `combiner`를 `collerct`의 인자로 전달
    - `Collect`에 3개의 `parames`를 넣어야 해서 사용이 번거로움
    
    ```java
    //set 사용
    Stream<String> fruits = Stream.of("banana", "apple", "mango", "kiwi", "peach", "cherry", "lemon");
    Set<String> fruitSet = fruits.collect(Collectors.toSet());
    for (String s : fruitSet) {
        System.out.println(s);
    }
    
    banana
    apple
    cherry
    kiwi
    lemon
    peach
    mango
    ```
    
    - `toSet()` 만 넣어주면 `Set`자료형으로 만듬
    
    ```java
    Stream<String> fruits = Stream.of("banana", "apple", "mango", "kiwi", "peach", "cherry", "lemon");
    List<String> fruitList = fruits.collect(Collectors.toList());
    for (String s : fruitList) {
        System.out.println(s);
    }
    ```
    
    - `toList()`를 사용하여 `List`객체로 리턴
    
    [https://codechacha.com/ko/java8-stream-collect/](https://codechacha.com/ko/java8-stream-collect/)
    

### 3.2 새로운 파일 방법

- 파일에서 `String`을 읽고 쓰는 것이 쉬워짐
- `Files` 클래스에서 새로운 `readString` 및 `writeString` 정적 메서드를 사용할 수 있음

```java
Path filePath = Files.writeString(Files.createTempFile(tempDir, "demo", ".txt"), "Sample text");
String fileContent = Files.readString(filePath);
assertThat(fileContent).isEqualTo("Sample text");
```

### 3.3 배열에 대한 컬렉션

- `java.util.Collection` 인터페이스는 `IntFunction` 인수를 사용하는 새로운 기본 `toArray` 메소드가 포함

```java
List sampleList = Arrays.asList("Java", "Kotlin");
String[] sampleArray = sampleList.toArray(String[]::new);
assertThat(sampleArray).containsExactly("Java", "Kotlin");
```

- `List` 컨테이너의 인스턴스를 배열(array)로 만드는것이 '`toArray`' 메서드

### 3.4 술어가 아닌 방법

- `Predicate` 인터페이스에 정적 `not`메소드가 추가됨
- 부정방법과 마찬가지로 기존 술어를 부정하는데 사용할 수 있음

```java
List<String> sampleList = Arrays.asList("Java", "\n \n", "Kotlin", " ");
List withoutBlanks = sampleList.stream()
  .filter(Predicate.not(String::isBlank))
  .collect(Collectors.toList());
assertThat(withoutBlanks).containsExactly("Java", "Kotlin");
```

- `Predicate`는 `Type T` 인자를 받고 `boolean`을 리턴하는 함수형 인터페이스

<aside>
⏩ ***`not(isBlank)` 가 `isBlank .negate()`*보다 더 자연스럽게 읽히는 반면 , 큰 장점은 *`not(String:isBlank)`* 와 같은 메서드 참조와 함께 *`not`* 을 사용할 수도 있다는 것 입니다.**

</aside>

### 3.5 Lambda용 로컬 변수 구문

- 람다 매개변수에서 로컬 변수 구문(var 키워드)사용에 대한 지원이 Java 11에 추가 됨

```java
List<String> sampleList = Arrays.asList("Java", "Kotlin");
String resultString = sampleList.stream()
  .map((@Nonnull var x) -> x.toUpperCase())
  .collect(Collectors.joining(", "));
assertThat(resultString).isEqualTo("JAVA, KOTLIN");
```

### 3.6 HTTP 클라이언트

- *java.net.http* 패키지의 새로운 HTTP 클라이언트는 Java 9에 도입되었음
    
    ```java
    HttpClient httpClient = HttpClient.newBuilder()
      .version(HttpClient.Version.HTTP_2)
      .connectTimeout(Duration.ofSeconds(20))
      .build();
    HttpRequest httpRequest = HttpRequest.newBuilder()
      .GET()
      .uri(URI.create("http://localhost:" + port))
      .build();
    HttpResponse httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
    assertThat(httpResponse.body()).isEqualTo("Hello from the server!");
    ```
    
- Java 11의 표준 기능
- 새로운 HTTP API는 전반적인 성능을 개선, HTTP/1.1 및 HTTP/2를 모두 지원

### 3.7 Nest 기반 액세스 제어

- Java 11은 JVM 내에서 중첩 및 관련 액세스 규칙의 개념을 도입
- Java의 클래스 중첩은 외부/메인 클래스와 모든 중첩 클래스를 의미

```java
assertThat(MainClass.class.isNestmateOf(MainClass.NestedClass.class)).isTrue();
```

- 중첩 클래스는 *`NestMembers`* 속성에 연결되고 외부 클래스는  *`NestHost`* 속성에 연결

```java
assertThat(MainClass.NestedClass.class.getNestHost()).isEqualTo(MainClass.class);
```

- JVM 액세스 규칙은 네스트메이트 간의 개인 멤버에 대한 액세스를 허용
- 이전 Java 버전에는 리플렉션 API가 동일한 엑세스를 거부함

```java
Set<String> nestedMembers = Arrays.stream(MainClass.NestedClass.class.getNestMembers())
  .map(Class::getName)
  .collect(Collectors.toSet());
assertThat(nestedMembers).contains(MainClass.class.getName(), MainClass.NestedClass.class.getName());
```

- Java 11은 이 문제를 수정하고 리플렉션 API를 사용하여 새 클래스 파일 속성을 쿼리하는 수단을 제공

### 3.8 자바 파일 실행

- 이 버전의 주요 변경사항은 더 이상 명시적으로 javac를 사용하여 Java 소스 파일을 컴파일 할 필요가 없다

```java
$ javac HelloWorld.java
$ java HelloWorld 
Hello Java 8!
```

```java
$ java HelloWorld.java
Hello Java 11!
```

- 대신 java 명령을 사용하여 파일을 직접 실행 할 수있다.