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


        this.info = this.add.sprite(320,150, 'info');
        this.info.visible = false;
        
        this.again = this.add.sprite(200, 300, 'again');
        this.again.visible = false;
        
        this.menu = this.add.sprite(450, 300, 'menu');
        this.menu.visible = false;
        
        this.again.on('pointerdown', function(pointer){
            win = false;
            timeLeft = 30;
            switch (dif) {
                case 1:
                    timeAtStart = 35;
                    winAmount = 30;
                    break;
                case 2:
                    timeAtStart = 40;
                    winAmount = 45;
                    break;
                case 3:
                    timeAtStart = 35;
                    winAmount = 60;
                    break;
            }
            isInfo = false;
            isIntro = false;
            trashPickedUp = 0;
            trashArray = [];
            start = true;
            this.scene.start('pickupScene');
        }, this);

        this.menu.on('pointerdown', function(pointer){
            switch (dif) {
                case 1:
                    timeAtStart = 35;
                    winAmount = 30;
                    break;
                case 2:
                    timeAtStart = 40;
                    winAmount = 45;
                    break;
                case 3:
                    timeAtStart = 35;
                    winAmount = 60;
                    break;
            }
            isInfo = false;
            isIntro = true;
            start = true;
            trashArray = [];
            timeLeft = 30;
            trashPickedUp = 0;
            this.scene.start('menuScene');
        }, this);
        
        this.input.on('pointerdown', function(pointer) {
            this.winlose.visible = false;
            this.menu.setInteractive();
            this.again.setInteractive();
            this.info.visible = true;
            this.again.visible = true;
            this.menu.visible = true;
        }, this);
    },

    update: function ()
    {
    }
});