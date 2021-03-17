# 숫자게임 코드
 * 범위를 설정해서 입력한 숫자와 랜덤한 숫자가 같으면 win 다르면 lost



 ## 코드를 짤 때 생각한 도안
 
[아이디어]
* 큰 함수 3개로 나눠봄.

1. 범위 표현
Generate a number between 0 and `${}` -> range로 설정한 범위 반영<br>
[참고 페이지](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput)

2. input text 입력시 입력한 숫자 localstorage에 저장
완료 - 희동님 아이디어 참고 (addEventListener이용하기)

3. play버튼 누르면 숨겨져있던 문장 드러나며 문장에 localStorage에서 가져온 숫자와 랜덤숫자 기입
you chose: ${로컬 숫자} the machine chose: `${범위 내 랜덤 숫자} -> 입력한거 넣고 랜덤 숫자 결과 반영
You lost!, you win ->if로 숫자비교하여 문장 드러내게 하기.
