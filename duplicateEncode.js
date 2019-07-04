function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((item, idx, w) => (w.indexOf(item) === w.lastIndexOf(item) ? "(" : ")"))
    .join("");
}

// 반복문을 사용 배열에 하나씩 넣어서 indexof나 includes를 사용하여
// 있는지 확인 후 만들어 주면 되지만
// indexOf 와 lastIndexOf를 사용할 수 있어야함
// word에 두개 이상이 있을 경우 indexof와 lastindexof를 사용하면
// 서로 다른 값이 나옴

//
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((item, idx, w) => (word.indexOf(item) === word.lastIndexOf(item) ? "(" : ")"))
    .join("");
}
// 위와 같이 코드 작성 시
// word는 대소문자가 구분이 되어있기 때문에
// map의 인자로 w를 넣어주어야 한다.
duplicateEncode("PPeFPPPPPyzn"); // '))(()))))((('
// '(((((((((((('
