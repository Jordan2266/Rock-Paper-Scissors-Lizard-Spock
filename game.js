	
var 1 = "rock" 
var 2 = "paper"
var 3 = "scissors"
var 4 = "lizard"
var 5 = "spock"
var choice1 = null
var choice2 = null
var userchoice = null
var computerChoice = null


<script>
function start() {	
var userchoice = prompt("Please choose (1) Rock, (2) Paper, (3) Scissors, (4) Lizard, or (5) Spock: ").upper()
  if (person != null) {
    document.getElementById("demo").innerHTML =
if (userchoice == 1) {
        userchoice == "rock";
	set userchoice == choice1;
} else if (userchoice == 2) {
	userchoice == "paper";
	set userchoice == choice1;
} else if (userchoice == 3) {
        userchoice == "scissors";
	set userchoice == choice1;
} else if (userchoice == 4) {
        userchoice == "lizard";
	set userchoice == choice1;
} else if (userchoice == 5) {
        userchoice == "spock";
	set userchoice == choice1;
</script>
	
<script>
function start() {	
var computerChoice = Math.floor(Math.random() * 5) + 1
if (computerChoice == 1) {
    computerChoice = "rock";
	set computerChoice == choice2;
} else if (computerChoice == 2) {
    computerChoice = "paper";
	set computerChoice == choice2;
} else if (computerChoice == 3) {
    computerChoice = "scissors";
	set computerChoice == choice2;
} else if (computerChoice == 4) {
    computerChoice = "lizard";
	set computerChoice == choice2;
} else {
    computerChoice = "spock";
	set computerChoice == choice2;
}
</script>

	
//Rock
<scrpit>	
else if (choice1 == "rock") {
    if (choice2 == "scissors") {
        alert("Rock wins!");
    } else if (choice2 == "paper") {
        alert("Paper wins!");
    } else if (choice2 == "lizard") {
        alert("Rock wins!");
    } else {
        alert("Spock wins!");
    }
}
</script>
	
//Paper
<Script>	
else if (choice1 == "paper") {
    if (choice2 == "scissors") {
        alert("Scissors wins!");
    } else if (choice2 == "rock") {
        alert("Paper wins!");
    } else if (choice2 == "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}
</script>
	
//Scissors
<script>
else if (choice1 == "scissors") {
    if (choice2 == "paper") {
        alert("Scissors wins!");
    } else if (choice2 == "rock") {
        alert("Rock wins!");
    } else if (choice2 == "lizard") {
        alert("Scissors wins!");
    } else {
        alert("Spock wins!");
    }
}
</script>
	
//Lizard
<script>	
else if (choice1 == "lizard") {
    if (choice2 == "scissors") {
        alert("Scissors wins!");
    } else if (choice2 == "rock") {
        alert("Rock wins!");
    } else if (choice2 == "paper") {
        alert("Lizard wins!");
    } else {
        alert("Lizard wins!");
    }
}
</script>
	
//Spock
<script>	
else if (choice1 == "spock") {
    if (choice2 == "scissors") {
        alert("Spock wins!");
    } else if (choice2 == "rock") {
        alert("Spock wins!");
    } else if (choice2 == "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}
};
}
</script>

	
