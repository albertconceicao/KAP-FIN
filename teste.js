idade = 0;
ehEmancipada = '';
documentacaoOK = '';
score = 0;

function solucao(idade, ehEmancipada, documentacaoOK, score) {
	if(documentacaoOK != true){
        console.log('CONTA NEGADA');
    } else if(idade < 18 && ehEmancipada === true || idade >= 18 && ehEmancipada === false || idade >= 18 && ehEmancipada === true){

        if(score < 500){
            console.log(500);
        }if(score >= 500 && score < 700){
            console.log(1500);
        }if(score >= 700){
            console.log(3000)
        }
    }else {
        console.log('CONTA NEGADA')
    }
}
solucao(18,true,true,700)
