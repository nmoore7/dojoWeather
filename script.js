console.log("I am connected");

var erase = document.querySelector(".footer");

function removeFooter(){

    erase.remove();

}

function message(){

    alert("Loading weather report...");

}
function cel2Far(temp){
    return Math.round(9/5 * temp + 32) + "º";
}
function far2Cel(temp){
    return Math.round(5/9 * (temp - 32)) + "º";
}

function convert(element) {
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if (element.value == "℃") {
            tempSpan.innerText = far2Cel(tempVal);
        } else {
            tempSpan.innerText = cel2Far(tempVal);
        }
    }
}