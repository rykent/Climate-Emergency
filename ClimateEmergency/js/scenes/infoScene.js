var infoScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function infoScene(){
        Phaser.Scene.call(this, { key: 'infoScene'});
    },

    preload: function ()
    {
        
    },

    create: function ()
    {
        isInfo = true;
        if (win) {
            this.background = this.add.sprite(-2000,0, 'bg_2')
            this.winlose = this.add.sprite(300, 200, 'win');
        } else {
            this.background = this.add.sprite(-2000,0, 'fire');
            this.winlose = this.add.sprite(300, 200, 'lose');
        }
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);


        this.info = this.add.sprite(300,200, 'info');
        this.info.visible = false;

        this.input.on('pointerdown', function(pointer) {
            this.winlose.visible = false;
            this.info.visible = true;
        }, this);
    },

    update: function ()
    {
    }
});