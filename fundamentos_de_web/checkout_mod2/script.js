function hellowWorld(){
            let nome = window.prompt("Qual o seu nome?")
            window.alert("Olá, "+nome);
            window.alert("Vou remover um elemento do seu site")
            let tag = document.querySelector('.cartao3')
            tag.style.display = 'none'
        }