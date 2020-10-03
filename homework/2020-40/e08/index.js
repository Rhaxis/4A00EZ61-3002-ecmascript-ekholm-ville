const fetch = require('node-fetch')

async function fetchTitle (id) {
  const name = await fetch(`https://swapi.dev/api/people/${id}`)
  const parseName = await name.json()
  const film = await fetch(parseName.films[id])
  const filmName = await film.json()
  return filmName.title
}

fetchTitle(1).then((filmName) => console.log(filmName))
