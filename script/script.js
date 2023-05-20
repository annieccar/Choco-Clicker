//HEADER - Change Bakery Name
const bakery = document.querySelector(".bakery");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
//Afficher le popup
bakery.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  popup.classList.toggle("hidden");
});
//Masquer le popup
overlay.addEventListener("click", () => {
  overlay.classList.toggle("hidden");
  popup.classList.toggle("hidden");
});
//TODO enregistrer l'input et l'afficher dans le DOM

// SECTION CHOCO
//importer les élements du DOM
const choco = document.querySelector("#choco");
const scoreMain = document.querySelector("#score span");
const scoreTitle = document.querySelector("title");
const itemBox = document.querySelector(".item-box");

//compteur à zéro (Tagada Jones)
let chocoCount = 0;
updateScore(chocoCount);
//mettre à jour le score
function updateScore(newScore) {
  scoreMain.innerText = newScore;
  scoreTitle.innerHTML = newScore + " - Choco Clicker";
  chocoCount = newScore;
}
//quand choco est cliquée
function chocoClicked() {
  let scoreValue = parseInt(scoreMain.innerHTML);
  let newScore;
  newScore = scoreValue + 1;
  updateScore(newScore);
}
//écoute si on clique sur choco
choco.addEventListener("click", () => {
  chocoClicked();
});

//WORKER LIST
const workerList = [
  {
    id: "0",
    name: "Wilder",
    qty: "0",
    cps: "10",
    yield: "0",
    price: "50",
  },
  {
    id: "1",
    name: "Instructor",
    qty: "0",
    cps: "50",
    yield: "0",
    price: "250",
  },
  {
    id: "2",
    name: "Tourist",
    qty: "0",
    cps: "250",
    yield: "0",
    price: "1250",
  },
  {
    id: "3",
    name: "Anna Stepanoff",
    qty: "0",
    cps: "1250",
    yield: "0",
    price: "6250",
  },
];

function createWorker(id, name, qty, cps, yield, price) {
  const worker = document.createElement("div");
  worker.classList.add(`item`);
  worker.classList.add(`item${id}`);
  // worker.classList.add(`hidden`);
  itemBox.appendChild(worker);

  const workerName = document.createElement("div");
  workerName.classList.add(`item-name`);
  worker.appendChild(workerName);
  workerName.innerHTML = `${name}`;

  const workerQty = document.createElement("div");
  workerQty.classList.add(`item-qty`);
  workerQty.classList.add(`item-qty${id}`);
  worker.appendChild(workerQty);
  workerQty.innerHTML = `Quantity: ${qty}`;

  const workerCps = document.createElement("div");
  workerCps.classList.add(`item-cps`);
  workerCps.classList.add(`item-cps${id}`);
  worker.appendChild(workerCps);
  workerCps.innerHTML = `Cps: ${cps}`;

  const workerYield = document.createElement("div");
  workerYield.classList.add(`item-yield`);
  workerYield.classList.add(`item-yield${id}`);
  worker.appendChild(workerYield);
  workerYield.innerHTML = `Yield: ${yield}`;

  const workerPrice = document.createElement("div");
  workerPrice.classList.add(`item-price`);
  workerPrice.classList.add(`item-price${id}`);
  worker.appendChild(workerPrice);
  workerPrice.innerHTML = `Price: ${price}`;
}
for (let i = 0; i < workerList.length; i++) {
  createWorker(
    workerList[i].id,
    workerList[i].name,
    workerList[i].qty,
    workerList[i].cps,
    workerList[i].yield,
    workerList[i].price
  );
}

//J'achète un worker
function buyWorker(id) {
  //Je vais chercher les données dans la workerList
  let qtyValue = parseInt(workerList[id].qty);
  let cpsValue = parseInt(workerList[id].cps);
  let yieldValue = parseInt(workerList[id].yield);
  let priceValue = parseInt(workerList[id].price);
  //Bloquer l'achat si pas assez de chocos
  if (chocoCount < priceValue) {
    alert(`La maison ne fait pas crédit`);
  } else {
    //On fait les maths
    chocoCount = chocoCount - priceValue;
    qtyValue = qtyValue + 1;
    yieldValue = qtyValue * cpsValue;
    priceValue = priceValue * 1.2;
    //Update Array
    workerList[id].qty = qtyValue;
    workerList[id].yield = yieldValue;
    workerList[id].price = priceValue;
    //Update HTML
    const qty = document.querySelector(`.item-qty${id}`);
    const yield = document.querySelector(`.item-yield${id}`);
    const price = document.querySelector(`.item-price${id}`);
    qty.innerHTML = `Quantity: ${qtyValue}`;
    yield.innerHTML = `Yield: ${yieldValue}`;
    price.innerHTML = `Price: ${priceValue}`;
    updateScore(chocoCount);
  }
}

//TODO écouter tous les boutons des items ie =>
const buy0 = document.querySelector(".item-price0");
buy0.addEventListener("click", () => {
  buyWorker(0);
});

//TODO appliquer le yield (rendement) de chaque item toutes les secondes
//appliquer le Yield d'un
//Incrémentation quantité et retour prix quand on 'click'sur l'item:
// const price1 = document.querySelector("#price1");
// let qty1 = 1;

// button1.addEventListener("click", function () {
//   // incrémente quantité:
//   const quantity1 = document.querySelector("#quantity1");
//   quantity1.innerHTML = "Quantity: " + qty1++;

//   //Décrémente score du prix:
//   const storage = getStorage();
//   const price1 = parseInt(button1.dataset.price);
//   const score = document.querySelector("#score span");
//   const value = storage.chocolatines - price1;

//   updateScore(value);
// });

//Brouillon de variables. Fortune liée à score pour l'affichage, incrémentée par l'action click sur choco.
// let fortune = 0;
// const score = document.querySelector("#score");

// choco.addEventListener("click", () => {
//   score.textContent = fortune++;
// });

//Variable timer. À définir selon les achats possibles : student, stone student, teacher, clandestine baker etc..
// const rendement = setInterval(function () {
//   count = count++; // ou peut-être - . Genre malus
//   score.textContent = count;
// }, 1000)
