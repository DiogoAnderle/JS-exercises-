/*
19) O cardápio de uma lanchonete é o seguinte:
Código          Descrição do Produto    Preço
100             Cachorro Quente         R$ 3,00
200             Hambúrguer Simples      R$ 4,00
300             Cheeseburguer           R$ 5,50
400             Bauru                   R$ 7,50
500             Refrigerante            R$ 3,50
600             Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/
function formatNumber(number){
    return (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(number))
}


function pedidoLanchonete(codigo, quantidade){
    switch(codigo){
        case 100:
            return `Quantidade: ${quantidade} | Produto: Cachorro Quente | Valor Total: R$ ${formatNumber(quantidade * 3) }`
        case 200:
            return `Quantidade: ${quantidade} | Produto: Hambúrguer Simples | Valor Total: R$ ${formatNumber(quantidade * 4) }`
        case 300:
            return `Quantidade: ${quantidade} | Produto: Cheeseburger | Valor Total: R$ ${formatNumber(quantidade * 5.5) }`
        case 400:
            return `Quantidade: ${quantidade} | Produto: Bauru |  Valor Total: R$ ${formatNumber(quantidade * 7.5) }`
        case 500:
            return `Quantidade: ${quantidade} | Produto: Refrigerante |  Valor Total: R$ ${formatNumber(quantidade * 3.5) }`
        case 600:
            return `Quantidade: ${quantidade} | Produto: Suco |  Valor Total: R$ ${formatNumber(quantidade * 2.8) }`
        default:
            return "Produto inexistente."
    }
}
console.log(pedidoLanchonete(100,4))
console.log(pedidoLanchonete(200,3))
console.log(pedidoLanchonete(300,2))
console.log(pedidoLanchonete(400,1))
console.log(pedidoLanchonete(500,4))
console.log(pedidoLanchonete(600,16))
console.log(pedidoLanchonete(700,12))