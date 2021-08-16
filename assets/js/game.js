var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {
    // If player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log (
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        // Check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
        } else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log (
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
    // If player chooses to skip
        else if (promptFight === "skip" || promptFight === "SKIP") {
          // Confirm player wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

          //If yes (true), leave fight
          if (confirmSkip) {
              window.alert(playerName + " has decided to skip this fight. Goodbye!");
              // Subtract money from playerMoney for skipping
              playerMoney = playerMoney - 2;
          }
          // if no (false), ask question again by running fight() again
          else {
              fight();
          }
        }
        else {
          window.alert ("You need to choose a valid option. Try again!");
        }
};

for (var i = 0; i <enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log (i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

// console.log(playerName,playerAttack,playerHealth);

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all enemy robots

for(var i = 0; i <enemyNames.length; i++) {
    fight(enemyNames[i]);
}
