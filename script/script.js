//HEADER - Change Bakery Name
const bakery = document.querySelector(".bakery");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const popupSubmit = document.querySelector(".popup-submit");
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
//TODO Créer une fonction de validation à rappeller avec les deux event listener
//Submit name enter
popupInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const errors = [];
    if (popupInput.value === "" || popupInput.value == null) {
      errors.push(`Name is required`);
    }
    if (popupInput.value.length < 3) {
      errors.push(`Name must be 3 characters long minimum`);
    }
    if (popupInput.value.length > 12) {
      errors.push(`Name must be 12 character long maximum`);
    }
    if (errors.length > 0) {
      e.preventDefault();
      alert(errors.join(","));
      return;
    } else {
      bakery.innerHTML = `${popupInput.value}`;
      overlay.classList.toggle("hidden");
      popup.classList.toggle("hidden");
    }
  }
});
//Submit name Click
popupSubmit.addEventListener("click", (e) => {
  const errors = [];
  if (popupInput.value === "" || popupInput.value == null) {
    errors.push(`Name is required`);
  }
  if (popupInput.value.length < 3) {
    errors.push(`Name must be 3 characters long minimum`);
  }
  if (popupInput.value.length > 12) {
    errors.push(`Name must be 12 character long maximum`);
  }
  if (errors.length > 0) {
    e.preventDefault();
    alert(errors.join(","));
    return;
  } else {
    bakery.innerHTML = `${popupInput.value}`;
    overlay.classList.toggle("hidden");
    popup.classList.toggle("hidden");
  }
});

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
    price: "2",
  },
  {
    id: "1",
    name: "Instructor",
    qty: "0",
    cps: "50",
    yield: "0",
    price: "4",
  },
  {
    id: "2",
    name: "Tourist",
    qty: "0",
    cps: "250",
    yield: "0",
    price: "5",
  },
  {
    id: "3",
    name: "Anna Stepanoff",
    qty: "0",
    cps: "1250",
    yield: "0",
    price: "10",
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

  const workerPrice = document.createElement("button");
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
function buyItem(id) {
  let priceValue = parseInt(workerList[id].price);
  let yieldValue = parseInt(workerList[id].yield);
  let cpsValue = parseInt(workerList[id].cps);
  let qtyValue = parseInt(workerList[id].qty);

  let qtyDisplayed = document.querySelector(`.item-qty${id}`);
  let yieldDisplayed = document.querySelector(`.item-yield${id}`);
  let priceDisplayed = document.querySelector(`.item-price${id}`);

  if (chocoCount < priceValue) {
    alert(`La maison ne fait pas crédit`);
  } else {
    // incrémente quantité:
    qtyValue = qtyValue + 1;
    workerList[id].qty = qtyValue;
    yieldValue = qtyValue * cpsValue;
    workerList[id].yield = yieldValue;

    //Décrémente score du prix:
    chocoCount = chocoCount - priceValue;

    // Incrémente prix:
    // priceValue = priceValue * 1.1;
    // workerList[id].price = priceValue;
    // console.log(workerList[id].price);

    //Update l'affichage
    updateScore(chocoCount);
    qtyDisplayed.innerHTML = "Quantity: " + qtyValue;
    yieldDisplayed.innerHTML = "Yield: " + yieldValue;
    priceDisplayed.innerHTML = "Price: " + priceValue;
  }
}

// griser les boutons si le score n'est pas suffisant pour acheter
let priceButtons = document.querySelectorAll(".item-price");
let buttonsArray = Array.from(priceButtons);

let button0 = document.querySelector(".item-price0");

function purchaseControl(i) {
  if (chocoCount >= priceValue) {
    buttonsArray[i].disabled = false;
    buttonsArray[i].style.backgroundImage =
      "linear-gradient(var(--primary-color), white)";
  } else {
    buttonsArray[i].disabled = true;
    buttonsArray[i].style.backgroundImage = "linear-gradient(grey, white)";
  }
  console.log(buttonsArray[i].disabled);
}

for (let i = 0; i <= workerList.length; i++) {
  setInterval(function () {
    priceValue = parseInt(workerList[i].price);
    purchaseControl(i);
  }, 1000);
}

//Lancer fonction buyItem quand on clique sur bouton =>
for (let j = 0; j < workerList.length; j++) {
  buttonsArray[j].addEventListener("click", function () {
    buyItem(j);
  });
}

// Incrémentation / seconde. Ça marche mais c'est répétitivementmoche....

const rendement = setInterval(function () {
  chocoCount =
    chocoCount +
    parseInt(workerList[0].yield) +
    parseInt(workerList[1].yield) +
    parseInt(workerList[2].yield) +
    parseInt(workerList[3].yield);
  updateScore(chocoCount);
}, 1000);

//fonction Sam
//J'achète un worker
// function buyWorker(id) {
//Je vais chercher les données dans la workerList
// let qtyValue = parseInt(workerList[id].qty);
// let cpsValue = parseInt(workerList[id].cps);
// let yieldValue = parseInt(workerList[id].yield);
// let priceValue = parseInt(workerList[id].price);
//Bloquer l'achat si pas assez de chocos
//   if (chocoCount < priceValue) {
//     alert(`La maison ne fait pas crédit`);
//   } else {
// //On fait les maths
// chocoCount = chocoCount - priceValue;
// qtyValue = qtyValue + 1;
// yieldValue = qtyValue * cpsValue;
// priceValue = priceValue * 1.2;
// //Update Array
// workerList[id].qty = qtyValue;
// workerList[id].yield = yieldValue;
// workerList[id].price = priceValue;
// //Update HTML
// const qty = document.querySelector(`.item-qty${id}`);
// const yield = document.querySelector(`.item-yield${id}`);
// const price = document.querySelector(`.item-price${id}`);
// qty.innerHTML = `Quantity: ${qtyValue}`;
// yield.innerHTML = `Yield: ${yieldValue}`;
// price.innerHTML = `Price: ${priceValue}`;
// updateScore(chocoCount);
//   }
// }
