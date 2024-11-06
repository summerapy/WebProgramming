onmessage = function(e) {
    let num1 = parseFloat(e.data.num1);
    let num2 = parseFloat(e.data.num2);
    let product = num1 * num2;
    postMessage(product); 
  };
  