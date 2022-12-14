let min = parseInt(prompt("Минимальное значение числа для игры", "0"));
let max = parseInt(prompt("Максимальное значение числа для игры", "100"));

let minValue;
let maxValue;

if (min === 0) {
  minValue = NaN || min;
} else {
  minValue = min || -999;
}

if (max === 0) {
  maxValue = NaN || max;
} else {
  maxValue = max || 999;
}

let newMinValue = minValue < -999 ? -999 : minValue;
let newMaxValue = maxValue > 999 ? 999 : maxValue;

alert(
  `Загадайте любое целое число от ${newMinValue} до ${newMaxValue}, а я его угадаю`
);

let answerNumber = Math.floor((newMinValue + newMaxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
const answerRandom = Math.round(Math.random() * 3);
switch (answerRandom) {
  case 1:
    answerField.innerText = `Ваше число "${answerNumber}"?\n\u{1F642}`;
    break;
  case 2:
    answerField.innerText = `Я знаю, что это число "${answerNumber}", я прав?\n\u{1F914}`;
    break;
  case 3:
    answerField.innerText = `Мне кажется, что это число "${answerNumber}"\n\u{1F575}`;
    break;
  default:
    answerField.innerText = `Это число "${answerNumber}", не так ли?\n\u{1F928}`;
}

document.getElementById("btnRetry").addEventListener("click", function () {
  min = parseInt(prompt("Минимальное значение числа для игры", "0"));
  max = parseInt(prompt("Максимальное значение числа для игры", "100"));

  minValue;
  maxValue;

  if (min === 0) {
    minValue = NaN || min;
  } else {
    minValue = min || -999;
  }

  if (max === 0) {
    maxValue = NaN || max;
  } else {
    maxValue = max || 999;
  }

  newMinValue = minValue < -999 ? -999 : minValue;
  newMaxValue = maxValue > 999 ? 999 : maxValue;

  alert(
    `Загадайте любое целое число от ${newMinValue} до ${newMaxValue}, а я его угадаю`
  );

  answerNumber = Math.floor((newMinValue + newMaxValue) / 2);
  orderNumber = 1;
  gameRun = true;
  const orderNumberField = document.getElementById("orderNumberField");
  const answerField = document.getElementById("answerField");

  orderNumberField.innerText = orderNumber;
  const answerRandom = Math.round(Math.random() * 3);
  switch (answerRandom) {
    case 1:
      answerField.innerText = `Ваше число "${answerNumber}"?\n\u{1F642}`;
      break;
    case 2:
      answerField.innerText = `Я знаю, что это число "${answerNumber}", я прав?\n\u{1F914}`;
      break;
    case 3:
      answerField.innerText = `Мне кажется, что это число "${answerNumber}"\n\u{1F575}`;
      break;
    default:
      answerField.innerText = `Это число "${answerNumber}", не так ли?\n\u{1F928}`;
  }
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (newMinValue === newMaxValue) {
      const phraseRandom = Math.round(Math.random() * 3);
      switch (phraseRandom) {
        case 1:
          answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
          break;
        case 2:
          answerField.innerText = `\n\u{1F921}`;
          break;
        case 3:
          answerField.innerText = `Мне кажется, что вы меня обманули\n\u{1F620}`;
          break;
        default:
          answerField.innerText = `Вы загадали неправильное число!\n\u{1F610}`;
          break;
      }
      gameRun = false;
    } else {
      newMinValue = answerNumber + 1;
      answerNumber = Math.floor((newMinValue + newMaxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerRandom = Math.round(Math.random() * 3);
      switch (answerRandom) {
        case 1:
          answerField.innerText = `Ваше число "${answerNumber}"?`;
          break;
        case 2:
          answerField.innerText = `Неужели "${answerNumber}"?`;
          break;
        case 3:
          answerField.innerText = `Возможно "${answerNumber}"?`;
          break;
        default:
          answerField.innerText = `А что, если "${answerNumber}"?`;
      }
    }
  }
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (newMaxValue === newMinValue) {
      const phraseRandom = Math.round(Math.random() * 3);
      switch (phraseRandom) {
        case 1:
          answerField.innerText = `Я сдаюсь..\n\u{1F92F}`;
          break;
        case 2:
          answerField.innerText = `\n\u{1F921}`;
          break;
        case 3:
          answerField.innerText = `Мне кажется, что вы меня обманули\n\u{1F620}`;
          break;
        default:
          answerField.innerText = `Вы загадали неправильное число!\n\u{1F610}`;
          break;
      }
      gameRun = false;
    } else {
      newMaxValue = answerNumber - 1;
      answerNumber = Math.ceil((newMinValue + newMaxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      const answerRandom = Math.round(Math.random() * 3);
      switch (answerRandom) {
        case 1:
          answerField.innerText = `Ваше число "${answerNumber}"?`;
          break;
        case 2:
          answerField.innerText = `Неужели "${answerNumber}"?`;
          break;
        case 3:
          answerField.innerText = `Возможно "${answerNumber}"?`;
          break;
        default:
          answerField.innerText = `А что, если "${answerNumber}"?`;
      }
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  if (gameRun) {
    const answerRandom = Math.round(Math.random() * 3);
    switch (answerRandom) {
      case 1:
        answerField.innerText = `Я всегда угадываю\n\u{1F935}`;
        break;
      case 2:
        answerField.innerText = `Это было просто\n\u{1F60E}`;
        break;
      case 3:
        answerField.innerText = `Отлично поиграли\n\u{1F91D}`;
        break;
      default:
        answerField.innerText = `Если хочешь поиграть снова, нажми кнопку "Заново"\n\u{1F3AE}`;
    }
    gameRun = false;
  }
});
