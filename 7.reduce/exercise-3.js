const exams = [
  { name: "Abel Cabeza Román", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const totalNotas = exams.reduce(
  (acumulador, examen) => acumulador + examen.score,
  0
);
const mediaNotas = totalNotas / exams.length;

console.log(`La media de las notas de todos los exámenes es: ${mediaNotas}`);
