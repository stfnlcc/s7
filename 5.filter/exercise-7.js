
    const streamers = [
      { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
      { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
      { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
      { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
    ];

    const inputElement = document.getElementById('streamerInput');

    function toFilterStreamers() {
      const inputValue = inputElement.value.toLowerCase();
      
      // Utilizar .filter() para mostrar por consola los streamers que incluyan la palabra introducida
      const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(inputValue));
      
      // Imprimir el nuevo array por consola
      console.log("Filtered Streamers Array:", filteredStreamers);
    }

    // Añadir un evento 'input' al campo de texto para llamar a la función cuando el usuario escribe
    inputElement.addEventListener('input', toFilterStreamers);
  