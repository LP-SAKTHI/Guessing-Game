//declaration..

const randomNumber = Math.floor(Math.random()*50+1);

let chances = 3;
isWin = false;
//declaration..

//==================imports===================

const userValue =document.querySelector("#number");
const sumbitDiv = document.querySelector(".submit");
const resetDiv = document.querySelector(".reset");
const resultDiv = document.querySelector(".result");
const hisDiv = document.querySelector(".history");

//==================imports===================

//====main=====

function gg(){
    const user = userValue.value;
    //console.log(user);
    if(user>50|| user<1){
        result = "Guess the number between 1 and 50";
        resultDiv.innerHTML = `<h2>${result}</h2>`;
    }
    else if(chances && !isWin){
        if(user == randomNumber){
            result="🎉🎉YOU 🙂 WON!🎉🎉"  ;
            isWin = true;
        }
    
        else if(user < randomNumber){
            if(chances==1)
            {
                result=`Game Over!... the number is ${randomNumber}`;
                iswin=true;
            }
            else {
                result = "YOU TOO LOW 😢";
                isWin = false;
            }
            
        }
    
        else if(user > randomNumber){
            if(chances==1){
                result=`Game Over!... the number is ${randomNumber}`;
                iswin=true;
            }else{
                result = "YOU TOO HIGH 😢";
                isWin = false;
            }
        }
        chances--;
        hisDiv.innerHTML += `<h4>You guessed ${user}</h4>`;
        return resultDiv.innerHTML = `<h2>${result}</h2>`;
    
    }
}
function reset (){
    if(!chances || isWin){
        location.reload();
    }
    else if(chances || iswin){
        result="Guess a number";
        resultDiv.innerHTML = `<h2>${result}</h2>`;
    }
}

//====main=====
