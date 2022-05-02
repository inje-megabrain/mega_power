<h1>CSS 선택자 익히기</h1>
- id는 CSS에서는 `#[이름]`
- class는 CSS에서는 `.[이름]`

<aside>
💡 ID 선택자 : `id`특성에 따라 요소를 선택합니다. 문서 내에는 주어진 ID를 가진 요소가 하나만 존재해야 합니다.

</aside>

<aside>
💡 클래스 선택자 : 주어진 `class`특성을 가진 모든 요소를 선택합니다.

</aside>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>
        </title>
        <link href="/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/link test.css" rel="stylesheet">
    </head>
    <body>
        <div id="yellow">
            노란색
            <a href="http://www.gongdori.co.kr">
                공도리
            </a>
        </div>
        <div class="red">
            빨간색
        </div>
    </body>
</html>
```

```css
a {
    font-size: 33px;
    color: rgb(165, 158, 53);
    font-weight: 500;
}

#yellow {
    background-color: yellow;
}

.red {
    background-color: red;
}
```
<img src = "CSS 익히기.png">