function busca(){
    console.log("apertou")
    fetch('db.json').then(resposta => resposta.json()).then(banco => {
        //Variável para pegar o valor digitado pelo usuário
        let identificador = document.getElementById('valor').value
        let encontrado = false

        banco.forEach(pessoa => {
            if(identificador == pessoa.fpc){
                document.getElementById('imagem').innerHTML = pessoa.image
                document.getElementById('nome').innerHTML = "Nome: " + pessoa.name
                document.getElementById('sobrenome').innerHTML = "Sobrenome: " + pessoa.lastname
                document.getElementById('cidade').innerHTML = "Cidade: " + pessoa.city
                document.getElementById('pais').innerHTML = "País: " + pessoa.country

                encontrado = true

                document.getElementById('erro').innerHTML = ""
            }
        })
        if(!encontrado){
                document.getElementById('erro').innerHTML = "CPF Inválido"
            }
    })
}

