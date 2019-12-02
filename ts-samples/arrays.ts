const importantDates: (string | Date)[] = [new Date(), "2030"];
importantDates.push("2031");
importantDates.push(new Date());

const carMakers = ["ford", "toyota", "chevy"];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// preventing incompatible values
// carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
