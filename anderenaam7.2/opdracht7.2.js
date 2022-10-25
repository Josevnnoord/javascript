function budget(){
    var aantal = prompt("yes");
    var budget = 100;
    if (budget>aantal) {
        document.getElementById("h1").innerHTML = "Helaas, te weinig geldt";
        document.getElementById("h1").style.color = "red";
    }
    else{
        document.getElementById("h1").innerHTML = "U heeft genoeg geld!";
        document.getElementById("h1").style.color = "green";
    }
}


