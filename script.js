
function loadJson() {
    console.log(countries)
    for(var c of countries) {
        console.log(c)
    }
}


function makeAjaxCall(url, methodType, callback) {

    let header = document.querySelector('header');
    let section = document.querySelector('section');

    return $.ajax({
        url: url,
        method: methodType,
        dataType: "json"
    })
}


function onLoad() {
    $("#search").click(function(){
        req2();
    });

    loadJson();
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
        insertData(
            respJson.name,
            respJson.weather[0].description,
            respJson.main.temp,
            respJson.main.feels_like,
            respJson.main.temp_min,
            respJson.main.temp_max
        )
        console.log("temperature moyenene" + respJson.main.temp);
        console.log("temperature ressentie" + respJson.main.feels_like);
        console.log("temperature min" + respJson.main.temp_min);
        console.log("temperature max" + respJson.main.temp_max);
       // $('#table tr:last').append('<td>' + test + '</td>');
       

    }, function (reason) {
        alert("Ville non trouvée, merci de corriger le formulaire.");
    });

}


// UTIL
function insertData(ville, desc, moyenne, ressenti, min, max) {
    let name = ville.toLowerCase();
    let desc2 = desc.toLowerCase();
    $("#table").append(
        '\
            <tr>\
                <td>' + name.charAt(0).toUpperCase() + name.slice(1) + '</td>\
                <td>' + desc2.charAt(0).toUpperCase() + desc2.slice(1) + '</td>\
                <td>' + moyenne + '°' + '</td>\
                <td>' + ressenti + '°' + '</td>\
                <td>' + min + '°' + '</td>\
                <td>' + max + '°' + '</td>\
            </tr>\n'
    );
}