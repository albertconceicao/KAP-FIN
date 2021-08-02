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
    return `${data.usuario}`
}