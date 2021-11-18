/*
12) Faça um algoritmo que calcule o fatorial de um número.

O fatorial é uma operação muito importante para o estudo e desenvolvimento da análise combinatória. Na matemática 
o número seguido do símbolo de exclamação (!) é conhecido como fatorial, por exemplo, x! (x fatorial).
Conhecemos como fatorial de um número natural a multiplicação desse número por seus antecessores com exceção do zero, ou seja:
n! = n · (n-1) · (n-2) … 3 · 2 · 1
Vale ressaltar que, para que essa operação faça sentido, n é um número natural, ou seja, não calculamos fatorial de um número
negativo, ou mesmo de um número decimal, ou de frações.
*/

function calculaFatorial(numero){
    let fatorial = numero
    let contador = numero
    if (fatorial < 0){
        return console.log(`Não existe fatorial de número negativo. Número informado: ${fatorial}`)
    } else if (fatorial == 0){
        return console.log(`${numero}! = 1`)
    }else if (contador >= 1){
        while (contador > 1){
            contador--
            fatorial = fatorial * contador            
        }
     return console.log(`${numero}! = ${fatorial}`) 
    }
}
calculaFatorial(12)