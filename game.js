	
var 1 = "rock" 
var 2 = "paper"
var 3 = "scissors"
var 4 = "lizard"
var 5 = "spock"


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

	
	
