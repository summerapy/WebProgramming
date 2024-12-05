/*
Introduction
 2009, Ryan Dhal – 네트워크를 이용하는 application 개발을 위한 platform
 크롬 V8 JavaScript 엔진 (= JavaScript runtime) 포함
 웹 브라우저에서 사용하는 Javascript 실행 엔진을 다른 곳(server, pc, …)에서
사용할 수 있게 됨
 여러 platform에서 동작 (Windows, Linux, Mac OS X, ...)
 Server에서 JavaScript 이용 가능

 비동기(asynchronous) IO + 이벤트 기반
 single-thread, non-blocking
 함수형 프로그래밍 지향 → 복잡한 기능 개발할 때, 명령형 언어에 대한 좋
은 대안
 설치: https://nodejs.org

비동기입출력
 Node.js가 request를 다루는 방법
 file system에게 작업 전송
 다음 request를 처리할 준비가 됨
 file system이 file을 열어서 읽을 때, server는 내용을 client에게 전송
 종합
 요청 처리가 끝나기 전에 다른 요청을 동시에 처리
 파일 읽기 요청 전에 callback function 등록
 읽기 작업이 끝나면 callback function 자동 호출

이벤트기반
 이벤트가 발생할 때 미리 지정된 작업을 수행
 이벤트 리스너에 callback function 등록 = 이벤트가 발생할 때 무엇을 할지 미리
등록하는 것 !!!
 호출 스택

이벤트 루프 (event loop)
 이벤트 발생 시 호출할 callback 함수 관리
 호출된 callback 함수 실행 순서 결정
 Node 종료까지 이벤트 처리를 위한 작업 반복 = loop
태스크 큐: 이벤트 발생 후 호출되어야 할 callback 함수들이 기다리는 공간 (=
callback queue)
 백그라운드: 타이머, I/O 작업 콜백, 이벤트 리스너들이 대기하는 곳

non-blocking
 오래 걸리는 함수를 백그라운드로 보내고 다음 코드 먼저 실행
 백그라운드에 보낸 함수가 태스크 큐를 거처 호출 스택으로 올라오기를 기다림
 이전 작업에 완료될 때까지 멈추지 않고 다음 작업을 수행함
 파일 시스템 접근, 네트워크 요청 등의 작업을 할 때 non-blocking 방식으로 동작

Module
 JavaScript file의 일부를 따로 떼어 별도의 파일로 만든 것
 package: 여러 모듈을 합친 것
 npm: node package manager
 사용
 독립적 기능을 별로 파일로 분리 → 모듈
 여러 개의 파일로 나누어 개발
 모듈 사용: exports 전역 객체 이용
 require() 메소드

HTTP 객체
 http protocol로 웹 서버에 데이터 요청 기능: request()
 응답을 받으면 callback function 자동 호출: res 객체
 data event
 on(): [event – callback function] binding

전역 객체
 console: console 창에 결과를 보여주는 객체
 process: process 실행에 대한 정보를 다루는 객체
 exports: 모듈을 다루는 객체

method
 dir(object): 객체 속성 출력
 time(id): 실행 시간 측정을 위해 시작 시간 기록
 timeEnd(id): 실행 시간 측정을 위해 끝 시간 기록

싱글 스레드
 스레드 (thread): 작업을 처리하는 일손
 예: 식당
 손님 여러 명, 점원 1명 → 싱글 스레드
 손님 여러 명, 손님 1명당 점원 1명 → 멀티 스레드
 Node는 싱글 스레드, 넌블로킹 모델

** 외우기 **
 Single thread
 컴퓨터 자원을 적게 사용
 CPU core를 하나만 사용
 하나뿐인 thread를 에러로 멈추지 않도록 잘 관리해야 함 → 서버 전체가 멈출 수
있음
 Web server가 내장되어 있음
 JavaScript 언어 사용 → 큰 장점
 I/O가 많은 작업에 적합
 Libuv 라이브러리를 사용하여 I/O 작업을 non-blocking 방식으로 처리
 CPU 연산을 많이 요구하면 성능 저하
 Nginx 등보다 느림

용도
 개수는 많지만 크기는 작은 데이터를 실시간으로 주고 받을 때
 네트워크, 데이터베이스, 디스크 작업 등의 I/O에 특화
 실시간 채팅 app, 주식 차트, JSON 데이터를 제공하는 API 서버
 안 좋은 경우: 이미지/비디오 처리, 대규모 데이터 처리

웹, 모바일, 데스크톱 애플리케이션 개발에 사용됨
 노드 기반 웹 프레임워크
 Angular: 구글 진영에서 front end app 개발
 React: 페이스북 진영
 Vue, Meteor

*/