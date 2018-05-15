$(document).ready(function(){

// GLOBAL VARIABLES
let outcome = 0;
let result = 0;



//GAME

//player One
    $('#roll').click(function () {
        let play = new Dice();

        play.playing("#bae","#boo"); //show active player
        play.gameOver("#screen"," "); //scrub previous game's winner

        if ($('#easy').is(':checked')) {
            play.win = 20;
        }
        else if ($('#hard').is(':checked')) {
            play.win = 50;
        }

        let score = parseInt(play.roll());
        outcome += score;

        console.log(score);
        play.gameOver("#antenna",'');
        play.printResult("#antenna",outcome);
        

        if (score > 1) {
            play.gameOver('#score','');
            $('#score').append(score+"<br>");
                if (outcome >= play.win) {
                    play.badluck();
                    // alert(outcome+': Woooow ! You Win!'); 
                    $('#screen').text(' Woow ! MUTINDA You Win!');
                    outcome = 0;
                    play.gameOver("#score",'');
                    play.gameOver('#antenna','0');

                } 
        }
        else {
            play.gameOver('#score','');
            outcome = 0;
            $('#antenna').text('0');
            $('#score').append("Ooops ! You rolled 1");
            play.badluck();
        }
        play.spin(score);
        
    });

//player Two
    $('#btnRoll').click(function(){
        let nextPlay = new Dice();

        nextPlay.gameOver("#screen",''); //scrub previous game's winner
        nextPlay.playing('#boo','#bae') //show active player

        if($('#easy').is(':checked')){
            nextPlay.win = 20;
        }
        else if ($('#hard').is(':checked')){
            nextPlay.win = 50;
        }

        let herScore = parseInt(nextPlay.roll());
        result += herScore;

        console.log(herScore);
        nextPlay.gameOver("#aerial",'');
        nextPlay.printResult("#aerial",result);

        // logic(nextPlay,herScore,result,'#aerial','#scored');
        if (herScore > 1) {
            nextPlay.gameOver('#scored','');
            $('#scored').append(herScore + "<br>");
                if (result >= nextPlay.win) {
                    // alert( result+ ': Woooow ! You Win!');
                    $('#screen').text('Woow ! BERYL You Win!');
                    result = 0;
                    nextPlay.gameOver("#aerial",'0');
                    nextPlay.gameOver('#scored','');
                }
        }
        else {
            nextPlay.gameOver('#scored','');
            result = 0;
            nextPlay.gameOver("#aerial",'0');
            $('#scored').append("Ooops ! You rolled 1");
            nextPlay.badluck();
        }
        nextPlay.spin(herScore);

    });

    //start Game 
$("#start").click(function () {
    let newGame = new Dice();

    newGame.gameOver("#screen"," ");
    newGame.gameOver("#antenna",'0');
    newGame.gameOver("#aerial",'0');

    newGame.gameOver("#score",'');
    newGame.gameOver("#scored",'');

    $('#bae').removeClass('active');
    $('#boo').removeClass('active');
});






// FUNCTIONS ,FACTORIES , CONSTRUCTORS & OBJECTS

function Dice() {
    this.sides = 6;
    this.win = 20;
    this.roll = function roll() {
        let num = Math.floor((Math.random() * this.sides) + 1);
        return num;
    },
    this.gameOver = function gameOver(where,what){
        return $(where).text(what);
    },
    this.badluck = function badluck() {
        return $('.roll').toggleClass('animating');
    },
    this.printResult = function printResult(here,result) {
        return $(here).append(result);
    },
    this.spin = function spin(score) {
        if (score === 1) {
            $('.one').toggleClass('fa-spin');
            $('#image').attr("src","assets/one.png");
        } else if (score === 2) {
            $('.two').toggleClass('fa-spin');
            $('#image').attr("src", "assets/two.png");
        } else if (score === 3) {
            $('.three').toggleClass('fa-spin');
            $('#image').attr("src", "assets/three.png");
        } else if (score === 4) {
            $('.four').toggleClass('fa-spin');
            $('#image').attr("src", "assets/foo.png");
        } else if (score === 5) {
            $('.five').toggleClass('fa-spin');
            $('#image').attr("src", "assets/five.png");
        } else {
            $('.six').addClass('fa-spin');
            $('#image').attr("src", "assets/six.png");
        }
    },
    this.playing = function playing(whos,withwhom) {
        $(withwhom).addClass('active');
        $(whos).removeClass('active');
    }

}



function Players(firstPlayer, secondPlayer) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
}

let defaultPlayers = {
    fhirst: 'vonMUTINDA',
    second: 'bERYLnYAMOSI'
}


// function logic(whichPlayer,score,result,where,put){
//     if (score > 1) {
//         whichPlayer.gameOver(put, '');
//         $(where).append(score);
//         if (result >= whichPlayer.win) {
//             result = 0;
//             alert(result + ': Woooow ! You Win!');
//             whichPlayer.clearScreen(where);
//         }
//     }
//     else {
//         whichPlayer.gameOver(put, '');
//         result = 0;
//         whichPlayer.gameOver(where, '0');
//         $(put).append("Ooops ! You rolled 1");
//         whichPlayer.badluck();
//     }
// }


// EVENT LISTENERS

// load playground
$('#loadGame').click(function () {

    let players = new Players($('#playerOne').val(), $('#playerTwo').val());

    // load names of players
    if (firstPlayer ==='' || secondPlayer === '') {
        $('#pOne').append(defaultPlayers.fhirst);
        $('#pTwo').append(defaultPlayers.second);
    } else {
        $('#pOne').append(players.firstPlayer);
        $('#pTwo').append(players.secondPlayer);
    }

    // hide login & display playground
    $('.login').toggle();
    $('.ground').toggle();


});


});