$(document).ready(function(){

    function Dice() {
        this.win=50;

    }

    function Players(firstPlayer,secondPlayer){
        this.firstPlayer=firstPlayer;
        this.secondPlayer=secondPlayer;
    }

    // let players = {
    //     defaults : {
    //         playerOne: "von MUTINDA",
    //         playerTwo: "Nyamosi"
    //     }
    // }

    $('#loadGame').click(function(){

        let players = new Players($('#playerOne').val(), $('#playerTwo').val());

         // load names of players
         if (firstPlayer !== '' && secondPlayer != '') {
             $('#pOne').append(players.firstPlayer);
             $('#pTwo').append(players.secondPlayer);
         } else {
             $('#pOne').append(defaults.playerOne);
             $('#pTwo').append(defaults.playerTwo);
         }

    // hide age section display playground
        $('.login').toggle();
        $('.ground').show();     
        

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
    

}


//animating the roll button
    $('#roll').click(function(){
        $('.roll').toggleClass('animating');
    });


});