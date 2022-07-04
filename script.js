let waveNumber = document.getElementById("wave-number");
let waveValue = waveNumber.textContent;
let monster = document.getElementById("monster");
let healthBarValue = document.getElementById("health-bar-value");
let weaponSelected = document.getElementById("weapon");
let weaponValue = weaponSelected.textContent;
let changeWeaponBtn = document.getElementById("different-weapon");
let healthBarFill = document.getElementById("fill");

const wavesMap = {
  1: 100,
  2: 250,
  3: 500,
  4: 1000,
  5: 1500,
  6: 2000,
  7: 2500,
  8: 3000,
  9: 4000,
  10: 8000,
  "MEGA-BOSS": 16000,
};

const weapons = {
  "💩": 1,
  "🔪": 20,
  "🔫": 40,
  "💣": 100,
};

let damage = 10;

changeWeaponBtn.addEventListener("click", () => {
  switch (weaponValue) {
    case "💩":
      weaponSelected.textContent = "🔪";
      weaponValue = "🔪";
      break;

    case "🔪":
      weaponSelected.textContent = "🔫";
      weaponValue = "🔫";
      break;

    case "🔫":
      weaponSelected.textContent = "💣";
      weaponValue = "💣";
      break;

    case "💣":
      weaponSelected.textContent = "💩";
      weaponValue = "💩";
  }
});

function waves() {
  for (let wave in wavesMap) {
    if (waveValue !== wave) continue;
    monster.health = wavesMap[wave];
    healthBarValue.innerHTML = monster.health;
    break;
  }
}

waves();

monster.addEventListener("click", fight);

function fight(e) {
  damage = 10;
  let health = healthBarValue.textContent;
  healthBarValue.innerHTML = health - damage;
  if (healthBarValue.textContent == 0) {
    EndGame();
  }
}

function EndGame() {
  monster.innerHTML = "YOU WIN";
  monster.style.fontSize = "500%";
  monster.removeEventListener("click", fight);
}
