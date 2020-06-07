let lat= '';
let lng= '';

const weatherData = new Weather(lat, lng)
const weatherPull = new UI()  

let Button1 = document.getElementById('button1').addEventListener('click', getWeather(0))
let Button2 = document.getElementById('button2').addEventListener('click', getWeather(1))
let Button3 = document.getElementById('button3').addEventListener('click', getWeather(2))
let Button4 = document.getElementById('button4').addEventListener('click', getWeather(3))
let Button5 = document.getElementById('button5').addEventListener('click', getWeather(4))
let Button6 = document.getElementById('button6').addEventListener('click', getWeather(5))
let Button7 = document.getElementById('button7').addEventListener('click', getWeather(6))


const weather = new Weather();

const ui = new UI();