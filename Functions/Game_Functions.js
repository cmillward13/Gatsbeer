// ***************** PERFECT ****************

//need to retrieve object
const games= JSON.parse(localStorage.getItem("finalGames"))

//How many games are there
var MaxGames=games.length;

//Keep track of what game number you're on
var GameNumber=0; // Convenient because .js objects start index at 0

console.log(`Game number ${GameNumber+1} of ${MaxGames}`)

// Create function that changes Game card
function NextGame(){
    
    //Check if you're out of games
    if(GameNumber==MaxGames-1){

        //Adjust title
        document.getElementById("Title").innerHTML="End"

        //Adjust Description
        document.getElementById("Description").innerHTML="Something Clever"
    } 
    else{
        //Increase Game number
        GameNumber = GameNumber+1;

        // Put title in
        document.getElementById("Title").innerHTML=games[GameNumber].title;

        //Put description in
        document.getElementById("Description").innerHTML=games[GameNumber].description;
    }
    console.log(`Game number ${GameNumber+1} of ${MaxGames}`)
}

// Put first title in
document.getElementById("Title").innerHTML=games[GameNumber].title;

//Put first description in
document.getElementById("Description").innerHTML=games[0].description;

document.getElementById("Next").addEventListener("click",NextGame)