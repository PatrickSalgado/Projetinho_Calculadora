function somar(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById('resultado').textContent = num1+num2
}

function subtrair(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById('resultado').textContent = num1-num2
}

function divisao(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById('resultado').textContent = num1/num2
}

function multiplicacao(){
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)

    document.getElementById('resultado').textContent = num1*num2
}
