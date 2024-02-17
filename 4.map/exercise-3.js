const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const modifiedCities = cities.map((city) => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name;
});

console.log("Modified Cities Array:", modifiedCities);
