// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const range = document.getElementById("range"),
  // 숫자입력
  choice = document.getElementById("choice"),
  // 버튼
  play = document.getElementById("play"),
  // 숨겨진 문장
  p = document.querySelector("p"),
  // 승패결과
  result = document.getElementById("result"),
  select = document.getElementById("select");

// 설정 범위 between 0 and max에 반영하도록 하는 함수

range.oninput = handleInput;
function handleInput(e) {
  const element = document.getElementById("edit");
  element.innerHTML = "";
  element.textContent = `Genereate a number between 0 and ${e.target.value}`;
}

// 숫자 입력 후 localstorage에 저장하는 함수
// 입력한 값을 localstorage에 저장
const choiceNum = "choiceNum";

function saveNum(text) {
  localStorage.setItem(choiceNum, text);
}

//입력한 값 가져오는 함수. 저장하기 위해 saveNum으로 넘김
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = choice.value;
  saveNum(currentValue);
}

// input text에 값 변화시 handleSubmit 함수 작동
choice.addEventListener("change", handleSubmit);

// 버튼 작동 함수
function hidden(event) {
  event.preventDefault();
  //숨기는 class인 no 제거
  p.classList.remove("no");
  //저장된 스토리지에서 value 가져옴
  const myNum = localStorage.getItem(choiceNum);
  // 문자열을 숫자로 변환 parseInt(바꿀 것, 진수(우리는 십진수))
  const myNumValue = parseInt(myNum, 10);
  //범위 내 숫자 랜덤 생성
  const rangeNum = range.value;
  const number = Math.floor(Math.random() * rangeNum + 1);
  select.textContent = `You chose: ${myNum}, the machine chose: ${number}`;
  //오류 발생. class를 지워도 결과가 안나옴. 따라서 id를 이용해 dispaly: block으로 덮어씌움.
  result.style.display = "block";
  if (myNumValue === number) {
    result.innerText = "You win!";
  } else {
    result.innerText = "You lost!";
  }
}

play.addEventListener("click", hidden);
