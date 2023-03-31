
//set last best
setInterval(function () {document.getElementById("last").innerHTML = value}, 1000);


setInterval(function () {document.getElementById("last").style.color = "black"}, 1000);

if (document.getElementById("last").innerHTML = 12){
    document.getElementById("last").style.color = "green"
}

//set mash speed to 0 every 1 second
setInterval(function () {document.getElementById("mash").innerHTML = "1"}, 1000);


var space_bar = 32;
var value = 1;

setInterval(function () {value = 1}, 1000);

window.onkeydown= function(gfg){ 
    if(gfg.keyCode === space_bar){ 
        value++; 
        document.getElementById("mash").innerHTML = value; 

    }}; 