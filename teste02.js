function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    for (let c = i; c != f; c += p) {
        res.innerHTML += `${c}`
    }
}