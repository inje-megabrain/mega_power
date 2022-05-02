<h1>CSS 속성2</h1>

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href = "/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/CSS 속성2.css" rel="stylesheet">
    </head>
    <body>
        <div class = "btn">
            대진대학교
        </div>
    </body>
</html>
```

```css
.btn {
    border: 1px solid black;
    text-align: center;
    width : 200px;
    padding: 50px;
    transition: 0.3s; /*딜레이 주는 속성*/
}

 .btn:hover { /*색 바꾸기 */
    color: white;
    background-color: black;
}
```

- `transition`은 아래에서 만든 속성에 딜레이를 주는것
- `hover`은 마우스를 올렸을 때 반응하게하는 속성

<img src="CSS 속성2.png">