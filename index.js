let output = document.getElementById("output");
let numAntes = "";
let numDepois = "";
let sinal = "";
let numeros = "";
let operacao = "";
let resultado = 0;

function show(num) {
    numeros += num;
    output.innerHTML = numeros;
}

function limpar() {
    numeros = "";
    numAntes = "";
    numDepois = "";
    sinal = "";
    operacao = "";
    resultado = 0;
    output.innerHTML = "";
}

function del() {
    numeros = numeros.slice(0, -1);
    output.innerHTML = numeros;
}

function inserirSinal(operacao) {
    const lastCharOutput = numeros.charAt(numeros.length - 1);
    if (lastCharOutput == "+" ||
        lastCharOutput == "-" ||
        lastCharOutput == "*" ||
        lastCharOutput == "/" ||
        lastCharOutput == "%") {
        // console.log("Já possui operador")
        numeros = numeros.slice(0, -1) + operacao;
        output.innerHTML = numeros;
    } else {
        // console.log("Não possui operador");
        numeros += operacao;
        output.innerHTML = numeros;
    }
}

function incluirPonto(){
    if(numeros.includes('.')){

    } else {
        output.innerHTML += '.';
    }
}


function calcular(){
    numeros = String(eval(numeros));
    output.innerHTML = numeros;
}


btn1.addEventListener("click", function () {
    show("1");
});

btn2.addEventListener("click", function () {
    show("2");
});

btn3.addEventListener("click", function () {
    show("3");
});

btn4.addEventListener("click", function () {
    show("4");
});

btn5.addEventListener("click", function () {
    show("5");
});

btn6.addEventListener("click", function () {
    show("6");
});

btn7.addEventListener("click", function () {
    show("7");
});

btn8.addEventListener("click", function () {
    show("8");
});

btn9.addEventListener("click", function () {
    show("9");
});

btn0.addEventListener("click", function () {
    show("0");
});

btnSomar.addEventListener("click", function () {
    inserirSinal("+");
});

btnSubtrair.addEventListener("click", function () {
    inserirSinal("-");
});

btnMultiplicar.addEventListener("click", function () {
    inserirSinal("*");
});

btnDividir.addEventListener("click", function () {
    inserirSinal("/");
});

btnPorcentagem.addEventListener("click", function () {
    inserirSinal("%");
});

btnLimpar.addEventListener("click", function () {
    limparC();
});

btnIgual.addEventListener("click", function () {
    calcular();
});

btnVirgula.addEventListener("click", function () {
    show(".");
});