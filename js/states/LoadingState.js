var Example = Example || {};

Example.LoadingState = function () {
    Phaser.State.call(this);
}

Example.LoadingState.prototype = Object.create(Phaser.State.prototype);
Example.LoadingState.prototype.constructor = Example.LoadingState;

Example.LoadingState.prototype.init = function () {
    this.gameCache = this.game.cache.getJSON("test");
    
}

Example.LoadingState.prototype.preload = function () {
    console.log("LoadingState is loading stuff...");
    
    this.load.image("player1", "assets/images/healthbar.png");
    this.load.image("player2", "assets/images/healthbar2.png");
    
    this.load.image("up_button", "assets/images/upbutton.png");
    this.load.image("down_button", "assets/images/dnbutton.png");
    this.load.image("switch_button", "assets/images/swcbutton.png");
    
    // make sure the cache data is not undefined
    if (!this.gameCache) {
        console.log("There is nothing in the Cache at the moment...");
    } else {
        console.log("Hey! There's stuff in the cache!\nPlayer 1's health is: " + this.gameCache.player1.health);
    }
    // console.log(this.game.cache);
    
    this.nextLevel();
}

Example.LoadingState.prototype.nextLevel = function () {
    this.game.state.start("FirstState");
}
