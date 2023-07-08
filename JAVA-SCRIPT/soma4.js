let peso=150
let altura= 1.53 
let imc= peso / (altura * altura);

 if(imc<18.5){
    console.log(`magreza`);
 }
    else if (imc >= 18.5 && imc <=24.9) {  
 console.log(`Normal`);
}else if(imc>= 25 && imc <=29.9){
 console.log(`sobrepeso`);
}else if(imc >= 30 && imc <=34.9){
    console.log(`obesidade grau 1`);
}else if(imc >= 35 && imc <=39.9){
    console.log(`obesidade grau 2`);
}else{
    console.log(`obesidade grau 3`);
}  