/* Climate Emergency - A game about the effects of trash and climate change in our world.*/

var trashArray = [];
var trashPickedUp = 0;
var isIntro = true;
var timeLeft = 30;
var start = true;

let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 360,
    scene: [titleScene, menuScene, pickupScene, uiScene]
};

let game = new Phaser.Game(config);