
let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

homeScore.textContent = 0;
awayScore.textContent = 0;

let result = 0;
let awayResult = 0;

function oneHome(){
    result += 1;
    
    homeScore.textContent = result;

}

function twoHome(){
    result += 2;
    
    homeScore.textContent = result;

}

function threeHome(){
    result += 3;
    
    homeScore.textContent = result;

}


function oneAway(){
    awayResult += 1;
    
    awayScore.textContent = awayResult;

}

function twoAway(){
    awayResult += 2;
    
    awayScore.textContent = awayResult;

}

function threeAway(){
    awayResult += 3;
    
    awayScore.textContent = awayResult;

}