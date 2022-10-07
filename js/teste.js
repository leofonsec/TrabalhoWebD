function soma(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) + parseFloat(y.value);
}

function subtracao(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) - parseFloat(y.value);
}

function multiplicacao(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) * parseFloat(y.value);
}

function divisao(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) / parseFloat(y.value);
}

function modulo(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) % parseFloat(y.value);
}

function potencia(){
    var x = document.querySelector("#num1");
    var y = document.querySelector("#num2");
    document.getElementById("resultado").innerHTML = parseFloat(x.value) ** parseFloat(y.value);
}

function teste(){
    var a = 2;
    var b = 3;
    var c = a;
    for(i = 0; i < b; i++)
    {
        if(i === 0)
            a *= 1;
        else
            a *= c;    
    }
    document.getElementById("teste").innerHTML = a;
}

function voltar(){
    document.getElementById("teste").innerHTML = "Calculadora";
}