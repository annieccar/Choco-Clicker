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

// Brouillon de variables. Fortune liée à score pour l'affichage, incrémentée par l'action click sur choco.  

let fortune = 0
const score = document.querySelector("#score");

choco.addEventListener("click", ()) {
  score.textContent = fortune++;
}

// Variable timer. À définir selon les achats possibles : student, stone student, teacher, clandestine baker etc..

const rendement = setInterval(function () {
  count = count + ?  // ou peut-être - . Genre malus 
  score.textContent = count;
}, 1000);
