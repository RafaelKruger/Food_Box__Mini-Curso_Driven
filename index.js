const prato1 = document.querySelector("#prato1");
const prato2 = document.querySelector("#prato2");

const bebida1 = document.querySelector("#bebida1");
const bebida2 = document.querySelector("#bebida2");

const sobremesa1 = document.querySelector("#sobremesa1");
const sobremesa2 = document.querySelector("#sobremesa2");

prato1.addEventListener("click", function () {
  removeBorder("pratos");
  prato1.className = "product border-green";
});

prato2.addEventListener("click", function () {
  removeBorder("pratos");
  prato2.className = "product border-green";
});

bebida1.addEventListener("click", function () {
  removeBorder("bebidas");
  bebida1.className = "product border-green";
});

bebida2.addEventListener("click", function () {
  removeBorder("bebidas");
  bebida2.className = "product border-green";
});

sobremesa1.addEventListener("click", function () {
  removeBorder("sobremesas");
  sobremesa1.className = "product border-green";
});

sobremesa2.addEventListener("click", function () {
  removeBorder("sobremesas");
  sobremesa2.className = "product border-green";
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

//   .addEventListener("click", setBorderColor("#prato2"));

// document
//   .querySelector("#bebida1")
//   .addEventListener("click", setBorderColor("#bebida1"));
// document
//   .querySelector("#bebida2")
//   .addEventListener("click", setBorderColor("#bebida2"));

// document
//   .querySelector("#sobremesa1")
//   .addEventListener("click", setBorderColor("#sobremesa1"));
// document
//   .querySelector("#sobremesa2")
//   .addEventListener("click", setBorderColor("#sobremesa2"));

// function setBorderColor(idElement) {
//   document.querySelector(idElement).className = "product border-green";
// }
