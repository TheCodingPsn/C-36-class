class Game{

         constructor(){

    }

        //we will get the gamestate from state
        getGameState(){
        var gameStateRef = database.ref('gameState') ;
        gameStateRef.on("value", function(data){

            mygameState = data.val();

        });
        

    }

        //we will write to database    
        updateGameState(state){
        database.ref('/').update({

            gameState : state

        });

    }

    async start(){

        //initially as gamestate is 0, we will create form and player objects
        if(mygameState === 0){
       
            player = new Player();

            //NaN
            var playerCountRef = await database.ref('playerCount').once("value");
                if(playerCountRef.exists()){

                    myPlayerCount = playerCountRef.val();
                    player.getPlayerCount();
                }

            form = new Form();//this calls the constructor of the Form class
            form.display();
        }
    
    }

    //the game should start when we have 4 players registered
    play(){


    }
    
}


//sketch - control the game
//structured - form player and game