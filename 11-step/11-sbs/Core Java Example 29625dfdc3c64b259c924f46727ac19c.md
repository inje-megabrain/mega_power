# Core Java Example

## Object Type Casting in Java

업캐스팅은 이 개체에 사용할 수 있는 메소드 및 속성 목록을 좁히고 다운캐스팅은 확장할 수 있다.

## Up Casting

- 서브클래스에서 슈퍼클래스로 캐스팅 하는것

```java
public class Animal {
	public void eat() {
		//..
	}
}
//Aniaml 확장
public class Cat extends Animal {
	public void eat() {
		//..
	}
	public void meow() {
		//..
	}
}

Cat cat = new Cat();
Animal animal = cat; //암시적 업캐스팅 발생

animal = (Animal) cat; //명시적 업캐스팅
```

- 상속 트리를 명시적으로 캐스팅 할 필요는 없다. 컴파일러는 오류라고 표시하지 않음
- meow()를 호출하려면 animal을 다운캐스팅 해야함

```java
animal.meow(); //-> undefined
```

### 다형성

- 모든 Java객체는 다형성이다.

```java
public class Dog extends Animal {
    public void eat() {
         // ... 
    }
}

public class AnimalFeeder {

    public void feed(List<Animal> animals) {
        animals.forEach(animal -> {
            animal.eat();
        });
    }
}
// AnimalFeeder가 목록에 있는 동물이 고양이인지 개인지 구분하지 않음
// feed() 메소드 에서 모두 동물로 취급

List<Animal> animals = new ArrayList<>();
animals.add(new Cat());
animals.add(new Dog());
new AnimalFeeder().feed(animals);
//고양이와 개를 암시적으로 Animal유형으로 업캐스트
```

- 각 고양이와 개는 동물 → 다형성
- **다형성**(**polymorphism**)이란 하나의 객체가 여러 가지 타입을 가질 수 있는 것, Animal의 인스턴스를 Object유형의 참조변수에 할당할 수 있음

```java
Object object = new Animal();
```

- Mew인터페이스를 생성하고 Cat이 구현할수 있다.

```java
public interface Mew {
    public void meow();
}

public class Cat extends Animal implements Mew {
    
    public void eat() {
         // ... 
    }

    public void meow() {
         // ... 
    }
}

```

- *Cat 개체를 Mew* 로 업캐스트 가능

```java
Mew mew = new Cat();
```

- *Cat* 은 *Mew* , *Animal* , *Object*  및 *Cat* 이다. 이 예에서 네 가지 유형 모두의 참조 변수에 할당할 수 있다.

### 재정의

- eat()메소드가 재정의됨

```java
public void feed(List<Animal> animals) {
    animals.forEach(animal -> {
        animal.eat();
    });
}
```

- 로그를 찍어보면 Cat과 Dog의 메소드가 호출 되는것을 볼 수 있음

> web - 2018-02-15 22:48:49,354 [main] INFO com.baeldung.casting.Cat - cat is eating
web - 2018-02-15 22:48:49,363 [main] INFO com.baeldung.casting.Dog - dog is eating
> 

**요약하자면:**

- 참조 변수는 개체가 변수와 같은 유형이거나 하위 유형인 경우 개체를 참조할 수 있습니다.
- 업캐스팅은 암시적으로 발생합니다.
- 모든 Java 객체는 다형성이며 업캐스팅으로 인해 상위 유형의 객체로 처리될 수 있습니다.

## 다운캐스팅

- 슈퍼클래스에서 서브 클래스로의 캐스팅

```java
Animal animal = new Cat(); //Animal에 meow 메소드가 존재하지않음

//다운캐스팅
((Cat) animal).meow();
```

- AnimalFeeder다시 작성

```java
public class AnimalFeeder {

    public void feed(List<Animal> animals) {
        animals.forEach(animal -> {
            animal.eat();
            if (animal instanceof Cat) {
                ((Cat) animal).meow();
            }
        });
    }
}
```

- 로그 찍어보면 아래와 같다

> web - 2018-02-16 18:13:45,445 [main] INFO com.baeldung.casting.Cat - cat is eating
web - 2018-02-16 18:13:45,454 [main] INFO com.baeldung.casting.Cat - meow
web - 2018-02-16 18:13:45,455 [main] INFO com.baeldung.casting.Dog - dog is eating
> 

### instanceof 연산자

- 객체가 특정 유형에 속하는지 확인을 위해 다운캐스팅 전에 주로 사용됨

```java
if (animal instanceof Cat) {
    ((Cat) animal).meow();
}
```

### 클래스 캐스트 예외

- instanceof연산자로 유형을 확인하지 않았으면 컴파일러는 문제없다고 생각할지 몰라도 런타임에는 예외가 발생한다.
- instanceof 연산자 제거

```java
public void uncheckedFeed(List<Animal> animals) {
    animals.forEach(animal -> {
        animal.eat();
        ((Cat) animal).meow();
    });
}
```

- 컴파일을 되지만 실행하려고 하면 예외가 표시된다.
- 다운캐스트하는 유형이 실제 객체의 유형과 일치하지 않으면 *ClassCastException 은 항상 런타임에 발생*
    - 관련없는 유형으로 다운캐스팅 → 컴파일러가 허용하지 않음

```java
Animal animal;
String s = (String) animal;
```

요약하자면:

- 하위 클래스에 특정한 멤버에 액세스하려면 다운캐스팅이 필요합니다.
- 다운캐스팅은 캐스트 연산자를 사용하여 수행됩니다.
- 객체를 안전하게 다운캐스트하려면 *instanceof*
    
    연산자가 필요합니다.
    
- 실제 객체가 우리가 다운 캐스트하는 유형과 일치하지 않으면 런타임에 *ClassCastException 이 발생합니다.*

## cast() 메소드

- Class 메소드를 사용하여 객체를 캐스팅 하는 또다른 방법

```java
public void whenDowncastToCatWithCastMethod_thenMeowIsCalled() {
    Animal animal = new Cat();
    if (Cat.class.isInstance(animal)) {
        Cat cat = Cat.class.cast(animal);
        cat.meow();
    }
}
```

- *cast(* ) 및 *isInstance() 메서드는 해당하는 cast 및 instanceof* 연산자 대신 사용된다.
- *제네릭 유형과 함께 cast()* 및 *isInstance()* 메서드를 사용하는 것이 일반적이다.