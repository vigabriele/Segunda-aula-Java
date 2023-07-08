let pagamento = "débito";
if (pagamento == "débito"    ) {  
 console.log("recede 10% de desconto");

}else if(pagamento == "dinheiro" || pagamento == "pix"){
 console.log("recede 15% de desconto");

}else if(pagamento == "2x"){
    console.log("preço normau sem juros");

}
else{
    console.log("mais de 2x juros de 10%");
}