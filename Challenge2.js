console.log("Im running");

// functions

let playerRoll;
let avarage = 0;
let counter = 0;

//create a list

let RollsList = [];

// intervial for roll 


function Register()
{
    // get player input 

    playerRoll = document.getElementById("rollValue").value; 

}

function MyTimeOut()
{
  
       
        setTimeout(Roll, 1000 * playerRoll);

    
}



function Roll ()
{
    // 

    parseInt(playerRoll);

    // add to list 
    
    for(var i = 0; i < playerRoll; i ++)  
    {
        var a = Math.floor(Math.random() * 6 + 1); 
        RollsList.push(a);
        

    }

  
    
    
    DisplayRollList(); 

    // save to a list 
}

function DisplayRollList ()
{
    // 
    document.getElementById("DisplayList").innerHTML = RollsList;

    

    console.log(RollsList);
  

}

function AverageOf()
{
    // fine avarage 
    let sum = 0
    
    //find the sum 
    for(let i = 0; i < RollsList.length; i ++)
    {
        sum += RollsList[i];
    }

    // sum up the array 

    avarage = sum / RollsList.length; 

    // display 
    document.getElementById("avrageDisplay").innerHTML = avarage;

}
function Total ()
{
    // sum of the list
     let total = 0;

    for(let i = 0; i < RollsList.length; i ++)
    {
        total += RollsList[i];
    }

     document.getElementById("totoalDisplay").innerHTML = total;



    // display 
}
function ClearList ()
{
    // clear list 
    RollsList = [];

    document.getElementById("DisplayList").innerHTML ="";
    document.getElementById("avrageDisplay").innerHTML ="";
    document.getElementById("totoalDisplay").innerHTML = "";


    // 

}