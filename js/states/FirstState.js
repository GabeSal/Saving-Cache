var Example = Example || {};

Example.FirstState = function () {
    Phaser.State.call(this);
}

Example.FirstState.prototype = Object.create(Phaser.State.prototype);
Example.FirstState.prototype.constructor = Example.FirstState;

Example.FirstState.prototype.init = function () {
    this.gameCache = this.game.cache.getJSON("test");
    // console.log(this.gameCache);
    this.style = { font: "bold 18px Georgia", fill: "#FFF"};
}

Example.FirstState.prototype.preload = function () {
    
}

Example.FirstState.prototype.create = function () {
    // create player health sprite
    this.player1Health = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, "player1");
    this.player1Health.anchor.setTo(0.5, 0.5);
    
    // text for player
    this.player1Text = this.game.add.text(this.game.world.centerX - 65, this.game.world.centerY - 60, "Player 1 Health: ", this.style);
    this.player1Text.anchor.setTo(0.5, 0.5);
    
    // decrease health
    this.decHealthBtn = this.game.add.button(this.game.world.centerX - 50, this.game.world.centerY + 75, "down_button", this.decreaseHealth, this);
    this.decHealthBtn.scale.setTo(1.0, 1.0);
    this.decHealthBtn.anchor.setTo(0.5, 0.5);
    
    // add more health
    this.addHealthBtn = this.game.add.button(this.game.world.centerX - 50, this.game.world.centerY, "up_button", this.addHealth, this);
    this.addHealthBtn.scale.setTo(1.0, 1.0);
    this.addHealthBtn.anchor.setTo(0.5, 0.5);
    
    // button switches between first and last states
    this.switchBtn = this.game.add.button(this.game.world.centerX + 50, this.game.world.centerY + 50, "switch_button", this.switchToNext, this);
    this.switchBtn.scale.setTo(1.0, 1.0);
    this.switchBtn.anchor.setTo(0.5, 0.5);
    
    // show how much health the player has
    this.changePlayerHealthText(this.gameCache);
}

Example.FirstState.prototype.update = function () {
    // scale player health when it decrements/increments
    this.player1Health.scale.setTo(this.gameCache.player1.health / 100, 1.0);
}

Example.FirstState.prototype.decreaseHealth = function () {
    if (this.gameCache.player2.health >= 0) {
        this.gameCache.player2.health -= 5;
    } else {
        this.gameCache.player2.health = 0;
    }
}

Example.FirstState.prototype.addHealth = function () {
    if (this.gameCache.player1.health >= 100) {
        this.gameCache.player1.health = 100;
    } else {
        this.gameCache.player1.health += 5;
    }
    this.changePlayerHealthText();
}

Example.FirstState.prototype.switchToNext = function () {
    this.prepareNextState("test", this.gameCache, "LastState");
}

Example.FirstState.prototype.changePlayerHealthText = function () {
    this.player1Text.text = "Player 1 Health: " + this.gameCache.player1.health;
}

Example.FirstState.prototype.prepareNextState = function (key, data, nextState) {
    Example.UpdateCacheState.prototype.swapCacheData.call(this, key, data);
    this.game.state.start(nextState);
}