//Name Robot
var playerName = window.prompt("What is your robot's name?");
window.alert(" Enter " + ", " + playerName);

var playerHealth = 100;
var playerAttack = 10;

// Log multiple values at once
console.log(playerName, playerAttack, playerHealth);

// Robot enemy health
var enemyName = "Metal";
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 20;

// This creates a function named "fight"
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Fighter Robots!");

    // Fight or flight
    var promptFight = window.prompt("Would you like to FIGHT or QUIT this battle? Enter 'FIGHT' or 'QUIT' to choose. ");
    console.log(promptFight);

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "quit" || promptFight === "QUIT") {
        // confirm player wants to quit
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        // If player says yes (true), Leave the fight and
        if (confirmSkip) {
            window.alert(playerName + " has decided to quit this fight. Goodbye!");

            // Subtract money from playerMoney for quitting
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        window.alert(playerName + " has chosen to quit the fight!");
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
// execute function
fight();