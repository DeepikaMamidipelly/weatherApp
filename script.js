let weather={
    apiKey:"66d13df2482431df0b2c33d3348c2362",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city+
        "&units=metric&appid="
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data)); 
    },
    displayWeather:function(data){
        const { name }=data;
        const {icon, description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerHTML="Weather in "+name;
        document.querySelector(".temp").innerHTML=temp+"°C";
        document.querySelector(".wind").innerHTML="Wind speed:"+speed +" km/h";
        document.querySelector(".humidity").innerHTML="Humidity:"+humidity+"%";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Denver");