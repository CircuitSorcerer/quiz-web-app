var timerEl = document.querySelector(".timer");
var headerEl = document.querySelector("header");
var mainEl = document.querySelector("main")


// Timer function
var secondsLeft = 60;
timerEl.innerHTML = secondsLeft + " secs";

function timer() {
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEl.textContent = secondsLeft + " secs";
        } else {
            clearInterval();
        }
        

    }, 1000);
}

timer()

// Game Functions

const questions = [
    q1 = {"question":"Which of the keyword is used to define the variable in the javascript?", 1:"var",2:"let",3:"Both A & B", 4:"None of the above", correct: 3},
    q2 = {},
    q3 = {},
    q4 = {}
]

var gameEl = document.createElement("div");
var obj = 0

function gameDisplay() {
    
    var questionEl = document.createElement("h3");
    
    questionEl.textContent = questions[obj].question;
    mainEl.appendChild(gameEl);
    gameEl.appendChild(questionEl)

    for (let i=0; i<4; i++) {
        window[ "buttonEl" + i ] = document.createElement("button");
        let selection = questions[obj][i+1];
        console.log(selection);
        window[ "buttonEl" + i ].textContent = selection;
        gameEl.appendChild(window[ "buttonEl" + i ]);
    }
    
}

gameEl.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    var answer = Object.keys(questions[obj]).find(key => questions[obj][key] === event.currentTarget.textContent);
    console.log(event.currentTarget.textContent)
    console.log(answer)
    let correctAns = questions[obj][correct]
    if (answer !== correctAns) {
        console.log("incorrect");
    } else {
        console.log("correct");
    }

})



gameDisplay();