// go to work.
var menuScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function introScene(){
        Phaser.Scene.call(this, { key: 'menuScene'});
    },

    preload: function ()
    {
        this.load.image('bg_2', 'assets/Climatebackground.png');
        this.load.spritesheet('player', 'assets/player.png', { frameWidth: 64, frameHeight: 102, endFrame: 3});

    },

    create: function ()
    {
        currentScene = 11;
        console.log("scene11");

        this.background = this.add.sprite(-200,0, 'bg_2');
        this.background.setOrigin(0,0);
        this.background.setScale(0.65);

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

    },

    update: function (time, delta) {
        if(this.cursors.right.isDown) {
            this.player.anims.resume();
            this.player.flipX = false;
            this.background.x -= 4;
        } else if (this.cursors.left.isDown) {
            this.player.anims.resume();
            this.player.flipX = true;
            this.background.x += 4;
        } else {
            this.player.anims.pause(this.player.anims.currentAnim.frames[1]);

        }
    }
});

