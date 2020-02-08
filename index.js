let readlineSync = require('readline-sync');
let score = 0
let totalScore = 0

const userName = readlineSync.question('Hi, what is your name? ');


const userInput = readlineSync.question(`Hello ${userName} , it is nice to meet you. Would you like to play a game? (y/n)`);
if (userInput === 'y'){   
    console.log("Lets play")
} else {
    console.log(userName + ' thank you for your time.')
return
}

console.log(userName + ' , Feburary is Black History Month. Discover some obscure facts about our African American Heroes.' )
readlineSync.keyIn("Press any key to continue...")


console.log('The Arts: Growing up with a white Jewish mother and an African - American father')
console.log('who wrote Devil in a Blue Dress,')
console.log('A Red Death, White Butterfly and Black Betty?')
let answers = ['Walter Mosley', 'Maya Angelou', 'W. E. B. Du Bois'];
index = readlineSync.keyInSelect(answers)
if (answers[index] === "Walter Mosley") {
    score = 20
    totalScore = totalScore + 20
    console.log("You got it right! You get " + score + " points.")
}
else if (answers[index] === "Maya Angelou") {

    console.log("Sorry wrong answer, you get " + score + " points.")
}
else {answers[index] === "W. E. B Du Bois"
    console.log("Sorry wrong answer, you get " + score + " points.")
}
console.log('After round one you have ' + score + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('The Arts: What is the name of the Harlem Club where many famous African American entertainers began their careers? ')
let answersTwo = ['Savoy Ballroom', 'The Cotton Club', 'Radium Club'];
index = readlineSync.keyInSelect(answersTwo)
if (answersTwo[index] === "Savoy Ballroom") {
    scoreTwo = 0  
    console.log("Sorry wrong answer you get " + scoreTwo + " points.")
}
else if (answersTwo[index] === "The Cotton Club") {
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
else {answersTwo[index] === "Radium"
scoreTwo = 0
    console.log("Sorry wrong answer, you get " + scoreTwo + " points.")
}
console.log('After round two you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('Business: What is Wally Amos famous for? ')
let answersThree = ['Peanuts', 'Chocolate Chip Cookies', 'Pop Tarts'];
index = readlineSync.keyInSelect(answersThree)
if (answersThree[index] === "Peanuts") {
    scoreThree = 0  
    console.log("Sorry wrong answer you get " + scoreThree + " points.")
}
else if (answersThree[index] === "Chocolate Chip Cookies") {
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
else {answersThree[index] === "Pop Tarts"
scoreThree = 0
    console.log("Sorry wrong answer, you get " + scoreThree + " points.")
}
console.log('After round three you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('Business: Who was the first African American to appear on the cover of Vogue magazine? ')
let answersFour = ['Tyra Banks', 'Vanessa Williams', 'Beverley Johnson'];
index = readlineSync.keyInSelect(answersFour)
if (answersFour[index] === "Tyra Banks") {
    scoreFour = 0  
    console.log("Sorry wrong answer you get " + scoreFour + " points.")
}
else if (answersFour[index] === "Vanessa Williams") {
    scoreFour = 0
    console.log("Sorry wrong answer you get " + scoreFour + " points.")
}
else {answersFour[index] === "Beverley Johnsson"
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
    console.log('After round four you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('Entertainment: What is the longest, continuously running, first-run syndicated television program until 2016? ')
let answersFive = ['Soul Train', 'Martin', 'Family Matters'];
index = readlineSync.keyInSelect(answersFive)
if (answersFive[index] === "Soul Train") {
score = 20  
totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
else if (answersFive[index] === "Martin") {
scoreFive = 0
    console.log("Sorry wrong answer you get " + scoreFive + " points.")
    }
else {answersFive[index] === "Family Matters"
scoreFive = 0
    console.log("You got it right! You get " + scoreFive + " points.")
    }
    console.log('After round five you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('Entertainment: What actor and stand up comedian warned others of the dangers of drug abuse after his own near death experience? ')
let answersSix = ['Eddie Murphy', 'Richard Pryor', 'Redd Foxx'];
index = readlineSync.keyInSelect(answersSix)
    if (answersSix[index] === "Eddie Murphy") {
    scoreSix = 0 
    

        console.log("Sorry wrong answer you get " + scoreSix + " points.")
    }
    else if (answersSix[index] === "Richard Pryor") {
    score = 20
    totalScore = totalScore + 20
        console.log("You got it right! You get " + score + " points.")
        }
    else {answersSix[index] === "Redd Foxx"
    scoreSix = 0
        console.log("Sorry wrong answer you get " + scoreSix + " points.")
        }
        console.log('After round six you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('Entertainment: What famous singer played guitar for Little Richard before starting his solo career? ')
let answersSeven = ['James Brown', 'Jimi Hendrix', 'B. B. King'];
index = readlineSync.keyInSelect(answersSeven)
    if (answersSeven[index] === "James Brown") {
    scoreSeven = 0  
    console.log("Sorry wrong answer you get " + scoreSeven + " points.")
}
    else if (answersSeven[index] === "Jimi Hendrix") {
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
    else {answersSeven[index] === "B. B. King"
    scoreSeven = 0
    console.log("Sorry wrong answer you get " + scoreSeven + " points.")
}
    console.log('After round seven you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('History: In what state did Nat Turner lead a slave revolt that killed fifthy - five white people? ')
let answersEight = ['Georgia', 'Alabama', 'Virginia'];
index = readlineSync.keyInSelect(answersEight)
    if (answersEight[index] === "Georgia") {
    scoreEight = 0  
    console.log("Sorry wrong answer you get " + scoreEight + " points.")
}
    else if (answersEight[index] === "Alabama") {
    scoreEight = 0
    console.log("Sorry wrong answer " + scoreEight + " points.")
}
    else {answersEight[index] === "Virginia"
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points. ")
}
    console.log('After round eight you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('History: Between 1915 and the mid - 1920s approximately how many blacks left the rural South to urban areas of thee North and the West as part of The') 
console.log('Great Migration? ')
let answersNine= ['Two Milllion', 'One Million', 'One Hundred Thousand'];
index = readlineSync.keyInSelect(answersNine)
    if (answersNine[index] === "Two Million") {
    scoreNine = 0  
    console.log("Sorry wrong answer you get " + scoreNine + " points.")
}
    else if (answersNine[index] === "One Million") {
    score = 20
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
} else
    {answersNine[index] === "One Hundred Thousand"
    scoreNine = 0
    console.log("Sorry wrong answer you get " + scoreNine + " points.")
}
    console.log('After round nine you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()



console.log('History: Enacted in 1865 and 1866 and restricted freed slaves from renting or purchasing property, what laws limited the movement of the freed slaves? ')
let answersTen = ['Black Codes', 'Jim Crow Laws', 'Labor Contracts'];
index = readlineSync.keyInSelect(answersTen)
    if (answersTen[index] === "Black Codes") {
    score = 20  
    totalScore = totalScore + 20

    console.log("You got it right! You get " + score + " points.")
}
    else if (answersTen[index] === "Jim Crow Laws") {
    scoreTen = 0
    console.log("Sorry wrong answer you get " + scoreTen + " points.")
}else
    {answersTen[index] === "Labor Contracts"
    scoreTen = 0
    console.log("Sorry wrong answer you get " + scoreTen + " points.")
}
    console.log('After round ten you have ' + totalScore + ' points')
readlineSync.keyIn("Press any key to continue...")
console.clear()
if (totalScore > 160) {
    console.log(`${userName} your total score is: ${totalScore}. You did great!`)
} else if (60 < totalScore < 160 ){
    console.log(`${userName} your total score is: ${totalScore}, You need to learn some more!`)
} else {
    console.log(`${userName} your total score is: ${totalScore}, Stay in school`)
}