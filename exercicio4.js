/*
04) Crie uma função que irá receber dois valores, 
o dividendo e o divisor. A função deverá imprimir o 
resultado e o resto da divisão destes dois valores.
*/
function divisao(dividendo, divisor){
    resultado = dividendo / divisor
    restoDivisao = dividendo % divisor
    console.log(`O resultado da divisão entre ${dividendo} e ${divisor} resulta em: ${resultado}`)
    console.log(`O resto da divisão entre ${dividendo} e ${divisor} é: ${restoDivisao}`)
}
divisao(10,5)