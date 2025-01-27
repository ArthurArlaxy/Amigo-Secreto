//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = []


function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome == ''){
        alert('Por favor, insira um nome.');
    }else{
        listaDeAmigos.push(nome);
        console.log(listaDeAmigos);
        document.querySelector('input').value = '';

        let listagem = document.querySelector('ul');
        let item =  document.createElement('li');
        item.innerHTML = nome;
        listagem.append(item);
    }
}

function escolhaDeAmigo(){
    let num = Math.floor(Math.random()*listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[num];
    let listagem = document.querySelector('ul');
    listagem.innerHTML = '';
    let textoFinal = document.getElementById('resultado');
    textoFinal.innerHTML = `O seu amigo secreto é ${amigoSecreto}`
    console.log(amigoSecreto);
}


