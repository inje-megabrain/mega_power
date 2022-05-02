# mega_power Github 시작하기

처음에 git init이 되어있는 페이지로 이동합니다

`cd Desktop/Dev/mega_power/mega_power`

이렇게 하나하나 옮겨도 괜찮습니당

`cd Desktop`

`cd Dev`

`cd mega_power`

`cd mega_power`

그리고 매인 브랜치로 이동합니다

`git checkout main`

그리고 현재 main에 있는 것을 가져와야합니다

`git pull`

이제 원래있던 본인 브랜치를 지워줍니다

`git branch -d kyl`

`git branch -r`을 하면 현재 깃허브에 만들어져 있는 브랜치를 볼수 있습니다

![Untitled](mega_power%209d05b/Untitled.png)

2-step이 있는걸 찾으셨나요?

q를 누르면 원래 터미널로 돌아와요(안될경우 한/영키를 눌러서 다시 해보세요!)

여기 브랜치로 가서 본인 브랜치를 새로 만들어 줄거에요

로컬에는 2-step브랜치가 없기 떄문에 브랜치를 만들어줄거에요

`git branch 2-step`

그리고 2-step로 브랜치를 이동해줍니다

`git checkout 2-step`

그리고 `git log`나 `git status`, `git branch -a` 등 을 이용해서 

현재 브랜치가 어디를 가리키고 있는지 확인하고

![Untitled](mega_power%209d05b/Untitled%201.png)

![Untitled](mega_power%209d05b/Untitled%202.png)

![Untitled](mega_power%209d05b/Untitled%203.png)

2-step를 가리키면 2-step브랜치와 연결된거에요

`git log`나 `git branch -a`를 써서 확인한 경우 q를 눌러서 나와줍니다!

이제 아까 했던것과 똑같이 본인 브랜치를 생성해주면 됩니다

`git branch kyl`

`git checkout kyl`

그리고 서버에 로컬 브랜치를 푸쉬를 해줘야합니다

`git push origin kyl`

push가 안되면 밑에 명령어를 사용해보세요

`git push -u origin kyl`

하고 현재 가리키고 있는 브랜치를 확인 해봅니다

github 메가파워 들어가서 브랜치를 눌러보면 들어가 있는 것을 볼 수 있을거에요

마지막으로 1-step이 수정되고 새로생긴 2-step을 가져와야합니다

`git fetch`나 `git pull`을 사용해서 작업 환경을 최신화 해줍니다

이제 작업 환경 완성입니당

그리고는 2주차 폴더를 만들어주세요

이제 이 폴더 안에 개인 공부나 커리큘럼 공부한거를 넣어주면 됩니다.

---

윈도우 에서도 멋있게 터미널을 꾸밀 수 있습니당

[윈도우 터미널 꾸미기](https://www.notion.so/b3f70bc5e105466d983f0a3b31b59da3) 

이거 따라하면서 터미널 꾸미기도 해보세요~

본인의 현재 추가/수정된 파일이 몇개인지, 브랜치는 어디인지, 현재 경로는 등등

많이 어려워 보이는 터미널을 조금 더 직관적으로 확인 할 수 있을거에요

어려워 보여도 하나하나 차근차근 따라가면서 하면 터미널 사용할때 편할거에용

---

이제 기본적인 깃허브 커밋, push하는 방법입니다

수정/추가 된 파일을 깃허브에 올린다는 add명령어를 먼저 써줍니다

`git add .` (.앞에 띄어쓰기 필수)

그리고 이 추가된 것들에 커밋(메세지)를 넣어줍니다

`git commit -m “커밋 메세지”`

마지막으로 깃 허브에 올린다는 push를 해줍니다

이슈번호가 있을경우에는 앞에 `#n` 을 해서 넣어줘야합니다!(`git commit -m “#n 커밋 메세지”`)

`git push`

만일에 upstream , -u 같은 에러가 뜨면서 push가 안될경우

`git push -u origin kyl`

을 사용하면 커밋이 될겁니다(보통 처음에 1번만 하고 그 뒤로는 뜰일이 없어요)