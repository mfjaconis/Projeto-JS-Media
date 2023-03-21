// Escreva um programa que calcule a média de três números e exiba o resultado no console.

function media() {
    let numero1 = parseFloat(document.getElementById("numero1").value)
    let numero2 = parseFloat(document.getElementById("numero2").value)
    let numero3 = parseFloat(document.getElementById("numero3").value)
    let resultado = document.getElementById("resultado")

    let media = (numero1 + numero2 + numero3) / 3

    resultado.innerHTML = `A média dos três números digitados é de: ${media.toFixed(2)}`
}

