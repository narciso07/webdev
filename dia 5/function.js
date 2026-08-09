function saudar (){
    return "Olá, mundo"
}
console.log(saudar())

// funcao com paremantros
function cumprimentar (nome)
{
    return "ola " + nome
}
console.log(cumprimentar("narciso"))

function adicao(n1,n2)
{
    let resultado= n1+n2
    let media = (n1+n2)/2
    return {res:resultado , med : media}
}
console.log(adicao(15, 14).res)
console.log(adicao(14, 15).med)
// arrow funtion

let soma = (n1, n2) => {
    return n1+n2
}
console.log(soma(12,13))
const validar = (res) => {
    if(res){
        return true
    }
    else{

    }
}
console.log(validar(false))
console.warn(validar(true))

const saudadao = () => {
    return "Olá , tudo bem "
}
console.log(saudadao())

const teste = (a, b) => a+b;
console.log(teste(11, 19))