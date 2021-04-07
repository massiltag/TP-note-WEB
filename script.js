function makeAjaxCall(url, methodType, callback) {

    let header = document.querySelector('header');
    let section = document.querySelector('section');

    return $.ajax({
        url: url,
        method: methodType,
        dataType: "json"
    })
}


function setEvents() {
    $("#search").click(function(){
        req2();
    });
}


function req() {
    alert('requête');
}

//zip code api
function req2() {
    //coordonnees de Paris 
    let ville = document.getElementById("champ1").value;
    let codePays = document.getElementById("champ2").value;
    let langue = document.getElementById("champ3").value;
    let units = document.getElementById("champ4").value;
   
    let apiKey="ecaa16f9b4b360ea8b57867cd78a6816"

    let URL = "http://api.openweathermap.org/data/2.5/weather?q="+ville+","+codePays+"&lang="+langue+"&units="+units+'&appid='+apiKey;

    makeAjaxCall(URL, "GET").then(function (respJson) {

        //test =respJson.dataseries[0].timepoint
        console.log(respJson.weather[0].description);
        console.log("temperature moyenene" + respJson.main.temp);
        console.log("temperature ressentie" + respJson.main.feels_like);
        console.log("temperature min" + respJson.main.temp_min);
        console.log("temperature max" + respJson.main.temp_max);
       // $('#table tr:last').append('<td>' + test + '</td>');
       

    }, function (reason) {
        console.log("error in processing your request", reason);
    });

}
