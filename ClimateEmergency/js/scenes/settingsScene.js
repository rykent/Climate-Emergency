// go to work.
var settingsScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function settingsScene(){
        Phaser.Scene.call(this, { key: 'settingsScene'});
    },

    preload: function ()
    {
        this.load.image('bg_2', 'assets/Climatebackground.png');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});

    },

    create: function ()
    {
        this.background = this.add.sprite(-200,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);
    },

    update: function (time, delta) {
    }
});