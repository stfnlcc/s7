const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
  ];
  
  const peliculaEncontrada = movies.find(pelicula => pelicula.date === 2010);
  
  if (peliculaEncontrada !== undefined) {
    console.log(`La película del año 2010 es: ${peliculaEncontrada.title}`);
  } else {
    console.log("No se encontró ninguna película del año 2010 en el array.");
  }
  