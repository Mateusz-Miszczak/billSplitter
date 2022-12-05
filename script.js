"use-strict";

const currentCurrencyInputBill = document.getElementById(
  "current-currency-sign"
);
const currentCurrencyTotal = document.getElementById("current-currency-total");
const billTotalDescriptionLang = document.getElementById(
  "bill-total-description"
);
const tipDescription = document.getElementById("tip-description");
const amountOfPpl = document.getElementById("amount-of-people-description");
const finalTotalPriceDes = document.getElementById("final-total-price");

const billTotalInputEl = document.getElementById("bill-total-input");
const tipInputEl = document.getElementById("tip-input");
const numberOfPeopleDiv = document.getElementById("number-of-people");
const perPersonTotalDiv = document.getElementById("per-person-total");
const currency = document.querySelectorAll("#btn");
let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const chooseLangAndCurrency = () => {
  currency.forEach((buttonCurrency) => {
    buttonCurrency.onclick = () => {
      if (buttonCurrency.value === "usd") {
        currentCurrencyInputBill.innerText = "$: ";
        currentCurrencyTotal.innerText = "$ ↘ ";
        billTotalDescriptionLang.innerText = "Bill total";
        tipDescription.innerText = "Tip";
        amountOfPpl.innerText = "Amount of people ↙";
        finalTotalPriceDes.innerText = "Total per Person ↓";
      } else if (buttonCurrency.value === "pln") {
        currentCurrencyInputBill.innerText = "PLN: ";
        currentCurrencyTotal.innerText = "PLN ↘ ";
        billTotalDescriptionLang.innerText = "Całkowity rachunek";
        tipDescription.innerText = "Napiwek";
        amountOfPpl.innerText = "Liczba ludzi ↓";
        finalTotalPriceDes.innerText = "Całościowo na osobę ↓";
      } else if (buttonCurrency.value === "eur") {
        currentCurrencyInputBill.innerText = "€: ";
        currentCurrencyTotal.innerText = "€ ↘ ";
        billTotalDescriptionLang.innerText = "Rechnung insgesamt";
        tipDescription.innerText = "Tipp";
        amountOfPpl.innerText = "Anzahl der Personen ↙";
        finalTotalPriceDes.innerText = "Komplett pro Person ↓";
      }
    };
  });
};

chooseLangAndCurrency();

const calculateBill = () => {
  const userInputBill = Number(billTotalInputEl.value);

  const tipUserPercent = Number(tipInputEl.value / 100);

  const totalTipAmount = userInputBill * tipUserPercent;

  const total = totalTipAmount + userInputBill;

  const perPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `${perPersonTotal.toLocaleString("en-US")}`;
};

const increasePeople = () => {
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }
  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
};
