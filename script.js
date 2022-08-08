const form = document.getElementById("form");
const owner = document.getElementById("owner");
const card = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

document.querySelector(".owner").oninput = () =>{
    document.querySelector(".name").innerText = document.querySelector(".owner").value;
};
document.querySelector(".card-input").oninput = () =>{
    document.querySelector(".span-1").innerText = document.querySelector(".card-input").value;
};
document.querySelector(".month").oninput = () => {
    document.querySelector(".expiry-date").innerText = document.querySelector(".month").value;
};
document.querySelector(".year").oninput = () => {
    document.querySelector(".exp-year").innerText = document.querySelector(".year").value;
};
document.querySelector(".cvc").oninput = () => {
    document.querySelector(".text").innerText = document.querySelector(".cvc").value;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove whitespaces
  const ownerValue = owner.value.trim();
  const cardValue = card.value.trim();
  const yearValue = year.value.trim();
  const monthValue = month.value.trim();
  const cvcValue = cvc.value.trim();

  if (ownerValue === "") {
    setErrorFor(owner, "Can't be blank");
  } else {
    setSuccessFor(owner);
  }
  if (cardValue === "") {
    setErrorFor(card, "Can't be blank");
  } else if (!isCardNUmber(cardValue)) {
    setErrorFor(card, "Wrong format, number only");
  } else {
    setSuccessFor(card);
  }

  if (yearValue === "") {
    setErrorFor(year, "Can't be blank");
  } else if(!isYear(yearValue)) {
    setErrorFor(year, "Invalid format")
  } else {
    setSuccessFor(year);
  }

  if (monthValue === "") {
    setErrorFor(month, "Can't be blank");
  } else if(!isMonth(monthValue)) {
    setErrorFor(month, "Invalid format");
  } else {
    setSuccessFor(month);
  }

  if (cvcValue === "") {
    setErrorFor(cvc, "Can't be blank");
  } else if (!isCvc(cvcValue)) {
    setErrorFor(cvc, "Length must be 4");
  } else {
    setSuccessFor(cvc);
  }

  // show success message on confirmation. Thank you for submission
  if (ownerValue && cardValue && yearValue && monthValue && cvcValue === true ) {
    setSuccessFor(alert("yeeeeeiy"))
  } else {
    return false;
  }

};
function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input, message) {
  const formControl = input.parentElement; //.form-control
  formControl.className = "form-control success";
}

function isCardNUmber(card) {
  let number = /^[0-9]{12}$/;
  return number.test(card);
};

function isYear(year) {
    let yearNumber = /(^[1-9]$)|(^[0-1][1-2]$)|(^0[1-9]$)/;
    return yearNumber.test(year);
}

function isMonth(month) {
    let monthNumber = /(^[1-9]$)|(^[0-1][1-2]$)|(^0[1-9]$)/;
    return monthNumber.test(month);
}
function isCvc(cvc) {
    let digits = /^[0-9]{4}$/;
    return digits.test(cvc);
}