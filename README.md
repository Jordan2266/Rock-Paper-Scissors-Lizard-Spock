# Rock Paper Scissors Lizard Spock

<p><b>Welcome to Rock Paper Scissors Lizard Spock! Here are the Rules:</b></p>
<ul>
<li>Rock beats Lizard and Scissors</li>
<li>Paper beats Rock and Spock</li>
<li>Scissors beats Paper and Lizard</li>
<li>Lizard beats Spock and Paper</li>
<li>Spock beats Scissors and Rock</li>  
</ul>

<p><b>You will play against 1 other player which will be controlled by the computer. The first player to reach a score of 10 will win!</b></p>

<p><b>Controls:</b></p>
<ul>
<li>Type 1 for Rock</li>
<li>Type 2 for Paper</li>
<li>Type 3 for Scissors</li>
<li>Type 4 for Lizard</li>
<li>Type 5 for Spock</li>  
</ul>

<button onclick="myFunction()">Start</button>

<p id="demo"></p>

<script>
function myFunction() {
  var userinput = prompt("Please enter a sign.");
  if (userinput != null) {
    document.getElementById("demo").innerHTML =
    alert("You have chosen " + userinput);
  if (userchoice == 1) {
        userchoice == "rock";
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
}
  }
}
</script>

