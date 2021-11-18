/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/
let zero = "Zero"
let um = "Um"
let dois = "Dois"
let tres = "Três"
let quatro = "Quatro"
let cinco = "Cinco"
let seis = "Seis"
let sete = "Sete"
let oito = "Oito"
let nove = "Nove"
let dez = "Dez"

function numeroExtenso(numero){
    switch(numero){
        case 0:
            return zero
        case 1:
            return um
        case 2:
            return dois
        case 3:
            return tres
        case 4:
            return quatro
        case 5:
            return cinco
        case 6:
            return seis
        case 7:
            return sete
        case 8:
            return oito
        case 9:
            return nove
        case 10:
            return dez
        default:
            return 'Numero fora do intervalo'
    }
}
console.log(numeroExtenso(11))