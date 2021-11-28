//these are api keys you can get for free If you want your own, they're free
ipinfo_token = "124667c8994bc6";
weather_token = "e3e67c3cef974039f2ccd4fb5fea822e";

function default_bg(){
	document.getElementById("greg").style.backgroundImage = "url('css/bg9.jpg')";
	
	document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";
	document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";
	document.getElementById("upwork").innerHTML = "Hire me as a freelancer.";
	document.getElementById("linkedin").innerHTML = "Look at my resume.";
	document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";
}

fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(function(ip){
	  
	  let url = "https://ipinfo.io/"+ip.ip.toString()+"?token="+ipinfo_token;
	  fetch(url)
		.then(response => response.json())
		.then(function(data){
			
			let url2="https://api.openweathermap.org/data/2.5/weather?zip="+data.postal.toString()+","+data.country.toString()+"&appid="+weather_token;
			fetch(url2)
			.then(response => response.json())
			.then(function(weather_data){
				this_time = "Day";
				
				var now = new Date().getTime() / 1000;
				if ( now>weather_data.sys.sunrise && now<weather_data.sys.sunset ){
					this_time = "Day";
					if (weather_data.weather[0].main=="Snow" || weather_data.weather[0].main=="Clear" || 
					weather_data.weather[0].main=="Smoke" || weather_data.weather[0].main=="Clouds"){
						document.getElementById("backtotop").style.color = "black";
					}
				}
				else{
					this_time = "Night";
				}
				document.getElementById("greg").style.backgroundImage = "url('js/weather_bg/"+weather_data.weather[0].main+this_time+".jpg')";
				
				document.getElementById("intro").innerHTML = "That's me. This is what I'm doing right now.";
				document.getElementById("github").innerHTML = "See my contributions to collaborations as well as individual projects.";
				document.getElementById("upwork").innerHTML = "Hire me as a freelancer.";
				document.getElementById("linkedin").innerHTML = "Look at my resume.";
				document.getElementById("insta").innerHTML = "Look at pictures of my cat Rockstar.";
				
				
				
			})
			.catch(function(error) {
			  console.log(error);
			  default_bg();
			});
			
			
			
		})
		.catch(function(error) {
		  console.log(error);
		  default_bg();
		});
	  
  })
  .catch(function(error) {
	console.log(error);
	default_bg();
  });

//get use ipinfo
//get weather based off of zip code
//modify css 
