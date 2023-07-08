
let pagamento = "débito";

switch (pagamento) {
    case "débito":
        console.log("recebe 10% de desconto");
        break;
    case "dinheiro ou pix ":
        console.log("recebe 15% de desconto");
        break;
    case "2x":
        console.log("preço normau sem juros");
        break;

    default:

        console.log("mais de 2x juros de 10%");
}