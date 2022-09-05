var botaoclaro = document.querySelector(".botao-claro")
var botaoescuro = document.querySelector(".botao-escuro")
var documento = document.querySelector("body")

botaoclaro.addEventListener("click", ()=>{
    var temaa = 'light-theme'
    troca(temaa)
})

botaoescuro.addEventListener("click", ()=>{
    var temaa = 'dark-theme'
    troca(temaa)
})

function troca(tema){
    documento.setAttribute('id', tema);
}