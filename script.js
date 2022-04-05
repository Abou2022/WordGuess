//generate random word to guess
    //create a collection of words
    var wordPara = document.querySelector("#wordPara");
var words =["manatee","Zebra", "kiwi", "elephant"]
//show user "_" for each letter 
var chosenWord = words[Math.floor(Math.random()*words.length)]
chosenWord = chosenWord.split("")
console.log("chosenword: ", chosenWord)
var userGuessArray =[];
for (let i = 0; i < chosenWord.length; i++) {
    userGuessArray.push("_")    
}
console.log("userGuess:", userGuessArray)
wordPara.textContent = userGuessArray.join(" ");
//listen for keypress
document.addEventListener("keyup", function(event){
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
}
})

//if won, add win
//when user guess matches word, they won