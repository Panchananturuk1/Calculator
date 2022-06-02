//function that display value

function disp(val) {
  document.getElementById('inp').value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById('inp').value;
  let y = eval(x);
  document.getElementById('inp').value = y;
}

function clr() {
  document.getElementById('inp').value = "";
}
