var i = 0;
function ball(){
    i++;
    document.getElementById('h1').innerHTML = i;

    if (i === 10) {
        i = -1
    }

}
