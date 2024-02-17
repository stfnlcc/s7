const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

document.getElementById('filterButton').addEventListener('click', function () {
    const filterInputValue = document.getElementById('filterInput').value.toLowerCase();
    const filteredStreamers = streamers.filter(streamer =>
        streamer.name.toLowerCase().includes(filterInputValue)
    );

    console.log(filteredStreamers);
});