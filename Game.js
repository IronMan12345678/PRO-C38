class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      man = createSprite(100,200);
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        //background("blue");
        Image(track,0, -displayHeight * 4 , displayWidth , displayHeight * 5);
        //index of the array
        var index = 0;
  
        //x and y position of the man
        var x = 175;
        var y;

  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
  
      if(player.distance > 3860){
        gameState = 2 ;
      }
  
      drawSprites();
    }
    end(){
  console.log ("game ended");
  game.update(2);
  
    }
  }
  