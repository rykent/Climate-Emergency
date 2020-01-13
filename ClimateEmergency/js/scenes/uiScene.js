//ui scene is parallel with all others
var uiScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    function uiScene(){
        Phaser.Scene.call(this, { key: 'uiScene', active: true});
    },

    preload: function ()
    {
        //nothing here
    },

    create: function ()
    {
        this.trashCounter = this.add.text(480, 50, 'Pickup Up: ' + trashPickedUp, {
            font: '20px Calibri',
            fill: '#000000'
        });

        this.trashCounter.visible = false;

        this.timer = this.add.text(480, 80, 'Time Left: ' + timeLeft + 's', {
            font: '20px Calibri',
            fill: '#000000'
        });
        this.timer.visible = false;
    },

    update: function (time, delta) {
        this.scene.bringToTop();
        if (!isIntro) {
            if (start) {
                this.startTime = time;
                start = false;
            }
            this.timer.visible = true;
            this.trashCounter.visible = true;

            //Begin Countdown
            timeLeft = timeAtStart - ((time - this.startTime) / 1000);
        }

        if (isInfo) {
            this.timer.visible = false;
            this.trashCounter.visible = false;
        }

        this.timer.setText("Time Left: " + timeLeft + 's');
        this.trashCounter.setText("Picked Up: " + trashPickedUp);
    }
});