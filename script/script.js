//SECTION HEADER
//Sélectionner le bouton "bakery name"
const bakery = document.querySelector(".bakery");

bakery.addEventListener("click", () => {
  const bakeryName = prompt("Enter a name for your bakery:");
});

// SECTION CHOCO
//importer la chocolatine
const choco = document.querySelector("#choco");

//récupérer la sauvegarde du compte
const getStorage = () => {
  const chocolatines = localStorage.getItem("chocolatines") || 0;
  const powerups = JSON.parse(localStorage.getItem("powerups")) || [];
  const storage = {
    chocolatines: chocolatines,
    powerups: powerups,
  };
  return storage;
};

//mettre à jour l'affichache
const updateScore = (chocolatines) => {
  const title = document.querySelector("title");
  const score = document.querySelector("#score span");
  score.innerText = chocolatines;
  title.innerHTML = chocolatines + " - Choco Clicker";
  localStorage.setItem("chocolatines", chocolatines);
};

//quand choco est cliquée
const chocoClicked = (chocolatines) => {
  const storage = getStorage();
  const score = document.querySelector("#score span");
  const scoreValue = chocolatines ? chocolatines : parseInt(score.innerText);
  let newScore;
  newScore = scoreValue + 1;
  updateScore(newScore);
};

//écoute si on clique sur choco
choco.addEventListener("click", () => {
  chocoClicked();
});

//SECTION ITEMS
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
// }, 1000);

// Augmentation Qté et décrémentation prix lors d'achats d'items
const button1 = document.querySelector("#price1");
const button2 = document.querySelector("#price2");
const button3 = document.querySelector("#price3");

// let qty = 1;

const buyItems = function (quantity, price) {
  // incrémente quantité:
  quantity.innerHTML = "Quantity: " + qty++;

  //Décrémente score du prix:
  const storage = getStorage();
  const score = document.querySelector("#score span");
  const value = storage.chocolatines - price;

  //Update l'affichage
  updateScore(value);
};

button1.addEventListener("click", function () {
  const quantity1 = document.querySelector("#quantity1");
  const price1 = parseInt(button1.dataset.price);
  let qty = 1;
  buyItems(quantity1, price1);
});

button2.addEventListener("click", function () {
  const quantity2 = document.querySelector("#quantity2");
  const price2 = parseInt(button2.dataset.price);
  let qty = 1;
  buyItems(quantity2, price2);
});

button3.addEventListener("click", function () {
  const quantity3 = document.querySelector("#quantity3");
  const price3 = parseInt(button3.dataset.price);
  let qty = 1;
  buyItems(quantity3, price3);
});
