//Name Robot
// var playerInfo.name = window.prompt("What is your robot's name?");
// window.alert(" Enter " + ", " + playerInfo.name);
var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);

        return value;
    };
// // Alert players that they are starting the round
// window.alert("Welcome to Fighter Robots!");

var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.Health > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or QUIT this battle? Enter "FIGHT" or "QUIT" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "quit" || promptFight === "QUIT") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to quit this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
      }
      
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);


  
      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      enemy.health = Math.max(0, enemy.health - damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
  
      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemy.attack variable
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      
      console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
      );
  
      // check player's health
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
      }
    } // end of while loop
}; // end of fight function
  

// function to start a new game
var startGame = function() {
    // reset player stats
    playerInfo.reset();
   

    // This creates a function named "fight"
for (var i = 0; i < enemyInfo.length; i++) {


    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {

        window.alert("Welcome to Fighter Robots! ROUND " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyObj = enemyInfo[i];
    
    // set health for picked enemy
    pickedEnemyObj.health = randomNumber(40, 60);

    // pass the pickedEnemyObj object variable's value into the fight function, where it will assume the value of the enemy parameter
    fight(pickedEnemyObj);


    // if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

    // ask if player wants to use the store before next round
    var storeConfirm = window.confirm("Fight is over, visit the store before the next round?");

    // if yes, take them to the store() function
    if (storeConfirm) {

        shop();
    }
}
    // // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    // window.alert(" ROUND " + ( i + 1 ) );
    // window.alert(" FIGHT! " );
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

if (playerInfo.health > 0) {
    window.alert("Great job, you survived the game! Take a look at your score " + playerInfo.money + '.');
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

    break;
    case "UPGRADE":
    case "upgrade": 
        playerInfo.upgradeAttack();
        
    
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

//enemy info
var enemyInfo = [
    {
        name: "Meta Lord",
        attack: randomNumber(10, 14)    
    },

    {
        name: "Hunter Cat",
        attack: randomNumber(10, 14)
    },

    {
        name: "War Rocket",
        attack: randomNumber(10, 14)

    }


];

var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,

    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refill player's health by 20 for 7 dollars.");
      
        this.health += 20;
        this.money -= 7;
    
    }
    else {
        window.alert("You don't have enough money!");
    }
  
},

upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
        this.attack += 6;
        this.money -= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
  }
};

// Robot enemy health
console.log(enemyInfo);
console.log(enemyInfo.length);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);
// // execute function
// fight();

// start the game when the page loads
startGame();