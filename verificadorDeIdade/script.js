function verificar(){
    var data = new Date()
    var anoAt = data.getFullYear()
    var year = window.document.querySelector("input#txtAno")
    var res = window.document.querySelector("div#res")
    if (year.value.length == 0 || year.value > anoAt ) {
        alert("[ERRO] verifique os dados e tente novamente")
    }else{
        var sex = window.document.getElementsByName("radsex")
        var idade = anoAt - Number(year.value)
        var genero = "" 
        var foto = window.document.createElement("img") //createElement("img") criou um elemento img como no HTML
        foto.setAttribute("id","img") //setAttribute("id","img") atribuio um id com nome img
        if(sex[0].checked){ //Se for marcado masculino no form[0], a variavel genero recebe o valor de Homem
            genero = "Homem"
            if(idade >= 0 && idade <=10){
                foto.setAttribute("src", "imagens/criancaH.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 10 && idade <= 23){
                foto.setAttribute("src", "imagens/jovemH.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 23 && idade <= 50){
                foto.setAttribute("src", "imagens/adultoH.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 50 && idade <= 140 ){
                foto.setAttribute("src", "imagens/idosoH.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else{
                alert(`[ERRO] não é possivel viver ${idade} anos`)
            }
        }else if(sex[1].checked){//Se for marcado feminino[1] no form, a variavel genero recebe o valor mulher
            genero = "Mulher"
            if(idade >= 0 && idade <=10){
                foto.setAttribute("src", "imagens/criancaM.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 10 && idade <= 23){
                foto.setAttribute("src", "imagens/jovemM.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 23 && idade <= 50){
                foto.setAttribute("src", "imagens/adultoM.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else if(idade > 50 && idade <= 120 ){
                foto.setAttribute("src", "imagens/idosoM.jpg") //adicionou uma imagem diferente para cada if
                foto.style.marginTop = "15px"
            }else{
                alert(`[ERRO] não é possivel viver ${idade} anos`)
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(foto)
    }
}