/*
20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 200, R$ 100, R$ 50, R$ 20 R$ 10, R$ 5, R$ 2 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 1 nota(s) de R$ 2. 1 nota(s) de R$ 1.
*/
function caixaBanco(valorSaque){
    let cedula200 = 0
    let cedula100 = 0
    let cedula50 = 0
    let cedula20 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula2 = 0
    let cedula1 = 0

    let qtdCedula = calcularQtdCedula(valorSaque)
    while (valorSaque >= qtdCedula) {
        switch (qtdCedula){
            case 200:
                valorSaque -= 200
                cedula200++
                break
            case 100:
                valorSaque -= 100
                cedula100++
                break
            case 50:
                valorSaque -= 50
                cedula50++
                break
            case 20:
                valorSaque -= 20
                cedula20++
                break
            case 10:
                valorSaque -= 10
                cedula10++
                break
            case 5:
                valorSaque -= 5
                cedula5++
                break
            case 2:
                valorSaque -= 2
                cedula2++
                break
            case 1:
                valorSaque -= 1
                cedula1++
                break
        }
        qtdCedula = calcularQtdCedula(valorSaque)
    }
    return montarSaque(cedula200, cedula100, cedula50, cedula20, cedula10, cedula5, cedula2, cedula1)
}

function calcularQtdCedula(valorSaque){
    if(valorSaque >= 200) {
        return 200
    } else if(valorSaque >= 100){
        return 100
    } else if(valorSaque >= 50){
        return 50
    } else if(valorSaque >= 20){
        return 20
    } else if(valorSaque >= 10){
        return 10
    } else if(valorSaque >= 5){
        return 5
    } else if(valorSaque >= 2){
        return 2
    } else if(valorSaque >= 1){
        return 1
    }
}
function montarSaque(cedula200, cedula100, cedula50, cedula20, cedula10, cedula5, cedula2, cedula1){
    let resultadoSaque = ''

    if (cedula200 == 1) {
        resultadoSaque += `${cedula200} nota de R$ 200. `
    } else if(cedula200 > 1){
        resultadoSaque += `${cedula200} notas de R$ 200. `
    }
    if (cedula100 == 1) {
        resultadoSaque += `${cedula100} nota de R$ 100. `
    }
    if (cedula50 == 1) {
        resultadoSaque += `${cedula50} nota de R$ 50. `
    }
    if (cedula20 == 1) {
        resultadoSaque += `${cedula20} nota de R$ 20. `
    } else if(cedula20 > 1){
        resultadoSaque += `${cedula20} notas de R$ 20. `
    }
    if (cedula10 == 1) {
        resultadoSaque += `${cedula10} nota de R$ 10. `
    }
    if (cedula5== 1) {
        resultadoSaque += `${cedula5} nota de R$ 5. `
    }
    if (cedula2 == 1) {
        resultadoSaque += `${cedula2} nota de R$ 2. `
    } else if(cedula2 > 1){
        resultadoSaque += `${cedula2} notas de R$ 2. `
    }
    if (cedula1 == 1) {
        resultadoSaque += `${cedula1} nota de R$ 1. `
    }
    return resultadoSaque
}

console.log(caixaBanco(598))