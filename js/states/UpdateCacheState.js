var Example = Example || {};

Example.UpdateCacheState = function () {
    Phaser.State.call(this);
}

Example.UpdateCacheState.prototype = Object.create(Phaser.State.prototype);
Example.UpdateCacheState.prototype.constructor = Example.UpdateCacheState;

Example.UpdateCacheState.prototype.swapCacheData = function (key, data) {
    
    this.game.cache.removeJSON(key);
    this.game.cache.addJSON(key, null, data);
    
}