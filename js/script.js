$(document).ready(function(){

    function Dice() {
        this.win=50;
        
    }

    function Players(name){
        this.name=name;
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
        $('.login').toggle();
        $('#playground').show();


    // load names of players
    if(firstPlayer!== '' && secondPlayer!=''){
        $('#userwan').append(players.firstPlayer);
        $('#usertoo').append(players.secondPlayer);
    }else{
        $().append(defaults.playerOne);
        $().append(defaults.playerTwo);
    }
        
        

    });

//roll dice
    $('#roll').click(function(){
        let score = Math.floor((Math.random() * 6) + 1);

        if(score==1){
            alert('Ooops ! You Rolled 1 .');
            $('#resultOne').remove();
            $('#turnTwo').fadeIn();
        }else{
            $('#score').append(score);
            $('ul#resultOne').append('<li>' + score + '</li>');
            
        }
        score += score;
        $('#totalOne').val(score);
       
        
    // clear your score
        $('#score').text('');
    });


function win(score){
    for

}


//animating the roll button
    $('#roll').click(function(){
        $('.roll').toggleClass('animating');
    });


});