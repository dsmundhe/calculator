function addtoDisplay(val) {
  document.getElementById("inputval").value += val;
}
function addtoDisplayac() {
 document.getElementById("inputval").value="";
}
function addtoDisplaydel(val) {
  document.getElementById("inputval").value = "";
}
function calculate() {
  let expression = document.getElementById("inputval").value;
  let result = eval(expression);
  document.getElementById("inputval").value = result;
}
