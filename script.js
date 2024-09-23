document.getElementById("dem").addEventListener("click", tallydem);
let demtally = 0;
function tallydem(){
    demtally +=1
    document.getElementById("demtally").innerHTML = demtally
}

document.getElementById("rep").addEventListener("click", tallyrep);
let reptally = 0;
function tallyrep(){
    reptally +=1;
    document.getElementById("reptally").innerHTML = reptally
}