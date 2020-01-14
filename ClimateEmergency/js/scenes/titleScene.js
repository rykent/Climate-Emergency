var titleScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function titleScene(){
        Phaser.Scene.call(this, { key: 'titleScene'});
    },

    preload: function ()
    {
        //Preload anything
        this.load.image('title', 'assets/title.png');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});
        this.load.image('trash', 'assets/cigarette.png');
        this.load.image('play', 'assets/play.png');
        this.load.image('settings', 'assets/settings.png');
        this.load.image('titlepage', 'assets/titlepage.png');
        this.load.image('fire', 'assets/firebackground.png');
        this.load.image('bg_2', 'assets/Climatebackground.png');
        this.load.image('info', 'assets/info.png');
        this.load.image('win', 'assets/win.png');
        this.load.image('lose', 'assets/lose.png');
        this.load.image('crumb', 'assets/crumb.png');
        this.load.spritesheet('red', 'assets/player1red.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});
        this.load.image('again', 'assets/again.png');
        this.load.image('menu', 'assets/menu.png');
    },

    create: function ()
    {
        this.intro = this.add.sprite(0,0, 'title');
        this.intro.setOrigin(0,0);
        this.intro.setScale(0.8);
        //make the intro interactive
        this.intro.setInteractive();

        this.intro.on('pointerdown', function (pointer) {
            this.intro.visible = false;
            this.intro.disableInteractive();
            //isIntro = false;
            this.scene.start('menuScene');
        }, this);
    }
});