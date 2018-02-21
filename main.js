var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.add.state('state1', demo.state1);
game.state.start('state1');