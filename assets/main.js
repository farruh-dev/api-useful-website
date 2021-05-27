const dayInputElement = document.querySelector('#input-city')
const btnSubmitElement = document.querySelector('#submit-city')
let loc = document.querySelector('#location')
let tempIcon = document.querySelector('#temp-icon')
let tempValue = document.querySelector('#temp-value')
let obHavo = document.querySelector('#ob-havo')

async function getData(){   
    navigator.geolocation.getCurrentPosition(async function(data){
        const myKey = `d5b6cfc043d849d6f927e86c0ac6b649`
        const lat = data.coords.latitude
        const lon = data.coords.longitude
        console.log(lat, lon)

        let weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`)
        const weatherData = await weatherApi.json()

        .then (data =>{
            const{name} = data;
            const{feels_like} = data.main;
            const{id, main} = data.weather[0];

            loc.textContent = name
            obHavo.textContent = main
            tempValue.textContent = Math.round(feels_like - 273)

            if(id > 200 && id < 300){
                tempIcon.src = 'img/weather/1375390-weather/svg/013-storm.svg'
            }
            if(id > 300 && id < 400){
                tempIcon.src = 'img/weather/1375390-weather/svg/003-drizzle.svg'
            }
            if(id > 500 && id < 600){
                tempIcon.src = 'img/weather/1375390-weather/svg/050-raining.svg'
            }
            if(id > 600 && id < 701){
                tempIcon.src = 'img/weather/1375390-weather/svg/033-snowflake.svg'
            }
            if(id > 701 && id < 800){
                tempIcon.src = 'img/weather/1375390-weather/svg/020-misty.svg'
            }
            if(id == 800){
                tempIcon.src = 'img/weather/1375390-weather/svg/022-sun.svg'
            }
            if(id > 800 && id <= 804){
                tempIcon.src = 'img/weather/1375390-weather/svg/046-cloudy.svg'
            }
        })

    })


}

getData()

