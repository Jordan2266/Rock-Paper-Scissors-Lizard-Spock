	
var 1 = "rock" 
var 2 = "paper"
var 3 = "scissors"
var 4 = "lizard"
var 5 = "spock"



#Let the computer make a choice
#1 = Rock
#2 = Paper
#3 = Scissors
#4 = Lizard
#5 = Spock

<button onclick="start()">Start</button>

<script>
function start() {
var user = prompt("Please choose (1) Rock, (2) Paper, (3) Scissors, (4) Lizard, or (5) Spock: ").upper()	
var computerChoice = Math.floor(Math.random() * 5) + 1;
if (computerChoice == 1) {
    computerChoice = "rock";
} else if (computerChoice == 2) {
    computerChoice = "paper";
} else if (computerChoice == 3) {
    computerChoice = "scissors";
} else if (computerChoice == 4) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}
</script>



//Rock
else if (choice1 === "rock") {
    if (choice2 === "scissors") {
        alert("Rock wins!");
    } else if (choice2 === "paper") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Rock wins!");
    } else {
        alert("Spock wins!");
    }
}

//Paper
else if (choice1 === "paper") {
    if (choice2 === "scissors") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Paper wins!");
    } else if (choice2 === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}

//Scissors
else if (choice1 === "scissors") {
    if (choice2 === "paper") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Rock wins!");
    } else if (choice2 === "lizard") {
        alert("Scissors wins!");
    } else {
        alert("Spock wins!");
    }
}

//Lizard
else if (choice1 === "lizard") {
    if (choice2 === "scissors") {
        alert("Scissors wins!");
    } else if (choice2 === "rock") {
        alert("Rock wins!");
    } else if (choice2 === "paper") {
        alert("Lizard wins!");
    } else {
        alert("Lizard wins!");
    }
}

//Spock
else if (choice1 === "spock") {
    if (choice2 === "scissors") {
        alert("Spock wins!");
    } else if (choice2 === "rock") {
        alert("Spock wins!");
    } else if (choice2 === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}
};
}
