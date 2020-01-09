/* Climate Emergency - A game about the effects of trash and climate change in our world.*/

let config = {
    type: Phaser.AUTO, 
    width: 640,
    height: 360,
    scene: [titleScene, menuScene, pickupScene]
};

let game = new Phaser.Game(config);