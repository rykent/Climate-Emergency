var titleScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'titleScene'});
    },

    preload: function ()
    {
        this.load.image('title', 'assets/title.png');
    },

    create: function ()
    {
        console.log("introScene")
        this.intro = this.add.sprite(0,0, 'title');
        this.intro.setOrigin(0,0);
        this.intro.setScale(0.7);
        //make the intro interactive
        this.intro.setInteractive();

        this.intro.on('pointerdown', function (pointer) {
            this.intro.visible = false;
            this.intro.disableInteractive();
            console.log("keydown on intro");
            //isIntro = false;
            this.scene.start('menuScene');
        }, this);
    }
});