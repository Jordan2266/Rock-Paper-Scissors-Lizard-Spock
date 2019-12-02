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

<button type="button" onclick="myFunction">Start</button>

<p id="demo"></p>

<body>
<script src="https://raw.githubusercontent.com/Jordan2266/Rock-Paper-Scissors-Lizard-Spock/master/game.js"></script>
</body>

<script>
function myFunction(start) {
  var input = prompt("Please choose (1) Rock, (2) Paper, (3) Scissors, (4) Lizard, or (5) Spock:");
  if (input != null) {
    document.getElementById("demo").innerHTML =
    alert("You have chosen " + input);
  }
}  
</script>

