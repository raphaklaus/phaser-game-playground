var game = new Phaser.Game(1024, 680, Phaser.AUTO, 'Boxes', {preload: preload,
    create: create, update: update});

var box;
var speed = 5;

function preload() {
  game.load.image('box', 'assets/box.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 800;
  box = game.add.sprite(50, game.world.centerY, 'box');
  var boxer = game.add.sprite(game.world.centerX, game.world.centerY, 'box');

  game.physics.arcade.enable([box, boxer]);
  box.body.gravity.y = 200;
  boxer.body.gravity.y = 1000;

  box.body.collideWorldBounds = true;
  boxer.body.collideWorldBounds = true;

  box.body.bounce.y = 0.6;
  boxer.body.bounce.y = 0.7;
}

function update() {
  if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
    box.x -= speed;
  } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    box.x += speed;
  }
}
