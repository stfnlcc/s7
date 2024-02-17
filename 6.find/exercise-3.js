const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const alienEncontrado = aliens.find((alien) => alien.name === "Cucushumushu");

if (alienEncontrado !== undefined) {
  const mutacionEncontrada = mutations.find(
    (mutacion) => mutacion.name === "Porompompero"
  );

  if (mutacionEncontrada !== undefined) {
    alienEncontrado.mutation = mutacionEncontrada;
    console.log(
      "Se encontró el alien y se añadió la propiedad .mutation con la mutación 'Porompompero'."
    );
  } else {
    console.log("No se encontró la mutación 'Porompompero'.");
  }
} else {
  console.log("No se encontró el alien con el nombre 'Cucushumushu'.");
}

console.log(aliens);
