// go to work.
var menuScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function menuScene(){
        Phaser.Scene.call(this, { key: 'menuScene'});
    },

    preload: function ()
    {
        this.load.image('bg_2', 'assets/Climatebackground.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('settings', 'assets/settings.png');
        this.load.image('titlepage', 'assets/titlepage.png');
    },

    create: function ()
    {

        this.background = this.add.sprite(-200,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        this.title = this.add.sprite(320, 100, 'titlepage');
        this.title.setScale(1.1);

        this.playButton = this.add.sprite(320, 200, 'play');
        this.playButton.setInteractive();
        this.playButton.on('pointerdown', function(pointer){
            //this.playButton.disableInteractive();
            isIntro = false;
            this.scene.start('pickupScene');
        },this);

        this.settingsButton = this.add.sprite(320, 275, 'settings');
        this.settingsButton.setInteractive();
        this.settingsButton.on('pointerdown', function(pointer){
            //this.settingsButton.disableInteractive();
            this.scene.start('settingsScene');
        }, this);
    },
});