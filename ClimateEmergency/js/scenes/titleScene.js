var titleScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function titleScene(){
        Phaser.Scene.call(this, { key: 'titleScene'});
    },

    preload: function ()
    {
        this.load.image('title', 'assets/title.png');
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