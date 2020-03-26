const cases = require("./2020-03-25.json");
let res = [];
for (let i in cases.data.countries) {
  //var Case = cases["data"]["countries"][i];
  const Case = cases.data.countries[i];
  // console.log(
  if (Case.recovered / Case.cases > 0) {
    res.push({
      recovered: `${Case.recovered / Case.cases}`,
      country: `${Case.country}`
    });
  }

  // );
}
console.log(
  res.sort((a, b) => {
    return a.recovered > b.recovered ? -1 : 1;
  })
);
