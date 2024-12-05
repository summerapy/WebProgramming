/*

TODO: Basics
Fundamental building block
 Declaration
 function name(param1, param2, …) {body … return; };
 One function == one thing
 Naming: doSomething, verb, command
 Function is an object in JavaScript

TODO: Parameters
 Primitive parameters: passed by value
 Object parameters: passed by reference

TODO: Scope
 안에서는 밖을 볼 수 있음– 밖에서는 안을 볼 수 없음
 Closure: 중첩된 함수에서 자식 함수가 부모 함수에 정의된 변수를 접근할 수 있는 것

TODO: First-Class Function
일급 함수 (일급 객체): function은 variable과 같이 다룰 수 있음
 변수, 프로퍼티 값
 함수의 인자
 함수의 반환값
 함수형 프로그래밍
함수의 프로퍼티
 caller - 호출 함수
 length - 인자 개수
 name
 prototype - 프로토타입 객체의 참조
 apply()/call()
 함수 실행: this 값과 함수 인자 이용
 bind(): 객체에 함수를 바인드

TODO: Callback Function
 Callback function
 callback = 함수를 전달해서 상황에 따라 적절한 함수를 호출하도록 하는 것
 전달된 함수들 = callback functions
 예
 addEventListner()에 전달되는 함수 (이벤트 처리기)
 타이머 함수에 전달되는 함수: setInterval(f(), tm); setTimeout(f(), tm);

TODO: 함수 리턴하기
 returnFunction: 함수를 리턴하는 함수
 인자를 받지않고 호출됨
 인자 2개를 받아 합을 리턴하는 함수를 리턴
 커링(curring): 화살표를 2번 이상 사용하는 방법
 returnFunction()  내부적으로 2개의 인자를 가지는 함수 == plus

TODO: 고차 함수 
 함수를 인자로 받거나 함수를 반환하는 함수
 예: Array.map() 메소드- 배열 내 모든 요소를 인자로 제공받는 callback 함수를
호출하여 새로운 배열을 만듬

TODO: 커링 (curring)
 인자를 여러 개 받는 함수를 분리하여, 인자가 하나인 함수의 체인(중첩 함수)
으로 만드는 방법
 함수의 전달인자 몇 개를 미리 채워 더 간단한 함수를 만드는 방법
 함수를 재사용하는데 유용하게 쓰일 수 있는 기법
 매개 변수가 항상 비슷할 때 유용
 외부 함수 인자는 변하지 않는 것
 내부 함수 인자는 변하는 것
-0-
 2개 이상의 화살표로 함수를 정의하는 것
 화살표 개수만큼 인자(파라미터)를 전달해야 함
 화살표 개수보다 적은 개수의 인자를 전달 받으면 함수를 리턴
 add(): 인자를 두 개 받아서 합을 리턴하는 함수
 add10(): 인자를 하나 받아서 10을 더한 값을 리턴하는 함수
*/