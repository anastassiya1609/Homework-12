const btnFigures = document.querySelectorAll(".btn__figure");
const typeFigures = document.querySelectorAll(".figures");
const btnColors = document.querySelectorAll(".btn__color");
const messageError = document.querySelector(".error");
const messageErrorText = document.querySelector(".error__text");
const inputText = document.querySelector("input.text");
const btbAddText = document.querySelector(".btn__text");
const addText = document.querySelectorAll(".figure__text");
const clearBtn = document.querySelector(".clear");

const colors = [
  {
    title: "Красный",
    hex: "#E32636",
  },
  {
    title: "Синий",
    hex: "#1560BD",
  },
  {
    title: "Желтый",
    hex: "#FDE910",
  },
  {
    title: "Зеленый",
    hex: "#138808",
  },

  {
    title: "Оранжевый",
    hex: "#ffa500",
  },
];

// Обработка ошибок
function showError(message, messageObject) {
  messageObject.textContent = message;
}

// Скрыть фигуру
function hideFigure() {
  for (let j = 0; j < typeFigures.length; j++) {
    const typeFigure = typeFigures[j];

    typeFigure.classList.remove("display__block");
  }
}

// Добавление/очищение текста в фигуре

function textProcessingInFigure(valueText) {
  for (const text of addText) {
    text.textContent = valueText;
  }
}

// фигуры
for (let i = 0; i < btnFigures.length; i++) {
  const btnFigure = btnFigures[i];

  btnFigure.addEventListener("click", function () {
    showError("", messageError);
    hideFigure();
    typeFigures[i].classList.add("display__block");
  });
}

// цвета
for (let i = 0; i < btnColors.length; i++) {
  const btnColor = btnColors[i];

  btnColor.addEventListener("click", function () {
    const activeFigure = document.querySelector(".figures.display__block");

    if (activeFigure) {
      activeFigure.style.backgroundColor = colors[i].hex;
    } else {
      showError("Выберите фигуру", messageError);
    }

    console.log(activeFigure);
  });
}

// текст

btbAddText.addEventListener("click", function (event) {
  event.preventDefault();
  const activeFigure = document.querySelector(".figures.display__block");

  if (activeFigure) {
    textProcessingInFigure(inputText.value);
  } else {
    showError("Выберите фигуру", messageError);
  }

  if (inputText.value === "") {
    showError("Напишите  текст", messageErrorText);
  } else {
    showError("", messageErrorText);
  }
});

// кнопка очищения

clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  hideFigure();
  textProcessingInFigure("");
  inputText.value = "";
});
