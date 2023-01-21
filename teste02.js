function contar(){
    let inicio = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i == 0 && f == 0) {
        window.alert('Digite número possíveis de serem contados')
    } else if (p == 0) {
        window.alert('Digite um passo válido')
    } else {
        for (let c = i; c != f; c += p) {
            res.innerHTML += `${c}`
        }
    }
}