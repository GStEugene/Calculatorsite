let expElement = document.querySelector('.expression');
let outElement = document.querySelector('.span_output');

expElement.addEventListener("input", function(){
  outElement.textContent = eval(expElement.value);
});
