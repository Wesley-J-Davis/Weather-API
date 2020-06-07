class Weather {
  constructor(lat, lng) {
    this.lat = lat
    this.long = lng

    // console.log(this.lat);
    // console.log(this.long);
  }
// use the length of the array of periods to set a for loop?
  async getWeather(tau) {
    const response = await fetch (`https://api.weather.gov/points/${this.lat},${this.lng}`);
    const responseData = await response.json();
    this.city = responseData.properties.relativeLocation.properties.city;
    this.state = responseData.properties.relativeLocation.properties.state;

    const responseTwo = await fetch (`${responseData.properties.forecast}`);
    const responseTwoData = await responseTwo.json()
    console.log(responseTwoData.properties.periods)
    this.forecast = responseTwoData.properties.periods[tau].shortForecast
    this.temp = responseTwoData.properties.periods[tau].temperature
    this.tempUnit = responseTwoData.properties.periods[tau].temperatureUnit
    this.name = responseTwoData.properties.periods[tau].name
    this.windSpeed = responseTwoData.properties.periods[tau].windSpeed
    this.windDirection = responseTwoData.properties.periods[tau].windDirection
    this.reference = responseTwoData.properties.periods

    console.log(responseTwoData.properties.periods[tau].icon)
    const responseThree = await fetch (`${responseTwoData.properties.periods[tau].icon}`);
    const responseThreeData = await responseThree.url
    console.log(responseThreeData)
    this.icon = responseThreeData
    console.log(this.icon)
  }

  changeLocation(lat, lng){
    this.lat = lat;
    this.lng = lng;
    // console.log(lat);
    // console.log(long);
  }
}

class UI {
  
  constructor() {
    this.cityState = document.getElementById('w-location')
    this.name = document.getElementById('w-name')
    this.forecast = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.temp = document.getElementById('w-temp')
    this.wind = document.getElementById('w-wind')
    this.button1 = document.getElementById('button1')
    this.button2 = document.getElementById('button2')
    this.button3 = document.getElementById('button3')
    this.button4 = document.getElementById('button4')
    this.button5 = document.getElementById('button5')
    this.button6 = document.getElementById('button6')
    this.button7 = document.getElementById('button7')
  }

  paint(weather) {
    this.cityState.textContent = weather.city + ", " +  weather.state
    this.temp.textContent = weather.temp + " " + weather.tempUnit
    this.forecast.textContent = weather.forecast
    this.icon.src = weather.icon
    this.name.textContent = weather.name
    this.wind.textContent = weather.windDirection + " wind at " + weather.windSpeed
    this.button1.textContent = weather.reference[0].name
    this.button2.textContent = weather.reference[1].name
    this.button3.textContent = weather.reference[2].name
    this.button4.textContent = weather.reference[3].name
    this.button5.textContent = weather.reference[4].name
    this.button6.textContent = weather.reference[5].name
    this.button7.textContent = weather.reference[6].name
  }
}