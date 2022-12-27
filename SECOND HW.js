



function calc(){
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var oper = document.getElementById("operators").value;

    if(oper === "+"){
        document.getElementById("result").value = number1 + number2; 
    }

    if(oper === "-"){
        document.getElementById("result").value = number1 - number2; 
    }

    if(oper === "/"){
        document.getElementById("result").value = number1 / number2; 
    }

    if(oper === "*"){
        document.getElementById("result").value = number1 * number2; 
    }

 }