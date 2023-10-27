
    

function getWeather(){
  
    let Cityid = document.getElementById("city");
    let City  = Cityid.value
    let Url = (`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=98740f4ebc0d63bc0f8ba70090e5a091`);

    fetch(Url)
    .then(res => res.json())
    .then(data => {
     let cityName = document.getElementById('cityName');
     let Main = document.getElementById('main');
     let images = document.getElementById('weatherImg');
     let temp = document.getElementById('temp');

        if(data.message == "city not found"){
            alert('Ops location not found');
            Cityid.value = '';
            window.location.reload();

        }      
     let weatherData = data.main.temp - 273.15;
     let tempText = parseInt(weatherData);
     temp.innerText = tempText;
     let nameUpperCase = data.name.toUpperCase();
     cityName.innerText = nameUpperCase;
     Main.innerText = data.weather[0].main;

     if(data.weather[0].main == "Clear"){
        images.src ='images/clear.png';
     }
     else if(data.weather[0].main == "Snow"){
      images.src ='images/snow.png';
     }
     else if(data.weather[0].main == "Clouds"){
      images.src ='images/cloud.png';
     }
     else if(data.weather[0].main == "Mist"){
      images.src ='images/mist.png';
     }
     else if(data.weather[0].main == "Haze"){
      images.src ='images/rain.png';
     }
     else{
      images.src = "";
     }
    
        Cityid.value = '';

    })
}



