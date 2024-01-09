

async function getWeather(city){
	cityname.innerHTML=city;
	
	const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db3c71a8e1mshbc99b40140286d9p1f5a24jsnea4e742f7a6a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

	cloud_pct.innerHTML = result.cloud_pct
	humidity.innerHTML = result.humidity
	max_temp.innerHTML = result.max_temp
	min_temp.innerHTML = result.min_temp
	sunrise.innerHTML = result.sunrise
	sunset.innerHTML = result.sunset
	temp2.innerHTML = temp.innerHTML = result.temp
	wind_degrees2.innerHTML = wind_degrees.innerHTML = result.wind_degrees
	wind_speed1.innerHTML = wind_speed.innerHTML = result.wind_speed
	
} catch (error) {
	console.error(error);
}
};

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");
