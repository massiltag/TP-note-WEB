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
        req();
    });
}


function req() {
    alert('requête');
}

function req2() {
    //coordonnees de Paris 
    let champ1 = document.getElementById("champ1").value;
    let champ2 = document.getElementById("champ2").value;
    let champ3 = document.getElementById("champ3").value;
    let URL = "";

    makeAjaxCall(URL, "GET").then(function (respJson) {
       
        

    }, function (reason) {
        console.log("error in processing your request", reason);
    });

}
