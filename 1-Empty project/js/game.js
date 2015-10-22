var gameProperties = {
    screenWidth: 640,
    screenHeight: 480,
};

var gameStates = {
    game: "game",
};

var gameState = function(game){
    
};

gameState.prototype = {
    
    preload: function () {
        
    },
    
    create: function () {
        
    },

    update: function () {
        
    },
};

var game = new Phaser.Game(gameProperties.screenWidth, gameProperties.screenHeight, Phaser.AUTO, 'gameDiv');
game.state.add(gameStates.game, gameState);
game.state.start(gameStates.game);