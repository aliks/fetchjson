const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];

// console.log(pepsi[0]);

// not much usefull
const carSpecs: [number, number] = [400, 3354];

// better
const carStats = {
  horsepower: 400,
  weight: 3354
};
