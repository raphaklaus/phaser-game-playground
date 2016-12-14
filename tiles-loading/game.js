var game = new Phaser.Game(640, 240, Phaser.AUTO, 'Tiles', {preload: preload,
  create: create, update: update});

function preload() {
  game.load.tilemap('background', 'assets/map01.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'assets/mario_tileset.png');
}

function create() {
  var map = game.add.tilemap('background');
  map.addTilesetImage('mario_tileset', 'tiles');

  var layer = map.createLayer('Camada de Tiles 1');
  // layer.resizeWorld();
  // layer.wrap = true;
}

function update() {

}
