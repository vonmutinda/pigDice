$(document).ready(function(){

    function Dice() {
        
    }


    let players = {
        defaults : {
            playerOne: "von MUTINDA",
            playerTwo: "Nyamosi"
        }
    }

    $('#loadGame').click(function(){

        players.firstPlayer= userOne = $().val();
         players.secondPlayer = $().val();

    // hide age section display playground
        $().toggle();
        $().show();


    // load names of players
    if(firstPlayer!== '' && secondPlayer!=''){
        $().append();
        $().append();
    }else{
        $().append(defaults.playerOne);
        $().append(defaults.playerTwo);
    }
        
        

    });

//roll dice
    $().click(function(){
        let score = Math.floor((Math.random() * 6) + 1);
        $().append(score);

        score +=score;
    });




});