/* Climate Emergency - A game about the effects of trash and climate change in our world.*/

var trashArray = [];
var trashPickedUp = 0;
var isIntro = true;
var isInfo = false;
var timeAtStart = 30;
var timeLeft = 30;
var start = true;
var winAmount = 30;
var win = false;

let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 360,
    scene: [titleScene, menuScene, pickupScene, settingsScene, uiScene, infoScene]
};

let game = new Phaser.Game(config);