//Bloco responsável por chamar os dados da API e escrever na variavel data
//Lista de produtos disponíveis na Loja
const produtosDisponiveis = [
    {
        "id": "a123",
        "avaiable": 15,
        "title": "camisa groww",
        "price": 500
    },
    {
        "id": "r123",
        "avaiable": 10,
        "title": "casaco groww",
        "price": 250
    },
    {
        "id": "z123",
        "avaiable": 2,
        "title": "Cadeira Gamer Groww",
        "price": 1500
    },
    {
        "id": "b123",
        "avaiable": 100,
        "title": "Lapis groww",
        "price": 20
    },
    {
        "id": "g123",
        "avaiable": 50,
        "title": "Livro groww",
        "price": 100
    },
    {
        "id": "h123",
        "avaiable": 80,
        "title": "Fone groww",
        "price": 200
    },
    {
        "id": "t123",
        "avaiable": 10,
        "title": "Computador groww",
        "price": 10
    },
    {
        "id": "m123",
        "avaiable": 0,
        "title": "Monitor groww",
        "price": 1000
    },
]

//Cartões de crédito validos
const cardsAvaiable = [
    {
        "card_holder_name": "Thiago B Guedes",
        "card_last_digits": "4444",
        "card_fist_digits": "567890",
        "card_brand": "MasterCard",
        "card_expire_date": "04/25",
    },
    {
        "card_holder_name": "Davis Z Cabral",
        "card_last_digits": "3333",
        "card_fist_digits": "123456",
        "card_brand": "AlphaCard",
        "card_expire_date": "01/20",
    },
    {
        "card_holder_name": "Victória A Duningham",
        "card_last_digits": "2222",
        "card_fist_digits": "987654",
        "card_brand": "MasterCard",
        "card_expire_date": "06/25",
    },
    {
        "card_holder_name": "Matheus M Accioly",
        "card_last_digits": "1111",
        "card_fist_digits": "654321",
        "card_brand": "Visa",
        "card_expire_date": "09/22",
    }
]


async function readApi(apiURL = '') {
    let url = 'https://safe-sierra-45694.herokuapp.com/' + apiURL;
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

//Após executar a função, a variavel data receberá o objeto vindo da API.
//Se quiser verificar o modelo, acesse o arquivo data-sample.json

async function main() {

    const urlApi = ["pagamento01", "pagamento02", "pagamento03", "pagamento04"];

    for (let getUrl of urlApi) {
        const dataReturn = await readApi(getUrl);
        //execute as funções aqui
        
        
        const nomeUser = retornaNome(dataReturn);
        console.log(nomeUser);
        const compra = calculaCompra(dataReturn);
        console.log(compra);
        const itens = verificaItens(dataReturn);
        console.log(itens);
      /*   const quantidade = verificaQuantidade(dataReturn);
        console.log(quantidade); */
        const cadastro = verificaDadosCadastrados(dataReturn);
        console.log(cadastro);
        
        const cobranca = verificarCobranca(dataReturn);
        console.log(cobranca);
        const compradores = nomeCompradores(dataReturn);
        console.log(compradores);
        const marca = verificarMarca(dataReturn);
        console.log(marca)
        const fraude = scoreAntifraude(dataReturn);
        console.log(fraude);
        const dados = dadosBoleto(dataReturn);
        console.log(dados);
        console.log('------------------------------------------------------------------------');
       
      
    }
}
main();

function verificarCobranca(data) {
    const metodo = data.payment_method

        if (metodo == "credit card") {
        return (`Pagamento feito com cartão`)
    } else if (metodo == "boleto") {
        return (`Pagamento feito com boleto`)
    } else {
        return (`Forma de pagamento não identificada`)
    }

};
 
function retornaNome(data) {
    return `Nome do usuário: ${data.customer.name}`;
}


/*  ALBERT */

function verificaItens(data){
    
    let itensSolicitados= [];
    const itensBase = [];

    for(let i = 0; i < data.items.length; i++){
        itensSolicitados.push(data.items[i].id);
       
    }
    for(let i = 0; i < produtosDisponiveis.length; i++){
        itensBase.push(produtosDisponiveis[i].id);
      
    }
  
    if(itensBase.includes(itensSolicitados[0])){
        console.log(`Os itens solicitados estão contidos na base de dados`)
    }else {
        console.log(`Os itens solicitados não estão contidos na base de dados`)
    }

}


 function verificaQuantidade(data){
  
    let qtdSolicitada= [];
    let qtdBase = [];
    let itensCompra= [];
    let itensDisponiveis = [];
    let itensIguais = [];
    /* let itensIguais = []; */

    // Criando Loopings para poder armazenar quantidades e ids do Data e da Base de Dados
    for(let i = 0; i < data.items.length; i++){
        qtdSolicitada.push(data.items[i].quantity);
        /*  console.log(itensSolicitados) */
    }

    for(let i = 0; i < produtosDisponiveis.length; i++){
        qtdBase.push(produtosDisponiveis[i].avaiable);
        /* console.log(itensBase) */
    }

    for(let i = 0; i < data.items.length; i++){
        itensCompra.push(data.items[i].id);
       
    }

    for(let i = 0; i < produtosDisponiveis.length; i++){
        itensDisponiveis.push(produtosDisponiveis[i].id);
      
    }
   /*  console.log(qtdSolicitada)
    console.log(qtdBase) */
    
    // Criando objeto para armazenar organizar quantidades e ids do data e da base
  /*   this.quantidadeBase = qtdBase,
    this.quantidadeSolicitada = qtdSolicitada,
    this.itensBD = itensDisponiveis,
    this.itensCP = itensCompra */

    // Próximo passo é pensar em como atribuir o id do Array com a quantidade na base.
    // Posso usar o map?
    // Como posso criar um array de objeto atribuindo o id à quantidade?
    
    console.log(itensCompra)
    console.log(itensDisponiveis)
    console.log(qtdSolicitada)
    console.log(qtdBase)
    
    console.log(itensDisponiveis.includes(itensCompra[0]));
    console.log(qtdBase.includes(qtdSolicitada[0]))
    /* if(itensCP.includes(itensBD[0]) && quantidadeSolicitada.includes(quantidadeBase[0])){
        console.log(`Os itens solicitados estão contidos na base de dados`)
    }else {
        console.log(`Os itens solicitados não estão contidos na base de dados`)
    }
 */
    

/* 
    if( itensSolicitados2 == itensBaseDados2){
        console.log(`A quantidade solicitada ${qtdItensSolicitados} está disponível na base de dados`)
    }else {
        console.log(`Não temos a quantidade solicitado, o número de itens disponíveis é de ${qtdItensBase}`)
    }  */
} 



function calculaCompra(data){
    let valorFinal;
    
    for (produto of data.items){
        let idCompra = produto.id;
        let produtoDatabase = '';
        try{
            produtoDatabase = percorreProdutos(idCompra)
            
        } catch(error){
            return error
        }
        valorFinal = produto.quantity * produtoDatabase.price;
   

    }
    
    if(valorFinal === data.amount){
        return 'Compra executada com sucesso'
    } else if (valorFinal < data.amount) {
        return 'O cliente possui Créditos para próxima compra'
    } else {
        return 'Compra cancelada por estar abaixo do valor dos itens'
    }

    function percorreProdutos(id){
        for (produtos of produtosDisponiveis){
            if (produtos.id === id){
                return produtos
            }
        }
        throw "Produto não encontrado";
    }
    
    
}



/*  KAMILA */

function nomeCompradores(data) {
    const nomeImpresso = data.card_holder_name
    return (`O nome impresso no cartão é ${nomeImpresso}`)
};

function verificarCobranca(data) {
    const metodo = data.payment_method

    if (metodo == "credit card") {
        return (`Pagamento efetuado com cartão`)
    } else if (metodo == "boleto") {
        return (`Pagamento efetuado com boleto`)
    } else {
        return (`Forma de pagamento não identificada`)
    }

};

function verificarMarca(data) {
    const baseDados = data.card_fist_digits
    if (baseDados === cardsAvaiable.card_fist_digits) {
        return `Os dados estão corretos`
    } else {
        return `Dados inválidos, verifique`
    }
};

function prazoCartao(data) {
    const basePrazo = data.card_expire_date
    if (basePrazo === cardsAvaiable.card_expire_date) {
        return `Cartão está válido`
    } else {
        return `Cartão com a data expirada`
    }
};

function diaTransacao(data) {
    const dataCompra = new Date();
    const dataCartao = data.card_expire_date
    if (dataCompra === dataCartao) {
        return `Data válida`
    } else {
        return `Data inválida`
    }
}

/*  PEDRO */

function retornaNome(data) {
    //return `Nome do usuário: ${data.customer.name}`;
    const nomeverificado = data.card_holder_name
    return (`o nome do usuário é: ${nomeverificado} `)
}

function dadosBoleto(data) {
    const urlBoleto = data.boleto_url
    const codigoBarraBoleto = data.boleto_barcode
    const dataExpiracao = data.card_expire_date
    return (`A url do boleto é: ${urlBoleto} o código de barras é ${codigoBarraBoleto} e a data de expiração é ${dataExpiracao}`)

}

function scoreAntifraude(data) {
    const score = data.antifraud_score
    if (score < 49) {
        return (`Qualquer compra é permitida`)
    } else if (score > 49 && score < 70) {
        return ('limite é de 20 mil')
    } else if (score > 71 && score < 90) {
        return ('limite é de 10 mil')
    } else {
        return ('Não é possível a compra')
    }

}

function verificaDadosCadastrados(data){
    const nomeCartao = data.card_holder_name;
    const marcaCartao = data.card_brand;
    const dataExpiracao	 = data.card_expire_date;
    const primeirosDigitos = data.card_fist_digits;
    const ultimosDigitos = data.card_last_digits;
    
    let validador = 0;

    for (let i = 0; i < cardsAvaiable.length; i++ ){
        let nomeCartaoDb = cardsAvaiable[i].card_holder_name;
        let marcaCartadDb = cardsAvaiable[i].card_brand;
        let dataExpiracaoDb = cardsAvaiable[i].card_expire_date;
        let primeiroDigitosDb = cardsAvaiable[i].card_fist_digits;
        let ultimosDigitosDb = cardsAvaiable[i].card_last_digits;
        
        if(marcaCartao === marcaCartadDb){
            validador++;
        }
        if(dataExpiracao === dataExpiracaoDb){
            validador++;
        }
        if(primeirosDigitos === primeiroDigitosDb){
            validador++;
        }
        if(ultimosDigitos === ultimosDigitosDb){
            validador++;
        }
        if(nomeCartao === nomeCartaoDb){
            validador++;
        }
        if(validador === 5){
            return 'Os dados de cadastro são válidos';
        }
        
    }

    return 'Os dados de cadastro são inválidos';

}

/* function dadosCadastrais(data) {
    const comparador1 = data.card_holder_name
    if (comparador1 === cardsAvaiable.card_holder_name) {
        console.log("Tá certo")
    } else {
        console.log("reveja")
    }
    const comparador2 = data.card_last_digits
    if (comparador2 === cardsAvaiable.card_last_digits) {
        console.log("Tá certo")
    } else {
        console.log("reveja")
    }
    const comparador3 = data.card_fist_digits
    if (comparador3 === cardsAvaiable.card_fist_digits) {
        console.log("Tá certo")
    } else {
        console.log("reveja")
    }
    const comparador4 = data.card_brand
    if (comparador4 === cardsAvaiable.card_brand) {
        console.log("Tá certo")
    } else {
        console.log("reveja")
    }
    const comparador5 = data.card_expire_date
    if (comparador5 === cardsAvaiable.card_expire_date) {
        console.log("Tá certo")
    } else {
        console.log("reveja")
    }
} */

/* Rascunho



*/