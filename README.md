# MKB DANCE MUSIC 
> 2022.12 ~ 2023.02
>
> MKB DANCE MUSIC의 소개, 연락을 위한 웹 페이지 입니다. 

# 사용 이미지
## 메인 페이지 접속
![entry](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/4a3042da-a3a6-461d-9d67-493b2bd09e30)

## 메인 페이지 음악 플레이어
![image](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/dc2f43d4-67fc-49f7-9f43-1bb2479afa10)

## 테마별 음악 플레이어
![image](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/39074cb1-e964-43e0-895b-f79f22c7f124)

## 모바일 버전 음악 플레이어
![image](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/fa474088-cd46-4906-9be3-7a68737ff90c)
![pump](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/6e5825e9-f414-4d9e-8f2d-c1eb36032ea5)

## 모바일 환경에서의 연락 기능 제공
![write](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/d6ac25a2-a12f-47a1-8cc5-3f294b13d246)

## 모바일 환경에서 메인 페이지 이동
![swipe](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/c613cbcc-a760-4934-a312-060c82a9391f)

# 구현 내용
<details>
<summary><b>모바일, 태블릿, PC 등 다양한 해상도의 기기 지원</b></summary>
<div markdown="1">
  </br>

  > Tailwind의 Utility Class 를 이용해 BreakPoint를 지정해 반응형 페이지 제작
  - [BreakPoint를 이용해 제작](https://github.com/LEEGURTS/MKBNEWWEB/blob/master/src/components/Contact/Contact.tsx#L170)
- [상대 크기를 이용해 제작](https://github.com/LEEGURTS/MKBNEWWEB/blob/master/src/components/MusicPlay/MusicPlayer.tsx#L263)
</div>
</details>

<details>
<summary><b>음원 플레이어 기능 제공</b></summary>
<div markdown="1">

  > 자체 음원 플레이어를 통한 음원 재생 기능 제공
#### 1. IOS에서는 볼륨조절을 지원하지 않는다.
IOS 운영체제 에서는 다음과 같은 정책이 있다.
https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html
```
Volume Control in JavaScript
On the desktop, you can set and read the volume property of an <audio> or <video> element. This allows you to set the element’s audio volume relative to the computer’s current volume setting. A value of 1 plays sound at the normal level. A value of 0 silences the audio. Values between 0 and 1 attenuate the audio.

This volume adjustment can be useful, because it allows the user to mute a game, for example, while still listening to music on the computer.

On iOS devices, the audio level is always under the user’s physical control. The volume property is not settable in JavaScript. Reading the volume property always returns 1.
```
IOS 에서는 자바스크립트로 물리적인 볼륨 조절이 안된다는 정책이다.
<br></br>
하지만 IOS 상에서도 볼륨 조절 기능을 제공하고 싶었다.
따라서 조금 생각을 바꾸어 볼륨을 조절해봤다.
- 기기의 볼륨이 아니라 음원 자체의 볼륨을 조절하면 가능하지 않을까?

따라서 음악의 Gain값을 조절해 음량 조절 기능을 제공한다.
- [GainNode, WebAudioAPI를 이용한 음량 조절](https://github.com/LEEGURTS/MKBNEWWEB/blob/master/src/components/MusicPlay/MusicPlayer.tsx#L83) 

#### 2. 매번 음원을 로딩하는건 큰 부담이다.

음원 하나당 용량이 5mb 쯤 한다. 이렇게 큰 음원은 로딩을 자주할수록 결국 비용과 직결된다.
<br></br>
그러나 localstorage에 저장하기엔 용량지원이 5mb 뿐이고 string 밖에 저장을 지원하지 않는다.
따라서 indexDB에 blob 형태로 저장해두어 재접속시 이를 이용해 재생한다.
- [음원파일을 받아 blob 형태로 저장, 이미 있을시에는 이를 통해 재생](https://github.com/LEEGURTS/MKBNEWWEB/blob/master/src/components/MusicPlay/MusicPlayer.tsx#L195C9-L195C25) 

최근에 안 사실인데 크롬은 이미 큰 파일도 캐싱을 지원한다.
![image](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/5b60105f-44e5-47ed-9ded-845b58dee7e5)

실제로 
```
C:\Users\사용자명\AppData\Local\Google\Chrome\User Data\Default\Cache\Cache_Data
```
에 이미 캐싱된 데이터가 있었고 
![image](https://github.com/LEEGURTS/MKBNEWWEB/assets/79559361/37065e21-dcb6-4869-bdef-3cb270ae8c11)
음원으로 추정되는 캐싱된 파일을 mp3로 포멧을 변경하여 재생했더니 정상적으로 재생된다.
원효대사 해골물을 마시고 있었지만 크롬은 대부분의 것을 캐싱하는것을 지원한다는 것을 알게 되었다.
</div>
</details>
<details>
<summary><b>뮤지션과 간단한 커넥션 제공</b></summary>
<div markdown="1">

#### 1. 연락내용을 음악가에게 어떻게 제공하지?
라이브러리 중 emailJS가 있다. 이는 라이브러리 형태로 편하게 이메일을 전송할 수 있는 형태로 정해진 포멧에 맞추어 객체를 제공하면 키값을 통해 메일을 전송한다.
- [emailJS를 활용한 코드](https://github.com/LEEGURTS/MKBNEWWEB/blob/master/src/components/Contact/Contact.tsx#L53)
</div>
</details>
<details>
<summary><b>MKB DANCE MUSIC에 관한 정보 제공</b></summary>
</details>
