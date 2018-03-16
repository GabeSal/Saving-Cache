var Example = Example || {};

Example.BootState = function () {
    Phaser.State.call(this);
}

Example.BootState.prototype = Object.create(Phaser.State.prototype);
Example.BootState.prototype.constructor = Example.BootState;

Example.BootState.prototype.init = function (data) {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    
    this.playerData = data;
}

Example.BootState.prototype.preload = function () {
    console.log("BootState is loading stuff...");
    
    // load text file of the JSON
    this.load.text("test", this.playerData);
}

Example.BootState.prototype.create = function () {
    
    // check game to see if there is any key matching 'test'
    if (!this.game.cache.checkTextKey("test")) {
        
        console.log("No text key was found in cache...");
        // check for JSON key
        if (this.game.cache.checkJSONKey("test")) {
            console.log("Found JSON key!");
            this.gameCache = this.game.cache.getJSON("test");
        } else {
            console.log("No game data in cache.");
        }  
    } else {
        
        // load in the JSON text file and make it a JS object
        console.log("Found the text key!");
        this.gameCache = JSON.parse(this.game.cache.getText("test"));
        
        //create new JSON Object in game cache
        this.game.cache.addJSON("test", null, this.gameCache);
        
        console.log("JSON Object: ");
        console.log(this.gameCache);
    }
    
    //Example.UpdateCacheState.prototype.swapCacheData.call(this, "test", this.gameCache);
    
    this.nextLevel();
}

Example.BootState.prototype.nextLevel = function () {
    this.game.state.start("LoadingState");
}

