// const url =
//   "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c31231e293msh206c783be5de6fcp1a8191jsn086096680eaa",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) =>{
    cityname.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+city, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pc
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
      })
      .catch((err) => console.log(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getweather(city.value)
})
getweather("delhi")
