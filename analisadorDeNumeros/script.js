let numero = window.document.querySelector("input#txtn")
let res = window.document.querySelector("div#res")
let lista = window.document.querySelector("select#janela")
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    }else{
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}
function ad(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        
        valores.push(Number(numero.value)) //.push adiciona um valor no vetor
        let item = window.document.createElement("option")
        item.text = `${numero.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert("Valor inválido ou já esta na lista")
    }
    numero.value = "" // limpa a caixa de texto
    numero.focus() // foca o cursor na caixa de texto
}
function finalizar(){
    if (valores.length == 0) {
        window.alert("[ERRO] digite um valor para finalizar")
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior) {
                maior = valores[pos]
            }else if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}</p>`
    }
}