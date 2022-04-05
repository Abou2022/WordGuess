//generate random word to guess
    //create a collection of words
    var wordPara = document.querySelector("#wordPara");
    var startBtn = document.querySelector(".goldBg");
    var timePara = document.querySelector("#timePara");
    var lossesSpan = document.querySelector("#lossesSpan")
    var winsSpan = document.querySelector("#winsSpan")
var words =["manatee","lion", "kiwi", "elephant"]
var chosenWord;
var isPlaying = false;
var userGuessArray =[];
var timer;
var timeLeft = 10;
var wins = localStorage.getItem("wins") || 0;
var losses = localStorage.getItem("losses")|| 0;
lossesSpan.textContent = losses;
winsSpan.textContent = wins;
//show user "_" for each letter 
function startGame(){
        if(isPlaying){
            return 
        }
        isPlaying=true
        userGuessArray =[];
        timeLeft = 10;
    chosenWord = words[Math.floor(Math.random()*words.length)]
    chosenWord = chosenWord.split("")
    console.log("chosenword: ", chosenWord)
    for (let i = 0; i < chosenWord.length; i++) {
        userGuessArray.push("_");
    }
    console.log("userGuess:", userGuessArray)
    wordPara.textContent = userGuessArray.join(" ");
    startTimer();
}
function startTimer(){
    timePara.textContent=timeLeft;
    timer = setInterval(function(){
        console.log(timeLeft);
        timeLeft--;
        timePara.textContent=timeLeft;
        if(timeLeft<=0){
            clearInterval(timer);
            console.log("LOST!")
            wordPara.textContent = `To Slow! the word was: ${chosenWord.join(" ")}`
            losses++
            localStorage.setItem("losses", losses)
            lossesSpan.textContent = losses; 
            isPlaying = false
        }
    },1000)
}
//listen for keypress
function checkWin(){
    if(userGuessArray.join("")===chosenWord.join("")){
        isPlaying = false;
        clearInterval(timer);
        return true
    } else{
        return false
    }
}
startBtn.addEventListener("click", startGame);
//if won, add win
//when user guess matches word, they won
document.addEventListener("keyup", function(event){
    if(!isPlaying){
        return;
    }
    var guessedLetter = event.key.toLowerCase();
    console.log("guessed:",guessedLetter)
    if(chosenWord.includes(guessedLetter)){
    //if pressed key is work update 
    for (let i = 0; i < chosenWord.length; i++) {
        if(chosenWord[i]===guessedLetter){
            userGuessArray[i]=guessedLetter
        }

    }
    console.log("letter is in word!!!")
    console.log("updated userGuess", userGuessArray)
    wordPara.textContent = userGuessArray.join(" ");
    if (checkWin()){
        console.log("WINNER!")
        wordPara.textContent = `WINNER! the word was: ${userGuessArray.join(" ")}`
        wins++
        localStorage.setItem("wins", wins)
        winsSpan.textContent = wins;
    }
}
});