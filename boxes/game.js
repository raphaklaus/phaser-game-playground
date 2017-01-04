var game = new Phaser.Game(1024, 480, Phaser.AUTO, 'Boxes', {preload: preload,
    create: create, update: update, render: render});

var box;
var largeBox;
var jumping = false;
var speed = 300;

function preload() {
  game.load.image('box', 'assets/box.png');
  game.load.image('largebox', 'assets/largebox.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.gravity.y = 800;
  box = game.add.sprite(50, game.world.centerY, 'box');
  largeBox = game.add.sprite(0, game.world.height - 30, 'largebox');

  game.physics.arcade.enable([box, largeBox]);
  box.body.gravity.y = 200;
  largeBox.body.allowGravity = false;
  largeBox.body.immovable = true;

  box.body.collideWorldBounds = true;
}

function update() {
  game.physics.arcade.collide(box, largeBox);

  if (box.body.touching.down && jumping) {
    console.log('hmmmm')
    jumping = false;
  }

  if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !jumping) {
    jumping = true;
    box.body.velocity.y = -400;
    console.log('key pressed');
  }

  if (jumping)
    box.body.velocity.x = 0;
  else 
    box.body.velocity.x = 200;

  largeBox.body.velocity.x = -200;

  // if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  //   box.body.velocity.x = -speed;
  // }

  // if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  //   box.body.velocity.x = speed;
  // }
}

function render() {
  game.debug.text(box.body.x, 10, 10, '#FFFFFF');
}