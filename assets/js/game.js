//Name Robot
var playerName = window.prompt("What is your robot's name?");
window.alert(" Enter " + ", " + playerName);

// Alert players that they are starting the round
window.alert("Welcome to Fighter Robots!");

// Player stats
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

// Enemy stats and names
var enemyNames = ["Meta Lord", "Hamera", "War Rocket"];
var enemyHealth = 50;
var enemyAttack = 12;

// Log multiple values at once
console.log(playerName, playerAttack, playerHealth);

// Robot enemy health
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);


var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive     
    while (enemyHealth > 0 && enemyHealth > 0) {


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
                window.alert(enemyNames + " has died!");
                break;
            } else {
                window.alert(enemyNames + " still has " + enemyHealth + " health left.");
            }

            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while() loop if player is dead
                break;
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

        //    * Fight all enemy-robots
        for (var i = 0; i < enemyNames.length; i++) {
            console.log(enemyNames[i]);
            console.log(i);
            console.log(enemyNames[i] + " is at " + i + " index");
        }

        
    }
};
// This creates a function named "fight"
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth =50;
    fight(pickedEnemyName);
}
// execute function
fight();