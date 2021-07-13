import React, {useEffect, useState} from "react";
import {P} from "../P/P";

export const WeatherInfo = () => {
    const [weatherData, setWeatherData] = useState(false);

    useEffect(() => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q=Phuket&appid=b8c32bd2a5146dfd499261f75e4b2fbf&units=metric'
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const fetchedWeather = [data.main.temp, data.main.pressure, data.weather[0].description];
                setWeatherData(fetchedWeather)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (!weatherData){
        return null
    }

    const [temp, pressure, info] = weatherData;
    console.log(temp,pressure,info)
    return (
        <div className={'weather'}>
            <P text={`${Math.floor(temp)}deg ${info}`} color={({theme}) => theme.colors.dark}/>
            <P text={`${pressure}hPa`} color={({theme}) => theme.colors.dark}/>
        </div>
    )
}