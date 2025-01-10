function view(num) {
    document.getElementById("result").value += num
}
function compute() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
function clr() {
    document.getElementById("result").value = " "
}
function x() {
    let num = document.getElementById("result").value
    var a = 1 / num
    document.getElementById("result").value = a
}
function square() {
    let num = document.getElementById("result").value
    var a = num * num
    document.getElementById("result").value = a
}
function root() {
    let num = document.getElementById("result").value
    document.getElementById("result").value = Math.sqrt(num)
}
function addsub() {
    let num = document.getElementById("result").value
    var a = - num;
    document.getElementById("result").value = a
}
function cut() {
    let num = document.getElementById("result").value = document.getElementById('result').value.slice(0, document.getElementById
        ('result').value.length - 1);
    document.getElementById("result").value = a;
}
function reset() {
    document.getElementById("result").value = "";
}        
