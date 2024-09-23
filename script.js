document.getElementById("dem").addEventListener("click", tally1);
let demtally = 0
function tally1(){
    demtally = demtally + 1
    document.getElementById("demtally").innerHTML = demtally
}

document.getElementById("rep").addEventListener("click", tally1);
let reptally = 0
function tally1(){
    reptally = reptally + 1
    document.getElementById("reptally").innerHTML = reptally
}