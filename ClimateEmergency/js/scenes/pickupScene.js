// go to work.
var pickupScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function pickupScene(){
        Phaser.Scene.call(this, { key: 'pickupScene'});
    },

    placeTrash: function () {
        for (var i = 0; i < 125; i++) {
            var random =  Math.floor(Math.random() * 4) + 1;
            /*1 = trash, 
            2 = inactive/nothing there  (player can only pickup active objects)
            3 = picked up
            4 = salacious crumb
            */

            switch (random) {
                case 1:
                case 2:// Case 1 & 2 are for trash
                    trashArray.push(this.add.sprite((i * 40) - 2000, 300, 'trash'));
                    trashArray[i].setScale(0.1);
                    trashArray[i].state = 1
                    break;
                case 3: // Salacious Crumb
                    trashArray.push(this.add.sprite((i * 40) - 2000, 300, 'crumb'));
                    trashArray[i].setScale(0.1);
                    trashArray[i].state = 4;
                    break;
                case 4:
                    trashArray.push(this.add.sprite((i * 40) - 2000, 300, 'trash'));
                    trashArray[i].setScale(0.1);
                    trashArray[i].state = 2; //inactive
                    trashArray[i].visible = false;
                    break;
            }
        }
    },

    preload: function ()
    {


    },

    create: function ()
    {

        this.background = this.add.sprite(-2000,0, 'bg_2');
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

        this.smile = this.add.sprite(320,280, 'smile');
        this.smile.setScale(2);
        
        this.player = this.add.sprite(320, 280, 'player');
        this.player.setScale(0.8);
        //this.player.visible = false;
        this.player.anims.play('walk');
       

        /*this.red = this.add.sprite(320, 280, 'player1red');
        this.red.setScale(0.8);
        this.red.visible = false;*/


        this.cursors = this.input.keyboard.createCursorKeys();

        pickupKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        hiddenKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);

    },

    update: function (time, delta) {

       if(hiddenKey.isDown) {
       
           this.player = this.add.sprite('player');
           
       }

       if(this.cursors.up.isDown) {

        this.player.setTexture('red');

        }

        if(this.cursors.right.isDown) {
            this.player.anims.resume();
            this.player.flipX = false;
            if (this.player.x > -1800) {
                this.background.x -= 4;
            }
            for (var i = 0; i < 125; i++) {
                trashArray[i].x -= 4;
            }
        } else if (this.cursors.left.isDown) {
            this.player.anims.resume();
            this.player.flipX = true;
            if (this.player.x > -1800) {
                this.background.x += 4;
            }
            for (var i = 0; i < 125; i++) {
                trashArray[i].x += 4;
            }
        } else {
            this.player.anims.pause(this.player.anims.currentAnim.frames[1]);

        }

        if (pickupKey.isDown) {
             for (var i = 0; i < 125; i++) {
                 // check if there is a trash piece at the same spot as the player
                 if (this.player.x == trashArray[i].x) {
                     if (trashArray[i].state == 1) {
                        trashArray[i].visible = false;
                        trashArray[i].state = 3; //picked up
                        trashPickedUp++;
                     } else if (trashArray[i].state == 4) {
                        var laugh = new Audio('../ClimateEmergency/assets/laugh.mp3');
                        laugh.play();
                        timeAtStart -= 3;
                        trashArray[i].state = 3;
                        trashArray[i].visible = false;
                     }
                 }
             }
        }

        if (timeLeft <= 0) {
            //Game Finished
            if (trashPickedUp >= winAmount) {
                //win
                win = true;
            }
            this.scene.start('infoScene');
        }

    }
});
