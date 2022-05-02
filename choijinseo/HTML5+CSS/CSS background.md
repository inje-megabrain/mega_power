<h1>CSS background</h1>

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link href = "/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/CSS background.css" rel="stylesheet">
    </head>
    <body>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="content">
            주구절절한 내용이 담겨있습니다.
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    </body>
</html>
```

```css
.content {
    width: 500px;
    height: 200px;
    background-image: url("/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/background.png");
    background-repeat: no-repeat; /*이미지 반복 X*/
    background-size: cover; /*화면 가득*/
    background-position: center; /*이미지 화면 가운데*/
    background-attachment: fixed; /*배경이미지 고정*/
}
```

- `background-image: url`("/Users/choijinseo/mega/mega_power/choijinseo/HTML5+CSS/background.png");
    - 배경 이미지 생성
- `background-repeat: no-repeat;`
    - /*이미지 반복 X*/
- `background-size: cover;`
    - /*화면 가득*/
- `background-position: center;`
    - /*이미지 화면 가운데*/
- `background-attachment: fixed;`
    - /*배경이미지 고정*/
        
<img src ="CSS background.png">