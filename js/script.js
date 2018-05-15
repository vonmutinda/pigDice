$(document).ready(function(){

// GLOBAL VARIABLES
let outcome = 0;
let result = 0;



//GAME

//player One
    $('#roll').click(function () {
        // $('#boo').removeClass('active');
        // $('#bae').addClass('active');
        let play = new Dice();

        play.playing("#bae","#boo");

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
                    alert(outcome+': Woooow ! You Win!');                    
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
        // $('#bae').removeClass('active');
        // $('#boo').addClass('active');
        let nextPlay = new Dice();

        nextPlay.playing('#boo','#bae')

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
                    alert( result+ ': Woooow ! You Win!');
                    result = 0;
                    nextPlay.clearScreen("#aerial");
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
$().click(function () {
    let newGame = new Dice();

    newGame.clearScreen();
    newGame.clearScreen();
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
        $(whos).addClass('active');
        $(withwhom).removeClass('active');
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