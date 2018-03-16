var Example = Example || {};

var game = new Phaser.Game(480, 360, Phaser.CANVAS);

game.state.add("BootState", new Example.BootState());
game.state.add("LoadingState", new Example.LoadingState());
game.state.add("FirstState", new Example.FirstState());
game.state.add("LastState", new Example.LastState());

game.state.start("BootState", true, false, "assets/data/Players.json");
