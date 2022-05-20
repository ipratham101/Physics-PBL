
function fun1(){

let str1 = document.getElementById('n1').value;
let str2 = document.getElementById('n2').value;
let str11 = parseFloat(str1);
let str22 = parseFloat(str2);
let divide = str22 / str11;
let arctan = Math.atan(divide);
document.getElementById("a1").innerHTML = arctan; 
if (str11===0) {
    document.getElementById("a1").innerHTML = "Enter valid value of n1, as n1 cannot be equal to zero"; 
}
}

