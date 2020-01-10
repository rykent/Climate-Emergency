// go to work.
var pickupScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function pickupScene(){
        Phaser.Scene.call(this, { key: 'pickupScene'});
    },

    placeTrash: function () {
        for (var i = 0; i < 250; i++) {
            trashArray.push(this.add.sprite(i * 40, 300, 'trash'));
            trashArray[i].setScale(0.1);
            var random =  Math.floor(Math.random() * 2) + 1;
            trashArray[i].state = random; //1 = active, 2 = inactive  player can only pickup active objects
            if (random == 2) {
                trashArray[i].visible = false;
            }
        }
    },

    preload: function ()
    {
        this.load.image('bg_2', 'assets/Climatebackground.png');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});
        this.load.image('trash', 'assets/cigarette.png');

    },

    create: function ()
    {

        this.background = this.add.sprite(-200,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

        //Fill Trash array and place it
        this.placeTrash();

        var playerConfig = {
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3, first: 0}),
            repeat: -1,
            frameRate: 7
            
        };

        this.anims.create(playerConfig);


        this.player = this.add.sprite(320, 280, 'player');
        this.player.setScale(0.8);
        //this.player.visible = false;
        this.player.anims.play('walk');

        this.cursors = this.input.keyboard.createCursorKeys();

        pickupKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    },

    update: function (time, delta) {
        if(this.cursors.right.isDown) {
            this.player.anims.resume();
            this.player.flipX = false;
            this.background.x -= 4;
            for (var i = 0; i < 250; i++) {
                trashArray[i].x -= 4;
            }
        } else if (this.cursors.left.isDown) {
            this.player.anims.resume();
            this.player.flipX = true;
            this.background.x += 4;
            for (var i = 0; i < 250; i++) {
                trashArray[i].x += 4;
            }
        } else {
            this.player.anims.pause(this.player.anims.currentAnim.frames[1]);

        }

        if (pickupKey.isDown) {
             
        }

    }
});