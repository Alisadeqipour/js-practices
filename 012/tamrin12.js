const summary = (text, textLenght) => {
  const summerize = text.substr(0, textLenght) + "...";
  return summerize;
};

console.log(summary("Hi im trying to learn JSON.", 4));

const secretCard = (cardNumber) => {
  if (cardNumber.length === 16) {
    const shorter = cardNumber.substr(0, 12) + "****";
    return shorter;
  } else alert("شماره کارت اشتباه است!");
};

console.log(secretCard(6221061248512608));

const censor = (text, harmful) => {
  const safe = text.replaceAll(harmful, "*".repeat(harmful.length));
  return safe;
};

console.log(censor("Im a terrorist.", "terrorist"));

const expYears = (number) => {
  if (number <= 2) {
    return "Junior";
  } else if (number <= 5) {
    return "Midlevel";
  } else {
    return "Senior";
  }
};

console.log(expYears(4));
