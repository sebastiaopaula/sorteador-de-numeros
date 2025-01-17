function sortear(){
    let quantidade =document.getElementById('quantidade').value || 0;
    let de = document.getElementById('de').value || 0;
    let ate = document.getElementById('ate').value || 0;
    let sorteados =[];
    let numero;
    let totalDeNumeros = parseInt(ate - de);

    if (quantidade == 0 || de == 0 || ate == 0){
        alert(`Os valores dos parametros não podem ser Zero `);
    
    }else if (totalDeNumeros < 0){
        alert('O Campo Do número não pode Ser maior que o campo Até o número');
        limpaCampo();
        if (quantidade > 0){
            document.getElementById('quantidade').value = quantidade;
        }
    }else{
        if (quantidade <= totalDeNumeros){
            for (let i = 0; i < quantidade; i++){
                numero = obterNumeroAleatorio(de, ate);
                while(sorteados.includes(numero)){
                    numero = obterNumeroAleatorio(de, ate);
                }
                sorteados.push(numero);
            }
            
            let resultado=document.getElementById('resultado');
            resultado.innerHTML=`<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
            alterarStatusBotao();       
            
        }else{
            alert(`de acordo com os parâmetros inseridos A Quantidade de Números máxima é de ${totalDeNumeros}`);
            document.getElementById('quantidade').value = '';
            document.getElementById('de').value = '';
            document.getElementById('ate').value = '';
            document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        }
    }
}

  
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) )+ min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    let btnSortear = document.getElementById('btn-sortear');

    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        btnSortear.classList.remove('container__botao'); 
        btnSortear.classList.add('container__botao-desabilitado');      
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        btnSortear.classList.remove('container__botao-desabilitado'); 
        btnSortear.classList.add('container__botao');      
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function limpaCampo(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}