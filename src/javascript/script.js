let ope = document.getElementById('ope')
function add(num){
    ope.innerHTML += num
}
function clearAll() {
    ope.innerHTML = ''
}
function backspace() {
    let oper = ope.innerHTML
    ope.innerHTML  = oper.substring(0, oper.length -1)
}
function calcular() {
    if(ope.innerHTML.length >= 3) {
        ope.innerHTML = eval(ope.innerHTML)
    } else {
        alert('Coloque expressões!')
    }
}