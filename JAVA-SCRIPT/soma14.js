  function calcularImposto(salario, beneficio);
  if(salario >=0 && salario <=1100){
    const total=(salario - (salario*0.05) + beneficio);
    return `Seu salário total é de ${total}`       
  }
  else if(salario >=1101 && salario <=2000){
    const total= (salario - (salario*0.10) + beneficio);
    return `Seu salário total é de ${total}`       
  }
  else if(salario >=2001 && salario <=3000){
    const total= (salario - (salario*0.15) + beneficio);
    return `Seu salário total é de ${total}`       
  }
 
  else if(salario >4000){
    const total= (salario - (salario*0.15) + beneficio);
    return `Seu salário total é de ${total}`       
 }

console.log(calcularImposto(3000,500));
  