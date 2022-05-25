### Regular Expression

- 정규표현식

### 이스케이프 문자란?

- 인쇄할수 없거나 키보드로 표현할 수없는 특별한 문자를 가리킴

## 1. 개요

Java의 정규식 API인 `java.util.regex`는 패턴 일치에 사용됨

## 2. 특수 RegExp 문자

정규식에 메타 문자라고 하는 특수 문자 집합이 존재

문자를 특별한 의미로 해석하는 대신 그대로 허용하려면 문자를 이스케이프해야 함

문자를 이스케이프하여 문자열을 주어진 **정규 표현식과 일치시킬 때** 일반 문자로 처리하도록 강제함

예시)

**<([{\^-=$!|]})?*+.>**

입력 문자열을 정규식으로 표현된 패턴과 일치시키는 예시)

```java
@Test
public void givenRegexWithDot_whenMatchingStr_thenMatches() {
    String strInput = "foof";
    String strRegex = "foo.";
      
    assertEquals(true, strInput.matches(strRegex));
}
```

- 주어진 입력 문자열에 대해 `foo`패턴이 `foo`일 때를 보여줌
- (점 문자로 끝나는 `foo`)가 일치 하면 일치가 성공했음을 나타내는 `true` 값을 반환

### ❗ 입력 문자열에 점(.)문자가 없을 때 일치가 성공한 이유

<aside>
🔜 점은 메타문자이기에, 점의 특별한 의미는 그 자리에 모든문자가 있을 수 있다는 것

</aside>

## 3. 이스케이 프 문자

1. 메타 문자 앞에 백슬래시`(\)`
2. `\Q` 및 `\E`로 메타 문자를 묶기

### ❗ 점 문자를 이스케이프하려면 문자 앞에 백슬래시 문자를 넣어야 함을 의미

### 3.1 백슬래시를 사용하여 이스케이프

백슬래시 문자가 Java String 리털럴에서도 이스케이프 문자라는 것

따라서 백슬래시 문자를 사용하여 모든 문자앞에 올 때 문자를 두 배로 늘려야 함

```java
@Test
public void givenRegexWithDotEsc_whenMatchingStr_thenNotMatching() {
    String strInput = "foof";
    String strRegex = "foo\\.";  //<--이부분

    assertEquals(false, strInput.matches(strRegex));
}
```

- 점 문자는 이스케이프 처리됨
- `matches`는 단순히 점으로 취급하고 점으로 끝나는 패턴을 찾으려고 시도
- 해당 패턴에 대한 입력 문자열에 일치하는 항목이 없기에 `false`반환

### 3.2 \Q & \E를 사용하여 이스케이프

`\Q`는 `\E`까지의 모든 문자를 이스케이프해야 함을 나타내고

 `\E`는 `\Q`로 시작된 이스케이프를 종료해야 함을 의미

```java
@Test
public void givenRegexWithPipeEscaped_whenSplitStr_thenSplits() {
    String strInput = "foo|bar|hello|world";
    String strRegex = "\\Q|\\E"; // <-- '|'마다 문자열을 자른다
    
    assertEquals(4, strInput.split(strRegex).length);
}
```

- 이스케이프는 `\Q`와 `\E` 사이에 파이프 문자를 배치하여 수행

## 4. Pattern.quote(String S) 메소드

`java.util.regex.Pattern` 클래스의 `Pattern.Quoto(String S)`메소드는 지정된 정규식 패턴 문자열을 

리터럴 패턴 문자열로 변환

→ 문자열의 모든 메타 문자가 일반 문자로 취급됨을 의미

```java
@Test
public void givenRegexWithPipeEscQuoteMeth_whenSplitStr_thenSplits() {
    String strInput = "foo|bar|hello|world";
    String strRegex = "|";

    assertEquals(4,strInput.split(Pattern.quote(strRegex)).length);
}
```

- 주어진 정규식 패턴을 이스케이프하고 이를 문자열 리터럴로 변환하는데 사용
- *`\Q*&*\E*`와 비슷한 일을 하고 있음

## 5. 추가 예

### `*java.util.regeax.Macher`의 `replaceAll()`메소드가 어떻게 작동하는지?*

<aside>
⏩ **주어진 문자열의 모든 항목을 다른 문자열로 교체해야 한는 경우**

</aside>

```java
// $가 £로 바뀌지 않음
@Test
public void givenRegexWithDollar_whenReplacing_thenNotReplace() {
 
    String strInput = "I gave $50 to my brother."
      + "He bought candy for $35. Now he has $15 left.";
    String strRegex = "$";    <--- 부분
    String strReplacement = "£";
    String output = "I gave £50 to my brother."
      + "He bought candy for £35. Now he has £15 left.";
    
    Pattern p = Pattern.compile(strRegex);
    Matcher m = p.matcher(strInput);
        
    assertThat(output, not(equalTo(m.replaceAll(strReplacement))));
}
// $가 £로 바뀜
@Test
public void givenRegexWithDollarEsc_whenReplacing_thenReplace() {
 
    String strInput = "I gave $50 to my brother."
      + "He bought candy for $35. Now he has $15 left.";
    String strRegex = "\\$";   <--- 부분
    String strReplacement = "£";
    String output = "I gave £50 to my brother."
      + "He bought candy for £35. Now he has £15 left.";
    Pattern p = Pattern.compile(strRegex);
    Matcher m = p.matcher(strInput);
    
    assertEquals(output,m.replaceAll(strReplacement));
}
```