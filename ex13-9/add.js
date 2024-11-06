// add.js
onmessage = function(e) {
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    let sum = 0;
    for (let i = from; i <= to; i++) {
      sum += i;
    }
    postMessage(sum); // 계산된 합을 메인 스크립트로 전달
  };
  