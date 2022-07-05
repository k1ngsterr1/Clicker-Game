let waveNumber = document.getElementById("wave-number");
let waveValue = waveNumber.textContent;
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
  "GAME-OVER": 0,
};

// WAVES
let monster = document.getElementById("monster");
let healthBarValue = document.getElementById("health-bar-value");
let healthBarFill = document.getElementById("fill");

// MONSTER AND HEALTH
let weaponSelected = document.getElementById("weapon");
let weaponValue = weaponSelected.textContent;
let changeWeaponBtn = document.getElementById("different-weapon");
const weapons = {
  "💩": 1,
  "🔪": 20,
  "🔫": 40,
  "💣": 100,
  "🗡": 500,
};
// WEAPONS

// OTHERS
let mobValue = monster.textContent;

let nextBtn = document.getElementById("next");
nextBtn.disabled = true;

let restartBtn = document.getElementById("restart");
restartBtn.style.display = "none";

let damage = "";

// Change Weapons Function

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
      weaponSelected.textContent = "🗡";
      weaponValue = "🗡";
      break;

    case "🗡":
      weaponSelected.textContent = "💩";
      weaponValue = "💩";
      break;
  }
});

// Waves Function

function waves() {
  for (let wave in wavesMap) {
    // Перебираем объект с волнами в цикле
    if (waveValue !== wave) continue; // Если ключ не равен номеру текущей волны, идем дальше
    monster.health = wavesMap[wave]; // дадим монстру свойство health для удобства
    healthBarValue.innerHTML = monster.health;
    console.log("popa"); // покажем health мостра в хелсбаре
    break; // Выходим из цикла
  }
}

waves();

// Fight Function

monster.addEventListener("click", fight);

function fight(e) {
  switch (weaponValue) {
    case "💩":
      damage = weapons["💩"];
      break;

    case "🔪":
      damage = weapons["🔪"];
      break;

    case "🔫":
      damage = weapons["🔫"];
      break;

    case "💣":
      damage = weapons["💣"];
      break;

    case "🗡":
      damage = weapons["🗡"];
      break;
  }
  let health = healthBarValue.textContent;
  healthBarValue.innerHTML = health - damage;
  if (healthBarValue.textContent < 0) {
    healthBarValue.textContent = "0";
    EndGame();
  }
  if (healthBarValue.textContent == 0) {
    EndGame();
  }
}

// New Mob Function

function nextMob() {
  switch (mobValue) {
    case "👽":
      monster.style.fontSize = "1200%";
      mobValue = "😈";
      monster.textContent = "😈";
      waveValue = "2";
      waveNumber.textContent = "2";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      monster.addEventListener("click", fight);
      break;

    case "😈":
      monster.style.fontSize = "1200%";
      mobValue = "🤡";
      monster.textContent = "🤡";
      waveValue = "3";
      waveNumber.textContent = "3";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🤡":
      monster.style.fontSize = "1200%";
      mobValue = "🤢";
      monster.textContent = "🤢";
      waveValue = "4";
      waveNumber.textContent = "4";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🤢":
      monster.style.fontSize = "1200%";
      mobValue = "🙉";
      monster.textContent = "🙉";
      waveValue = "5";
      waveNumber.textContent = "5";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🙉":
      monster.style.fontSize = "1200%";
      mobValue = "💀";
      monster.textContent = "💀";
      waveValue = "6";
      waveNumber.textContent = "6";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "💀":
      monster.style.fontSize = "1200%";
      mobValue = "🎃";
      monster.textContent = "🎃";
      waveValue = "7";
      waveNumber.textContent = "7";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🎃":
      monster.style.fontSize = "1200%";
      mobValue = "👾";
      monster.textContent = "👾";
      waveValue = "8";
      waveNumber.textContent = "8";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "👾":
      monster.style.fontSize = "1200%";
      mobValue = "😡";
      monster.textContent = "😡";
      waveValue = "9";
      waveNumber.textContent = "9";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "😡":
      monster.style.fontSize = "1200%";
      mobValue = "🧟‍♂️";
      monster.textContent = "🧟‍♂️";
      waveValue = "10";
      waveNumber.textContent = "10";
      nextBtn.disabled = true;
      nextBtn.classList.remove("activeBtn");
      nextBtn.classList.add("disabledBtn");
      waves();
      if (monster.health == 0) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabledBtn");
        nextBtn.classList.add("activeBtn");
      }
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🧟‍♂️":
      monster.style.fontSize = "1200%";
      mobValue = "🤖";
      monster.textContent = "🤖";
      waveValue = "MEGA-BOSS";
      waveNumber.textContent = "MEGA-BOSS";
      waves();
      monster.addEventListener("click", fight);
      break;

    case "🤖":
      monster.style.fontSize = "500%";
      mobValue = "YOU WIN";
      monster.textContent = "GAME-OVER";
      waveValue = "GAME-OVER";
      waveNumber.textContent = "MEGA-BOSS";
      waves();
      monster.addEventListener("click", fight);
      break;
  }
}

// Restart Function

function restartGame() {
  if (monster.textContent == "GAME-OVER") {
    nextBtn.style.display = "none";
    restartBtn.style;
  }
}

// End Game Function

function EndGame() {
  monster.innerHTML = "YOU WIN";
  nextBtn.classList.remove("disabledBtn");
  nextBtn.disabled = false;
  nextBtn.classList.add("activeBtn");
  monster.style.fontSize = "500%";
  monster.style.cursor = "auto";
  monster.removeEventListener("click", fight);
}
