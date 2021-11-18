
/*
06) Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação 
financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros 
compostos.
*/
//Juros Simples
// Juros = capital · taxa · tempo
function jurosSimples(  capital_inicial, 
    taxa_juros, 
    tempo_aplicacao) {
juros = capital_inicial * (taxa_juros / 100) * tempo_aplicacao
montante = juros + capital_inicial
formatNumber(montante)
}


// Juros compostos
// M = C (1 + i)**t

function jurosCompostos(capital_inicial, 
    taxa_juros, 
    tempo_aplicacao){
let juros = ((taxa_juros / 100)+1) ** tempo_aplicacao
let montante = capital_inicial * juros
formatNumber(montante)            
}
