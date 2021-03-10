"use strict";

const ALPHABETIC_CHARACTERS = /[A-Za-z]/i;

const IDENTIFIER_DICTIONARY = new Map([
  [0, "T"],
  [1, "R"],
  [2, "W"],
  [3, "A"],
  [4, "G"],
  [5, "M"],
  [6, "Y"],
  [7, "F"],
  [8, "P"],
  [9, "D"],
  [10, "X"],
  [11, "B"],
  [12, "N"],
  [13, "J"],
  [14, "Z"],
  [15, "S"],
  [16, "Q"],
  [17, "V"],
  [18, "H"],
  [19, "L"],
  [20, "C"],
  [21, "K"],
  [22, "E"],
]);

const idCardNumberInput = document.querySelector(".js-id-card-number");
const idCardLetterInput = document.querySelector(".js-id-card-letter");
const submitButton = document.querySelector("input[type=submit]");
const form = document.querySelector("form");
const popup = document.getElementById("popup");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateIdCard();
});

const clearInputs = () => {
  idCardNumberInput.value = "";
  idCardLetterInput.value = "";
};

const isValidLetter = (letter) =>
  letter.length === 1 && ALPHABETIC_CHARACTERS.test(letter);

const isValidNumber = (number) => Number.isInteger(number) && number > 0;

const validateIdCard = () => {
  const idCardNumber = parseInt(idCardNumberInput.value);
  const letter = idCardLetterInput.value;

  if (!isValidNumber(idCardNumber)) {
    showPopup("El número no es valido");
    clearInputs();
    return;
  }

  if (!isValidLetter(letter)) {
    showPopup("No has introducido una letra correcta");
    clearInputs();
    return;
  }

  const remainder = idCardNumber % 23;
  const validLetter = IDENTIFIER_DICTIONARY.get(remainder);

  const isValidIdCard = validLetter === letter.toUpperCase();
  if (!isValidIdCard) {
    clearInputs();
    showPopup(
      buildTitle(
        "El DNI introducido no es correcto, por favor, revisa los campos del formulario",
        "h3",
        "error"
      )
    );

    return;
  }

  showPopup(
    buildTitle("La letra introducida es válida:" + validLetter, "h1", "success")
  );
};

function showPopup(text) {
  popup.classList.toggle("show");
  popup.querySelector(".content").appendChild(text);
}

function closePopup() {
  popup.classList.toggle("show");
  popup.querySelector(".content").innerHTML = "";
}

const buildTitle = (text, tag, className) => {
  const title = document.createElement(tag);
  title.classList.add(className);
  const content = document.createTextNode(text);
  title.appendChild(content);
  return title;
};
