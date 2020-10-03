const fetch = require('node-fetch')

async function fetchAllTitles (id) {
  const name = await fetch(`https://swapi.dev/api/people/${id}`)
  const parseName = await name.json()
  var film = await fetch(Promise.all(parseName.films.map))
  var filmName = await (Promise.all(film.json())
  //return Promise.all(filmName)
  return filmName.map
}




fetchAllTitles(1).then((titles) => console.log(titles))
