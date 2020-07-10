

function randomize(array){
    //Randomizes the order of elements in the array
    //uses Fisher-Yates Shuffle
    var temp;
    for (var i=array.length-1;i>0;i--){
        var j =  Math.floor(Math.random()*(i+1)) //works.
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    return array
}

function getNames(){
    //Takes names from the user input
    var names=[];//create empty list

    var quan=document.names.quantity.value; //get number of players from html

    for (i=0;i<quan;i++){
        names.push(document.querySelectorAll('input[type=text]')[i].value) //add all names to the list
    }
    return names
}

function convertBack(gameList){
    /* 
    This function reverses the convert() function in Games.js
    Escentially a version of JSON.parse, but works on functions (game descriptions)
    */
    return JSON.parse(gameList,function(key, value){
        if(typeof value!="string") return value;
        return (value.substring(0,8) == "function") ? eval('('+value+')'):value ;
    })
}

function createGame(listOfNames){
    
    //Get list of games and randomize them
    var gameList = randomize(convertBack(localStorage.getItem("rawGames")))

    // Map the name from listOfNames into gameList
    var finalGames= gameList.map((game)=>{

        //get random index value
        var randPlayerIndex=Math.floor(Math.random()*listOfNames.length)

        //get random player
        var randPlayer = listOfNames[randPlayerIndex]

        //Put random player in game
        return {...game,description:eval(game.description)(randPlayer)}

    })
    return finalGames
    
}
    
var prevQuan=1; //Need global variable for increase/decrease function
//When you click to add / remove players
document.getElementById("Quan").addEventListener("click",function(event){ //when someone clicks the arrows
    
    var quan=document.names.quantity.value; //See how many there already are

    var table = document.getElementById("nameTable")

    if(quan>prevQuan){// if goes up
        var newRow=table.insertRow(quan-1);
        newRow.innerHTML='<input name="player1" type="text" placeholder="Nick Carraway"></input>'
    }

    if(quan<prevQuan){//if goes down:
        newRow=table.deleteRow(quan-1)
    }
    prevQuan=quan; //update global variable for # of players

})

//When you click the "Play" button
document.getElementById("play").addEventListener("click", async function(event){
    event.preventDefault(); //prevents submission

    //get names and randomize them
    var nameList=randomize(getNames());

    //put names into games
    const finalGames = await createGame(nameList)
    console.log(finalGames)

    //save games in local storage
    localStorage.setItem("finalGames",JSON.stringify(finalGames))  //need to stringify them

    //Go to new page
    window.location ="Game.html"

})
