/*
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano:  Aumento:
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumentoSalarial(plano, salarioatual){
    switch(plano){
        case "A":
            return console.log(salarioatual + ((salarioatual * 10) / 100))
        case "B":
            return console.log(salarioatual + ((salarioatual * 15) / 100))
        case "C":
            return console.log(salarioatual + ((salarioatual * 20) / 100))
        default:
            return "Plano inválido"
    }
}

aumentoSalarial("A", 1000)
aumentoSalarial("B", 1000)
aumentoSalarial("C", 1000)