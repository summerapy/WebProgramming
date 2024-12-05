/*
TODO: 함수형 프로그래밍
 세계 = 함수의 흐름
 입력– 출력 하는 작은 함수를 묶어서 프로그램을 구성하는 기법
 외부 효과(side effect)가 없는 함수(순수 함수)만의 조합으로 프로그래밍 하는
방법 = 외부의 값을 읽어오지도 않고 영향을 미치지도 않는 함수만을 만드는
것이 목표
 병렬 처리, 비동기 처리에 유리/적합
 함수: 단 하나의 기능만 수행하는 것이 바람직
 변수와 for문을 사용을 억제

단점
 작성이 어려움
 실행 속도가 느림
 필요 메모리 증가

장점
 검증이 쉽다.
 동작 파악이 쉽다.

TODO: 유용한 함수들

predicate
true / false 만을 리턴하는 함수

filter() 함수
 array.filter(item => 조건)
 array 에서 원소 하나(item)씩 조건 검사를 하여 true인 것만 push() 하는 방식

map() 함수
 array.map(item => action)
 array 에서 원소 하나(item)씩 action을 실행하여 push() 하는 방식

reduce() 함수
 array.reduce(action, init_value)
 array 원소 하나(item)씩 action을 실행
 첫 원소를 이용할 때는 init_value 이용 → result 생성
 이 후 원소 부터는 result와 item을 이용하여 action 실행
 최종 result를 리턴 → array의 모든 원소를 하나로 줄임
*/