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
            mainEl.style.display = "none";
        document.getElementById("container").appendChild(messageEl)
        messageEl.textContent = "YOU LOSE!"
        }
        

    }, 1000);
}

timer()

// Game Functions

const questions = [
    q1 = {"question":"Which of the keyword is used to define the variable in the javascript?", 1:"var",2:"let",3:"Both A & B", 4:"None of the above", "correct": 3},
    q2 = {"question":"How do we put Javascript inside HTML?", 1:"<js>",2:"<javascript>",3:"<scripting>", 4:"<script>", "correct": 4},
    q3 = {"question":"The 'let' and 'var' are known as:", 1:"Prototypes",2:"Declaration Statements",3:"Data Types", 4:"Keywords", "correct": 2},
    q4 = {"question":"Which one is not a comparison operator?", 1:"=",2:"<",3:">", 4:"!=", "correct": 1}
]

var gameEl = document.createElement("div");
var questionEl = document.createElement("h3");
var messageEl = document.createElement("h2")
var wrapperEl = document.getElementById("container")
var points = 0;
var obj = 0;


function questionSelector() {
    if (obj < questions.length) {
        obj += 1;
    } else {
        mainEl.style.display = "none";
        wrapperEl.appendChild(messageEl)
        messageEl.textContent = "YOU WIN!"
    }
    gameDisplay();
}

function gameDisplay() {
    
    
    
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

    var answer = Object.keys(questions[obj]).find(key => questions[obj][key] === event.target.textContent);
    console.log(questions[obj]["correct"]);
    console.log(answer);
    let correctAns = questions[obj]["correct"];
    if (answer != correctAns) {
        console.log("incorrect");
        secondsLeft -= 10;
        questionEl.remove();
        //buttonEl.remove();
        if (obj == questions.length-1) {
            mainEl.style.display = "none";
            wrapperEl.appendChild(messageEl)
            messageEl.textContent = "YOU LOSE!"
        } else {
            questionSelector();
        }
        
    } else {
        console.log("correct");
        questionEl.remove();
        //buttonEl.remove();
        questionSelector();
        points += 5;
        if (obj == questions.length-1) {
            mainEl.style.display = "none";
            wrapperEl.appendChild(messageEl)
            messageEl.textContent = "YOU WIN!"
        } else {
            questionSelector();
        }
    }

})


gameDisplay();
