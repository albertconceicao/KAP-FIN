//Bloco responsável por chamar os dados da API e escrever na variavel data

let data = '';
async function readApi(){
    let url = 'https://safe-sierra-45694.herokuapp.com/user';
    try{
        let response = await fetch(url);
        data = await response.json();
    }catch(err){
        console.log(err);
    }
}
//Após executar a função, a variavel data receberá o objeto vindo da API.
//Se quiser verificar o modelo, acesse o arquivo data-sample.json
readApi();

async function main(){
    await readApi();
    console.log(data);
    //Chame todas as funções dentro da função main;
}
main();

function nomeEIdade(data){
    return `${data.nome} ${data.idade}`
}



/* ********* KAMILA *****************/

function retornaValoresPagos(valorPagamento){

    let valorTotal = valorPagamento.transacao.valor;
    
    let valorPago = valorPagamento.transacao.paid_amount;
    
    return(`O valor total da compra é de: ${valorTotal}, valor pago é de: ${valorPago}`)
    
    };
    
function statusCompra (statusValor){

    let statusCompras = statusValor.transacao.status;

    return(`A compra está com o status: ${statusCompras}`)

};
    
function dadosComprador(dados){

    let nomeComprador = dados.transacao.customer.name;

    let emailComprador = dados.transacao.customer.email;

    let paisComprador = dados.transacao.customer.country;

    return (`Os dados do comprador são, nome: ${nomeComprador} E-mail: ${emailComprador} País: ${paisComprador}`)

};
    
function dadosCartao(cartao){

    let nomeCartao = cartao.transacao.card_holder_name;

    let numCartao = cartao.transacao.card_digits;

    let compraAprovado = cartao.transacao.is_approved;

    return(`Nome usuário cartão: ${nomeCartao} Número do cartão: ${numCartao} Status da compra: ${compraAprovado}`)

};
    
function calculaTotal(totalEmprestimo){

    let mensalidadeParcelas = totalEmprestimo.emprestimo.mensalidade;

    let amortizacaoParcelas = totalEmprestimo.emprestimo.amortizacao;

    let valorTotal = mensalidadeParcelas*amortizacaoParcelas;

    return(`O valor total do empréstimo é de: R$${valorTotal}`)

};
    
function limiteAprovado(aprovadoOrReprov){

    let transacaoAprove = aprovadoOrReprov.transacao.is_approved

    if(transacaoAprove === true){

    return(`Sua compra foi aprovada`)

    } else{

    return(`Sua compra foi reprovada`)

    }

}




/* ********* PEDRO *****************/

function NomeEIdade(data){

    return `O usuário se chama ${data.nome} e tem idade ${data.idade}`
    
}
    
function InfoBanco(data){

    return `O nome do banco é ${data.banco.nome} o número do banco é ${data.banco.limite} e a agência é ${data.banco.agencia}`

}
    
function ValorEmprestimo(data){

    return `O valor do empréstimo solicitado é ${data.emprestimo.valor}`

}
    
function SaldoEmConta(data){

    return `O valor que há em conta é ${data.banco.saldo_em_conta}`

}
    
function CartaoDeCredito(data){

    return `O valor do cartão de crédito é ${data.cartões.id} e a marca é ${data.cartões.marca}`

}
    
function DocsEmpresa(data){

    return `O tipo de documento é ${data.documentType} o numero do doc é ${data.documentNumber} e o nome fictício é ${data.nomeFicticio}`

}
    
function ContaAtiva(data){

    let situacaoAtiva = data.conta_ativa

    if (situacaoAtiva === true){

    return (`Está ativa`)

    }else{

    return('Não está ativa')

    }

}








/* ********* ALBERT *****************/



function retornaTelefone(data){
    let telefoneComprador = data.transacao.customer.phone;

    return `O telefone do comprador é ${telefoneComprador}`
}// Funcionando

function retornaTipoeNumbero(data){
    let tipoDocumento = data.documentType;
    let numeroDocumento = data.documentNumber;

    return ` O tipo de documento é ${tipoDocumento} e o número é ${numeroDocumento}`
} // Funcionando


function enderecoEntrega(data){

    // Variáveis
    let rua = data.transacao.shipping.address.street;
    let numero = data.transacao.shipping.address.street_number;
    let bairro = data.transacao.shipping.address.neighborhood;
    let cidade = data.transacao.shipping.address.city;
    let estado = data.transacao.shipping.address.state;
    let cep = data.transacao.shipping.address.zipcode;
    let pais = data.transacao.shipping.address.country;

    return ` O Endereço para entrega é ${rua}, Número: ${numero}, Bairro: ${bairro}, Cidade: ${cidade}, Estado: ${estado}, CEP: ${cep}, País: ${pais}`
}// Funcionando

function taxaEData(data){
    let taxa = data.transacao.shipping.fee;
    let entrega = data.transacao.shipping.delivery_date;

    return ` A taxa de entrega é de ${taxa} e a data de entrega é ${entrega}`
} // Funcionando

function qtdVendidas(data){
    let qtdProdutos = data.transacao.items[0].quantity;

     return ` A quantidade de produtos sendo vendidas é: ${qtdProdutos}`
} // Funcionando

function retornaProduto(data){
    let nomeProduto = data.transacao.items[0].title;
    let valorProduto = data.transacao.items[0].unit_price;
    let qtdProdutos = data.transacao.items[0].quantity;

    return `O nome do produto é: ${nomeProduto}, o seu valor é:  R$${valorProduto},00 e a quantidade é de:  ${qtdProdutos}`
}// Funcionando

function statusELink(data){
    let statusPagamento = data.links_pagamento.status;
    let linkPagamento = data.links_pagamento.url;

    return `O status do pagamento é o ${statusPagamento} e o link para pagamento é o ${linkPagamento} `
} // Funcionando

