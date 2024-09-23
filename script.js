document.getElementById("dem").addEventListener("click", tallydem);
let demtally = 0;
function tallydem(){
    demtally +=1
    document.getElementById("demtally").innerHTML = demtally;
    calculateratio();
}

document.getElementById("rep").addEventListener("click", tallyrep);
let reptally = 0;
function tallyrep(){
    reptally +=1;
    document.getElementById("reptally").innerHTML = reptally;
    calculateratio();
}

function calculateratio(){
    let total = reptally + demtally
    if (total === 0) {
        document.getElementById("ratios").innerHTML = "No votes yet!";
        return;
    }
    let repRatio = (reptally / total * 100).toFixed(2);
    let demRatio = (demtally / total * 100).toFixed(2);
    document.getElementById("ratios").innerHTML = `Republican: ${repRatio}% | Democrat: ${demRatio}%`
    document.getElementById("repbox").style.width = `${repRatio}%`;
    document.getElementById("dembox").style.width = `${demRatio}%`;
}