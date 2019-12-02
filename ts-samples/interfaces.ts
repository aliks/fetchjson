interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(2019, 12),
  broken: false,
  summary(): string {
    return `Name ${this.name}`;
  }
};

const drink = {
  color: "Brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (reportItem: IReportable) => {
  console.log(reportItem.summary());
};

printSummary(oldCivic);
printSummary(drink);
