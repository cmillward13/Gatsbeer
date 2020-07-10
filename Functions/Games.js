//Just a file containing every game object. Replaces the .txt file

var tech = [
{
    Dude: "Steve",
    Company: (someTing)=>`Apple ${someTing}`
},
{
    Dude: "Bill",
    Company: "Microsoft"
}
]


var games=[  
    /******** Mini-Games ********/
    {
        title:"Fingers",
        description:(player_name)=>`Pour a community cup. Each player places one finger on the rim of the cup.  ${player_name} Begins.` //finish 
    },
    {   title:"Never Have I ever",
        description:(player_name)=>` ${player_name} begins.` //Add Gatsby Quote/ theme
    },
    {
        title:"Most Likely To",
        description:(player_name)=>`State a "Most likely to...". Then count to three and at once, everyone points to the person they think is the most likely to do/ be that thing. Whoever has the most fingers pointed at them must drink. Repeat this in a clockwise fashion until someone loses (or wins?) 3 times. ${player_name} starts.`
    },
    {
        title:"I've Never Seen Such Beautiful Shirts", //double-check quote
        description:(player_name)=>`What is the poorest excuse you have ever given someone? Drink if yours is the worst. ${player_name}, you start.`
    },
    {
        title:"You Crazy Cats And Your Lingo", //Get better title
        description:(player_name)=>`Go in a circle naming as many 1920s terms as you can. Take a drink of that jag juice if you blunder. ${player_name} begins. `
    },
    /****************************/

    /****************************/
    {
        title:"He Had One Of Those Smiles...",
        description:()=>`Everybody vote to determine who has the best smile. That person must drink twice; No vanity comes without consequence.`
    },
    {
        title:"I Hope She'll Be A Fool", //double-check quote
        description:()=>``
    },{
        title:"The Green Light Accross The Bay", //double-check quote
        description:()=>`Drink 3 times if you have ever struggled to make it home.`
    },
    /****************************/

    /*** Drink if You Have... ***/
    {
        title:"Meet Me At The Apartment", //Verify quote
        description:()=>`Drink twice if you have ever cheated on or have been cheated on by an S/O.`
    },
    {
        title:"Not One Of Those Petting Parties", //Better title
        description:()=>`Drink once for every person in this game that you have hooked up with.`
    },
    {
        title:"I'm looking for Mr. Gatsby",
        description:()=>`Drink if you have ever shown up to a party uninvited by the host.`
    },
    {
        title:"You Can't Repeat The Past",
        description:()=>`Take a BIG drink if you've ever hooked up with an ex.`
    },
    {
        title:"But I Always Come Back",
        description:()=>`"Once in a while I go off on a spree and make a fool of myself, but I always come back..." Take a drink if you've ever puked & rallied. Fucken Beauty.`
    },
    
    /****************************/

    /********* Multiples ********/
    {   title:"Mr. Carraway's Confessions", //Check to see if there's a reference from his psychologist
        description:(player_name)=>`${player_name}, ask the person accross from you a question of your choosing. They may either answer the question, or take a shot.`
    },
    {   title:"Mr. Carraway's Confessions", //Check to see if there's a reference from his psychologist
        description:(player_name)=>`${player_name}, ask the person accross from you a question of your choosing. They may either answer the question, or take a shot.`
    },
    {   title:"Mr. Carraway's Confessions", //Check to see if there's a reference from his psychologist
        description:(player_name)=>`${player_name}, ask the person accross from you a question of your choosing. They may either answer the question, or take a shot.`
    },
    {   title:"Mr. Carraway's Confessions", //Check to see if there's a reference from his psychologist
        description:(player_name)=>`${player_name}, ask the person accross from you a question of your choosing. They may either answer the question, or take a shot.`
    }
]

function convert(object){
    return JSON.stringify(object, function(key,value){
        return (typeof value === "function") ? value.toString () : value;
    })

}

localStorage.clear()
localStorage.setItem("rawGames",convert(games))