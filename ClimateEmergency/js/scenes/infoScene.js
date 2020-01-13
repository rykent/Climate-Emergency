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
        if (win) {
            this.background = this.add.sprite(-2000,0, 'bg_2')
        } else {
            this.background = this.add.sprite(-2000,0, 'fire');
        }
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

    },

    update: function ()
    {

    }
});