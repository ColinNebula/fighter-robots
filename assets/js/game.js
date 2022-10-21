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
var enemyNames = ['Meta Lord', ' Hunter Cat', ' War Rocket'];
var enemyHealth = 50;
var enemyAttack = 12;

// // Log multiple values at once
// console.log(playerName, playerAttack, playerHealth);

// Robot enemy health
console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or QUIT this battle? Enter "FIGHT" or "QUIT" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "quit" || promptFight === "QUIT") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to quit this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("player Money", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = Math.max(0, enemyHealth - playerAttack);
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = Math.max(0, playerMoney + 20);
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      playerHealth = Math.max(0, playerHealth - damage);
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    } // end of while loop
}; // end of fight function
  

// function to start a new game
var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // This creates a function named "fight"
for (var i = 0; i < enemyNames.length; i++) {


    // if player is still alive, keep fighting
    if (playerHealth > 0) {

        window.alert("Welcome! " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };

    // reset enemyHealth before starting new fight
    // enemyHealth = randomNumber(40, 60);
    // generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {

    // ask if player wants to use the store before next round
    var storeConfirm = window.confirm("Fight is over, visit the store before the next round?");

    // if yes, take them to the store() function
    if (storeConfirm) {

        shop();
    }
}
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert(" ROUND " + ( i + 1 ) );
    window.alert(" FIGHT! " );
}
    else {
        window.alert('You have lost your robot in battle! GAME OVER');

        break;
    }
}

// after loop ends, we are either out of player.health or enemies to fight, so run the endGame function
endGame();
};
// function to end the entire game
var endGame = function() {    
  window.alert("The game has ended. Here is how you performed!");

if (playerHealth > 0) {
    window.alert("Great job, you survived the game! Take a look at your score " + playerMoney + '.');
}
else {
    window.alert("You Have lost your robot in battle!");
}

// play again in the
var playAgainConfirm = window.confirm('would you like to play again?');

if (playAgainConfirm) {
    startGame();
}
else {
    window.alert("Thank you for playing Fighter Robots! See you soon!");
  }
};

// go to shop between battles function
var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", or "UPGRADE", or "LEAVE" to progress'
        );
    
// use switch case to carry out action
switch (shopOptionPrompt) {
    case 'REFILL': // new case
    case 'refill': 

    if (playerMoney >= 7) {

        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney -7;
    }
    else {

        window.alert("you do not have enough money!");
    }

        break;

        case 'UPGRADE': // new case
        case 'upgrade':
            if (playerMoney >= 7) {
            
                window.alert("Upgrading player's attack by 6 for 7 dollars");
             
            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
        }
        else {
            
            window.alert("You don't have enough money!");
        }
            
        break;

        case 'LEAVE': // new case
        case 'leave':

            window.alert("leaving the store.");

        break;

        default:

          window.alert("You did not pick a valid option. Try again.");

          shop();

          break;
}
};
// // execute function
// fight();

// start the game when the page loads
startGame();