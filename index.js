const prato1 = document.querySelector("#prato1");
const prato2 = document.querySelector("#prato2");

const bebida1 = document.querySelector("#bebida1");
const bebida2 = document.querySelector("#bebida2");

const sobremesa1 = document.querySelector("#sobremesa1");
const sobremesa2 = document.querySelector("#sobremesa2");

let prato;
let bebida;
let sobremesa;

prato1.addEventListener("click", function () {
  removeBorder("pratos");
  prato1.className = "product border-green";
  prato = "Frango Yin Yang";
});

prato2.addEventListener("click", function () {
  removeBorder("pratos");
  prato2.className = "product border-green";
  prato = "Bife à milanesa";
});

bebida1.addEventListener("click", function () {
  removeBorder("bebidas");
  bebida1.className = "product border-green";
  bebida = "Refrigerante";
});

bebida2.addEventListener("click", function () {
  removeBorder("bebidas");
  bebida2.className = "product border-green";
  bebida = "Suco Natural";
});

sobremesa1.addEventListener("click", function () {
  removeBorder("sobremesas");
  sobremesa1.className = "product border-green";
  sobremesa = "Pudim";
});

sobremesa2.addEventListener("click", function () {
  removeBorder("sobremesas");
  sobremesa2.className = "product border-green";
  sobremesa = "Sorvete";
});

function removeBorder(products) {
  switch (products) {
    case "pratos":
      prato1.className = "product";
      prato2.className = "product";
      break;
    case "bebidas":
      bebida1.className = "product";
      bebida2.className = "product";
      break;
    case "sobremesas":
      sobremesa1.className = "product";
      sobremesa2.className = "product";
      break;
    default:
      break;
  }
}

const btnSend = document.querySelector("#btn-send");

btnSend.addEventListener("click", function () {
  const message =
    "Olá, gostaria de pedir um combo: " +
    prato +
    ", " +
    bebida +
    " e " +
    sobremesa +
    ".";

  const number = "5546991402909";

  window.open("http://wa.me/" + number + "?text=" + message);
});
