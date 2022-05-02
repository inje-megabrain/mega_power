# Window터미널 꾸미기

WSL을 이용한 윈도우 터미널 꾸미기 입니다

가상머신을 이용하면 충돌하는 이슈가 있으니 조심하세용

윈도우10 에서는 기본적으로 powershell을 제공합니다

여기를 관리자모드로 들어가 시면 됩니당

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled.png)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%201.png)

### 먼저 WSL2를 설치

아래의 명령어를 파워쉘에 작성해줍니다

WSL활성화

```jsx
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

VM 플랫폼 활성화

```jsx
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

이때 한번 재부팅을 해줍니다

그리고

[https://docs.microsoft.com/ko-kr/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package](https://docs.microsoft.com/ko-kr/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

여기로 이동해서 

- [x64 머신용 최신 WSL2 Linux 커널 업데이트 패키지](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

다운로드한 다음에 MS Store에 들어가서 Ubuntu 20.04 LTS 무료버전 설치 후 실행

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%202.png)

실행하면 초기에 우분투를 설치할때 까지 조금 기다려 줍니다

그리고 아이디와 비밀번호를 설정해줍니다

id는 한번 pw는 두번 쳐주면 됩니다

ex)

id : sbs

pw : 12341234

      : 12341234

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%203.png)

ID,Password를 설정했으면 아래의 명령어로 우분투를 업데이트와 업그레이드를 해줍니다

관리자의 권한으로 실행하기 때문에 아까 설정해뒀던 비밀번호를 입력해줍니다

`sudo apt update`            `sudo apt upgrade`

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%204.png)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%205.png)

더 진행할건지 물음에는 그냥 엔터 치시면 알아서 진행 됩니다 (학교 인터넷 기준으로 시간이 좀 걸립니다 ㅠ)

모든 설치가 완료되면 powershell을 관리자 권한으로 실행하여 아래의 명령어를 작성합니다

`wsl -l -v`

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%206.png)

여기서 NAME에 집중해주세요 그리고 아래의 명령어를 실행합니다

`wsl --set-version Ubuntu20.04LTS 2` (version 다음은 NAME과 동일하게 적은다음 띄워쓰고 2를 쓰면 됩니다)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%207.png)

---

환경 설정은 끝났습니다

이제 다음으로 넘어가보죠

MS스토어에서 [윈도우터미널](https://www.microsoft.com/ko-kr/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab)을 설치해줍니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%208.png)

실행한 후 설정에 들어갑니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%209.png)

설정에 들어가면 Json파일 열기를 들어갑니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2010.png)

프로필에 Ubuntu를 WSL2로 수정해주고

![dddddd.png](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/dddddd.png)

위로 올려서 defaltProfile도 가이드에 있는 키를 복사하여 수정 해줍니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2011.png)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2012.png)

그다음 디폴드 값을 수정해줍니다

해당 폰트는 [여기](https://github.com/romkatv/dotfiles-public/tree/master/.local/share/fonts/NerdFonts)서 다운로드 할 수 있습니다! 

4개 전부 다운받은 다음 설치 해주시고 적어주세요!

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2013.png)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2014.png)

그리고 저장한다음에 나와서

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2015.png)

꼭 저장을 눌러줍시다!

이제 다시 우분투를 열어서 ZSH 및 OyMyZsh를 설치해줍니다

아래의 명령어를 입력하여 zsh를 설치합니다

`sudo apt install zsh` 

뭍는말에는 전부 설치한다고 해주면 됩니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2016.png)

zsh가 설치 완료되면 아래의 명령어를 통해 Oh My Zsh를 설치해줍니다

```jsx
sh -c "$(curl -fsSL [https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh](https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh))"
```

설치가 완료되면 아래의 모습을 보입니당

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2017.png)

oh my zsh를 사용하기 위해선 Powerlevel10K라는 테마를 설치 해줘야하는데 깃허브에서 클론때리면 됩니다. 아래의 명령어를 작성해 주세용

```jsx
sudo git clone --depth=1 [https://github.com/romkatv/powerlevel10k.git](https://github.com/romkatv/powerlevel10k.git) ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2018.png)

그리고 아래의 명령어를 작성합니다

`code ~/.zshrc` (visual Code가 설치 되어있어야합니당)

visual Code가 열리면서 쫘악 뜰텐데 아래의 부분을 수정해주면 됩니다

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2019.png)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2020.png)

이렇게 powerlevel10k/powerlevel10으로 수정해 주고 저장 해줍니다

이렇게 작성하고 터미널을 윈도우 터미널을 들어가면 아래와 같이 나옵니다

아까 위에서 폰트 설치및 등록을 안해줬으면 이렇게 안떠요!

꼭 폰트를 다운로드하고 설치한 다음에 해주세용

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2021.png)

그다음 부터는 본인이 원하는 스타일을 하나하나 넣어주면 됩니다^^

혹여나 중간에 꺼지거나 스타일을 새로 바꾸고 싶을 경우에는 아래의 명령어를 입력하세요

`p10k configure`

yyyy2122211231121n1y

저는 이 순서대로 하였습니당(아마 맞을거에요)

![Untitled](Window%E1%84%90%E1%85%A5%E1%84%86%E1%85%B5%20966ce/Untitled%2022.png)

어때요 정말 이쁘죠?

---

# Reference

[Windows 10 터미널 커스터마이징 (feat. WSL2, oh-my-zsh)](https://mong9data.tistory.com/113?msclkid=a779e206aa8911ecbad236bda89432e1)