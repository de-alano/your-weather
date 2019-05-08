const key = 'd94bcd435b62a031771c35633f9f310a';
const API = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';

// Fetch weather data from Open Weather Map API
const getWeather = city => {
    const URL = `${API}${city}&appid=${key}&units=metric&cnt=7`

    return fetch(URL)
        .then(response => {
            if (response.ok) {
                return response;
            }
            throw Error("Something went wrong. Probably no city in the base.")
        })
        .then(response => response.json())
        .catch(err => console.log(err))

}

export { getWeather }


