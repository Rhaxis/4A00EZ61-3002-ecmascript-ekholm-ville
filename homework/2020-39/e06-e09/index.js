fetch('https://api.openweathermap.org/data/2.5/weather?q=Tampere,fin&appid=edbffa2ec8a44e69d38df96c054e20ee').then(hr => hr.json()).then(weather)

function weather (city) {
  let p = document.querySelector('p')
  p.innerHTML = city.name + " temperature: " + city.main.temp + "K"
  const img = document.createElement('img')
  img.setAttribute('src', 'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png')

  const body = document.querySelector('body')
  body.appendChild(img)
}
function weatherCoord (city) {
  let p1 = document.querySelector('p1')
  p1.innerHTML = city.name + " temperature: " + city.main.temp + "K"
  const img = document.createElement('img')
  img.setAttribute('src', 'http://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png')

  const body = document.querySelector('body')
  body.appendChild(img)
}

navigator.geolocation.getCurrentPosition((position) => {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=edbffa2ec8a44e69d38df96c054e20ee').then(hr => hr.json()).then(weatherCoord)
});
