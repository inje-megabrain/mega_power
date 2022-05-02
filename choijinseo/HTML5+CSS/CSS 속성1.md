<h1>CSS text-align and float</h1>

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href = "/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/CSS 속성1.css" rel="stylesheet">
    </head>
    <body>
        <div class="left">
            공도리에 오신것을 환영합니다.
        </div>
        <div class="center">
            공도리는 무료 온라인 강의 플랫폼
        </div>
        <div class="right">
            만관잘부
        </div>
    </body>
</html>
```

```css
/* body {
   text-align: center;  
} */
div {
    float: left;
    /* float: none; 기본값 */ 
}
.left {
    text-align: left;
    border: 1px solid black;
}
.center {
    text-align: center;
    font-size: 55px;
    border: 1px solid black;
}
.right {
    text-align: right;
    border: 1px solid black;
}
```
<img src = "CSS 속성1.png">