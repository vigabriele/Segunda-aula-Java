function soma(x,y){
    const resultado = x+y;
    return resultado;
}
console.log(soma(20,40));
console.log(soma(10,80));
console.log(soma(200,50));
console.log(soma(2000,400));

function imc(peso,altura)
    const resultado = peso / (altura * altura);
 if(resultado <=18.5){
    return"magro";
 }else if(resultado >18.5 && resultado <=24.9){
    return"normal"
 }else if(resultado >25 && resultado <=29.9){
    return"sobrepeso"  
    }else if(resultado >30 && resultado <=34.9){
        return"obesidade grai 1"
}else if(resultado >35 && resultado <=39.9){
    return"obesidade grai 2"
}else{
    return`Seu imc (${imc})apresenta obesidade grau 3`;
}
console.log(imc(49,1.63))
console.log(imc(70,1.73))

function saudacao(nome){
    console.log(`bom dia ${nome}`)
}

saudacao("Marcelo");

function saudacao2(){
    return "boa noite pessoal"
}
console.log(saudacao2());  