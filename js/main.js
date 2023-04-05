// 자동 슬라이드 기능 구현
const slides = document.querySelectorAll(".slide");
const intervalTime = 5000; // 5초마다 슬라이드 전환
let slideInterval;

const nextSlide = () => {
  // 현재 active 클래스가 있는 슬라이드 찾기
  const current = document.querySelector(".active");
  // 현재 active 클래스가 있는 슬라이드 인덱스 구하기
  const currentIndex = Array.from(slides).indexOf(current);
  // active 클래스 제거
  current.classList.remove("active");
  // 다음 슬라이드 인덱스 구하기
  let nextIndex = currentIndex + 1;
  // 마지막 슬라이드이면 다시 처음 슬라이드로
  if (nextIndex === slides.length) {
    nextIndex = 0;
  }
  // 다음 슬라이드에 active 클래스 추가
  slides[nextIndex].classList.add("active");
};

// 자동 슬라이드 시작
slideInterval = setInterval(nextSlide, intervalTime);

//상품 수량 체크용
function proCount(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("result");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 수량 더하고 빼는거
  if (type === "plus") {
    number = parseInt(number) + 1;
  } else if (type === "minus") {
    if (parseInt(number) <= 0) {
      number = number;
    } else {
      number = parseInt(number) - 1;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
}
