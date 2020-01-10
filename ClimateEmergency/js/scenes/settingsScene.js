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
        this.load.image('easy', 'assets/easy.png');
        this.load.image('normal', 'assets/normal.png');
        this.load.image('hard', 'assets/hard.png');
    },

    create: function ()
    {
        this.background = this.add.sprite(-200,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.easy = this.add.sprite(150, 200, 'easy');
        this.easy.setInteractive();
        this.easy.setScale(0.7);
        this.easy.on('pointerdown', function(pointer){
            timeAtStart = 35;
            winAmount = 30;
            this.scene.start('menuScene');
        }, this);

        this.normal = this.add.sprite(325, 200, 'normal');
        this.normal.setInteractive();
        this.normal.setScale(0.7);
        this.normal.on('pointerdown', function(pointer){
            timeAtStart = 40;
            winAmount = 45;
            this.scene.start('menuScene');
        }, this);

        this.hard = this.add.sprite(500, 200, 'hard');
        this.hard.setInteractive();
        this.hard.setScale(0.7);
        this.hard.on('pointerdown', function(pointer){
            timeAtStart = 35;
            winAmount = 60;
            this.scene.start('menuScene');
        }, this);
    },
});