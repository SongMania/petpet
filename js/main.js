//상품 수량 체크용
function proCount(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("cResult");
  const resultElement1 = document.getElementById("cResult1");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;
  let number1 = resultElement1.innerText;

  // 수량 더하고 빼는거
  if (type === "plus") {
    number = parseInt(number) + 1;
    number1 = number * 20000;
  } else if (type === "minus") {
    if (parseInt(number) <= 1) {
      number = number;
      number1 = number * 20000;
    } else {
      number = parseInt(number) - 1;
      number1 = number * 20000;
    }
  }

  // 결과 출력
  resultElement.innerText = number;
  resultElement1.innerText = number1;
}

//광고 슬라이드
$(".ad").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

//그 아래 상품 슬라이드
$(".conMainImg").slick({
  autoplay: true,
  autoplaySpeed: 4000,
});
