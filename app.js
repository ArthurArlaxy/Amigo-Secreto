let listaDeAmigos = []

function textoFinal(texto){
        let textoFinal = document.getElementById('resultado');
        textoFinal.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == ''){
        alert('Por favor, insira um nome.');
    }else{
        listaDeAmigos.push(nome);
        document.querySelector('input').value = '';

        let listagem = document.querySelector('ul');
        let item =  document.createElement('li');
        item.innerHTML = nome;
        listagem.append(item);
        textoFinal('')
    }
}

function escolhaDeAmigo(){
    if (listaDeAmigos != '') {
        let pick = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoSecreto = listaDeAmigos[pick];
        let listagem = document.querySelector('ul');
        listagem.innerHTML = '';
        textoFinal(`O seu amigo secreto é ${amigoSecreto}`)
        listaDeAmigos = []
    } else {
        alert('Falta inserir os amigos')
    };
};


