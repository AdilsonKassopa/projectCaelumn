let $tdTotalCurso = document.querySelector(".js-total-cursos")
let $tdTotalHoras = document.querySelector(".js-total-horas")
let $buttonConfirar = document.querySelector(".js-botao-matricula")

let totalHoras = 0
let totalCursos = 0

function adicionarCursos(checkbox){
    if(checkbox.checked){
        totalCursos ++
        totalHoras += parseInt(checkbox.value)
    }else{
        if(totalCursos>0 && totalHoras>0){
            totalCursos --
            totalHoras -= parseInt(checkbox.value)
        }
        
    }

    $tdTotalHoras.textContent = totalHoras + 'h'
    $tdTotalCurso.textContent = totalCursos + "curso(s)"
}

$buttonConfirar.onclick = confirmarMatriculas

function confirmarMatriculas(){
    if(totalCursos == 0){
        alert("Nenhum curso selecionado")
    }else{
        alert("Matricula confirmada nos cursos!")
        window.location.href = "index.html"
    }
}
