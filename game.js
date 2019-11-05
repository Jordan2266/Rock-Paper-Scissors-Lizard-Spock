<script src="README.md" /script> 

var R = 1
var P = 2
var S = 3
var L = 4
var SPK = 5

user_choice = input("Please choose (1) Rock, (2) Paper, (3) Scissors, (4) Lizard, or (5) Spock: ").upper()

#Let the computer make a choice
#1 = Rock
#2 = Paper
#3 = Scissors
#4 = Lizard
#5 = Spock
random_number = random.randint(1,5)

#Convert random number to R, P, S, L or SPK for Rock, Paper, Scissors, Lizard, and Spock
if random_number == 1:
	computer_choice = "R"

elif random_number == 2:
	computer_choice = "P"

elif random_number == 3:
	computer_choice = "S"

elif random_number == 4:
  computer_choice = "L"

elif random_number == 5:
  computer_choice = "SPK"

#User wins
#Computer: R    User: P
#Computer: P    User: S
#Computer: S    User: R
#Computer: L    User: R
#Computer: L    User: S
#Computer: SPK  User: L
#Computer: P    User: L
#Computer: SPK  User: P
#Computer: R    User: SPK
#Computer: S    User: SPK

if (computer_choice == "R" and user_choice == "P") or \
	(computer_choice == "P" and user_choice == "S") or \
	(computer_choice == "S" and user_choice == "R") or \
	(computer_choice == "L" and user_choice == "R") or \
	(computer_choice == "L" and user_choice == "S") or \
	(computer_choice == "SPK" and user_choice == "L") or \
	(computer_choice == "P" and user_choice == "L") or \
	(computer_choice == "SPK" and user_choice == "P") or \
	(computer_choice == "R" and user_choice == "SPK") or \
	(computer_choice == "S" and user_choice == "SPK") or \
	print("You win!")

#Computer wins
#Computer: R    User: S
#Computer: P    User: R
#Computer: S    User: P
#Computer: R    User: L
#Computer: P    User: SPK
#Computer: S    User: L
#Computer: L    User: SPK
#Computer: L    User: P
#Computer: SPK  User: R
#Computer: SPK  User: S

elif (computer_choice == "R" and user_choice == "S") or \
	(computer_choice == "P" and user_choice == "R") or \
	(computer_choice == "S" and user_choice == "P") or \
        (computer_choice == "R" and user_choice == "L") or \
        (computer_choice == "P" and user_choice == "SPK") or \
        (computer_choice == "S" and user_choice == "L") or \
        (computer_choice == "L" and user_choice == "SPK") or \
        (computer_choice == "L" and user_choice == "P") or \
        (computer_choice == "SPK" and user_choice == "R") or \
        (computer_choice == "SPK" and user_choice == "S"):
	print("You lose!")

#Tie
#Computer: R    User: R
#Computer: P    User: P
#Computer: S    User: S
#Computer: L    User: L
#Computer: SPK  User: SPK

elif computer_choice == user_choice:
	print("Tie!")

