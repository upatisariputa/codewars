// 25, 50, 100 의 랜덤 하는 배열을 준다음
// 25짜리 티켓을 파는데 잔돈이 부족하면 no, 가능하면 yes
let arr = [25, 25, 50, 50, 100];

// 배열을 순회 하면서 25면 새로운 배열에 저장
// 50일 경우 앞에 25가 있으면 25를 하나 빼고 50을 저장
// 그게 안 될 경우 false
// 100일 경우 앞에 50,25 이거나
// 25,25,25일 경우 통과
// 그게 안 될 경우 false

function ticket(arr) {
  let newArr = [];
  let result = "YES";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 25) {
      newArr.push(25);
    } else {
      for (let k = 0; k < newArr.length; k++) {
        let count = 0;
        if (arr[i] === 50 && arr[i] - newArr[k] === 25) {
          newArr.splice(k, 1);
          newArr.push(50);
        }
        if (arr[i] === 100) {
          if (newArr.includes(25) && newArr.includes(50)) {
            let twentyFive = newArr.indexOf(25);
            let fifty = newArr.indexOf(50);
            newArr.splice(twentyFive, 1);
            newArr.splice(fifty, 1);
          }
        }
      }
    }
  }
}

// 위의 코드는 100인경우 코드가 너무 길어짐
// 100에서 25가 세개인 경우 newArr에서 세개를 제거하기가 까다로움
// 그리고 return 값을 yes, no로 주기도 어려움

// 힌트를 참고하여
// 25, 50, 100으로 키값을 주고 있을 경우 1씩 증가
// 거기서 값을 하나씩 빼기
