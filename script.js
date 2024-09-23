document.getElementById("dem").addEventListener("click", tallydem);
let demtally = 0
function tally1(){
    demtally = demtally + 1
    document.getElementById("demtally").innerHTML = demtally
}

document.getElementById("rep").addEventListener("click", tallyrep);
let reptally = 0
function tally1(){
    reptally = reptally + 1
    document.getElementById("reptally").innerHTML = reptally
}