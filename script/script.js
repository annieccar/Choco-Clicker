const choco = document.querySelector("#choco");

const updateScore = (chocolatines) => {
  const title = document.querySelector("title");
  const score = document.querySelector("#score span");

  score.innerText = chocolatines;
  title.innerHTML = chocolatines + " - Choco Clicker";

  localStorage.setItem("chocolatines", chocolatines);
};

const getStorage = () => {
  const chocolatines = localStorage.getItem("chocolatines") || 0;
  const powerups = JSON.parse(localStorage.getItem("powerups")) || [];

  const storage = {
    chocolatines: chocolatines,
    powerups: powerups,
  };

  return storage;
};

const chocoClicked = (chocolatines) => {
  const storage = getStorage();

  const score = document.querySelector("#score span");
  const scoreValue = chocolatines ? chocolatines : parseInt(score.innerText);

  let newScore;
  newScore = scoreValue + 1;

  updateScore(newScore);
};

choco.addEventListener("click", () => {
  chocoClicked();
});
