const dayInputElement = document.querySelector('#input-city')
const btnSubmitElement = document.querySelector('#submit-city')
const btnRefreshElement = document.querySelector('#refresh-weather')
let loc = document.querySelector('#location')
let tempIcon = document.querySelector('#temp-icon')
let tempValue = document.querySelector('#temp-value')
let obHavo = document.querySelector('#ob-havo')

async function getData(){   
    navigator.geolocation.getCurrentPosition(async function(data){
        const myKey = `d5b6cfc043d849d6f927e86c0ac6b649`
        const lat = data.coords.latitude
        const lon = data.coords.longitude

        const getWeather = async (city) =>{
            try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`, {mode: 'cors'});

                const secondWeatherData = await response.json()
                const{name} = secondWeatherData;
                const{feels_like} = secondWeatherData.main;
                const{id, main} = secondWeatherData.weather[0]
                console.log(secondWeatherData)
    
                loc.textContent = name
                obHavo.textContent = main
                tempValue.textContent = Math.round(feels_like - 273)
    
                if(main == 'Clear'){
                    obHavo.textContent = 'Ochiq'
                }
                else if(main == 'Rain'){
                    obHavo.textContent = `Yomg'ir`
                }
                else if(main == 'Drizzle'){
                    obHavo.textContent = `Yog'ingarchilik`
                }
                else if(main == 'Clouds'){
                    obHavo.textContent = `Bulutli`
                }
                else if(main == 'Thunderstorm'){
                    obHavo.textContent = `Momaqaldiroq`
                }
                else if(main == 'Snow'){
                    obHavo.textContent = `Qor`
                }
                else if(main == 'Mist'|| 
                        main == 'Fog' || 
                        main == 'Haze'){
                    obHavo.textContent = `Tuman`
                }
                else if(main == 'Dust'|| 
                        main == 'Sand' || 
                        main == 'Ash' || 
                        main == 'Smoke'){
                    obHavo.textContent = `Changli`
                }
                else if(main == 'Squall'|| 
                        main == 'Tornado'){
                    obHavo.textContent = `Bo'ron`
                }

                if(id > 200 && id < 300){
                    tempIcon.src = 'img/weather/1375390-weather/svg/013-storm.svg'
                }
                else if(id > 300 && id < 400){
                    tempIcon.src = 'img/weather/1375390-weather/svg/003-drizzle.svg'
                }
                else if(id > 500 && id < 600){
                    tempIcon.src = 'img/weather/1375390-weather/svg/050-raining.svg'
                }
                else if(id > 600 && id < 701){
                    tempIcon.src = 'img/weather/1375390-weather/svg/033-snowflake.svg'
                }
                else if(id > 701 && id < 800){
                    tempIcon.src = 'img/weather/1375390-weather/svg/020-misty.svg'
                }
                else if(id == 800){
                    tempIcon.src = 'img/weather/1375390-weather/svg/022-sun.svg'
                }
                else if(id > 800 && id < 805){
                    tempIcon.src = 'img/weather/1375390-weather/svg/046-cloudy.svg'
                }   
            }
            catch(error){
                alert('Shahar topilmadi')
            }
            
        }
        let weatherApi = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}`)
        const weatherData = await weatherApi.json()
        
        .then (data =>{
            const{name} = data;
            const{feels_like} = data.main;
            const{id, main} = data.weather[0];

            loc.textContent = name
            obHavo.textContent = main
            tempValue.textContent = Math.round(feels_like - 273)

            if(main == 'Clear'){
                obHavo.textContent = 'Ochiq'
            }
            else if(main == 'Rain'){
                obHavo.textContent = `Yomg'ir`
            }
            else if(main == 'Drizzle'){
                obHavo.textContent = `Yog'ingarchilik`
            }
            else if(main == 'Clouds'){
                obHavo.textContent = `Bulutli`
            }
            else if(main == 'Thunderstorm'){
                obHavo.textContent = `Momaqaldiroq`
            }
            else if(main == 'Snow'){
                obHavo.textContent = `Qor`
            }
            else if(main == 'Mist'|| 
                    main == 'Fog' || 
                    main == 'Haze'){
                obHavo.textContent = `Tuman`
            }
            else if(main == 'Dust'|| 
                    main == 'Sand' || 
                    main == 'Ash' || 
                    main == 'Smoke'){
                obHavo.textContent = `Changli`
            }
            else if(main == 'Squall'|| 
                    main == 'Tornado'){
                obHavo.textContent = `Bo'ron`
            }




            if(id > 200 && id < 300){
                tempIcon.src = 'img/weather/1375390-weather/svg/013-storm.svg'
            }
            else if(id > 300 && id < 400){
                tempIcon.src = 'img/weather/1375390-weather/svg/003-drizzle.svg'
            }
            else if(id > 500 && id < 600){
                tempIcon.src = 'img/weather/1375390-weather/svg/050-raining.svg'
            }
            else if(id > 600 && id < 701){
                tempIcon.src = 'img/weather/1375390-weather/svg/033-snowflake.svg'
            }
            else if(id > 701 && id < 800){
                tempIcon.src = 'img/weather/1375390-weather/svg/020-misty.svg'
            }
            else if(id == 800){
                tempIcon.src = 'img/weather/1375390-weather/svg/022-sun.svg'
            }
            else if(id > 800 && id < 805){
                tempIcon.src = 'img/weather/1375390-weather/svg/046-cloudy.svg'
            }
        })

        btnSubmitElement.addEventListener('click' , e => {
            let cityName = dayInputElement.value
            e.preventDefault()
            getWeather(cityName)
            cityName = ''
            
        })
        btnRefreshElement.addEventListener('click' , e => {
            e.preventDefault()
            getData()
            dayInputElement.value = null
        })


    })


}

getData()

