/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
function DiaSemana(numero){
    switch(numero){
        case 1:
            return "Domingo - Fim de semana"
        case 2:
            return "Segunda - dia útil"
        case 3:
            return "Terça - dia útil"
        case 4:
            return "Quarta - dia útil"
        case 5:
            return "Quinta - dia útil"
        case 6:
            return "Sexta - dia útil"
        case 7:
            return "Sábado - Fim de semana"
        default:
            return "Dia inválido"
        
        
    }
}
console.log(DiaSemana(7))
console.log(DiaSemana(1))
console.log(DiaSemana(2))
console.log(DiaSemana(3))
console.log(DiaSemana(4))
console.log(DiaSemana(5))
console.log(DiaSemana(6))
console.log(DiaSemana(8))
console.log(DiaSemana(9))
