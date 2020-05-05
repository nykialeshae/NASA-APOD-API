let req = new XMLHttpRequest();
let urlKey = "https://api.nasa.gov/planetary/apod?api_key=uKCCopQ60yRZqmsSFOteeV7YFxN01N0n4782YVV3"; 

req.open("GET", urlKey);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	let response = JSON.parse(req.responseText);
    document.getElementById("title").innerHTML = response.title;
    document.getElementById("date").innerHTML = response.date;
    document.getElementById("pic").src = response.hdurl;
    document.getElementById("explanation").innerHTML = response.explanation;
    document.getElementById("copyright").innerHTML = response.copyright;
  }
})