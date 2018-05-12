$(document).ready(function(){

// GLOBAL VARIABLES
let outcome = 0;
let income = 0;



//GAME

//player One
    $('#roll').click(function(){
        let play = new Dice();

        let score = parseInt(play.roll());
        outcome += score;

        console.log(score);
        play.clearScreen("#antenna");
        play.printResult("#antenna",outcome);
        

        if (score > 1) {
            play.gameOver('#score');
            $('#score').append(score+"<br>");
            if (outcome === play.win) {
                alert(outcome+': Woooow ! You Win!');
            } 
        }
        else {
            play.gameOver('#score');
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

        let herScore = parseInt(nextPlay.roll());
        income += herScore;

        console.log(herScore);
        nextPlay.clearScreen("#aerial");
        nextPlay.printResult("#aerial",income);


        if (herScore > 1) {
            nextPlay.gameOver('#scored');
            $('#scored').append(herScore + "<br>");
            if (income === nextPlay.win) {
                alert(income + ': Woooow ! You Win!');
            }
        }
        else {
            nextPlay.gameOver('#scored');
            income = 0;
            $('#aerial').text('0');
            $('#scored').append("Ooops ! You rolled 1");
            nextPlay.badluck();
        }
        nextPlay.spin(herScore);

    });








// FUNCTIONS ,FACTORIES , CONSTRUCTORS & OBJECTS

function Dice() {
    this.sides = 6;
    this.win = 50;
    this.roll = function roll() {
        let num = Math.floor((Math.random() * this.sides) + 1);
        return num;
    },
    this.gameOver = function gameOver(where){
        return $(where).text('');
    },
    this.badluck = function badluck() {
        return $('.roll').toggleClass('animating');
    },
    this.printResult = function printResult(here,result) {
        return $(here).append(result);
    },
    this.spin = function spin(score) {
        if (score === 1) {
            $('.one').toggleClass('fa-spin').removeClass('fa-spin');
        } else if (score === 2) {
            $('.two').toggleClass('fa-spin');
        } else if (score === 3) {
            $('.three').toggleClass('fa-spin');
        } else if (score === 4) {
            $('.four').toggleClass('fa-spin');
        } else if (score === 5) {
            $('.five').toggleClass('fa-spin');
        } else {
            $('.six').addClass('fa-spin');
        }
    },
    this.clearScreen = function clearScreen(here) {
        return $(here).text('');
    }

}





function Players(firstPlayer, secondPlayer) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
    this.theDefaults = {
        fhirst: 'vonMUTINDA',
        second: 'bERYLnYAMOSI'
    }
}



//calculator
// function spit(calc){
//     clear('#antenna');
//     $('#antenna').append(calc);

// }


// EVENT LISTENERS

// load playground
$('#loadGame').click(function () {

    let players = new Players($('#playerOne').val(), $('#playerTwo').val());

    // load names of players
    if (firstPlayer !== '' && secondPlayer != '') {
        $('#pOne').append(players.firstPlayer);
        $('#pTwo').append(players.secondPlayer);
    } else {
        $('#pOne').append(players.theDefaults.fhirst);
        $('#pTwo').append(players.defaults.second);
    }

    // hide login & display playground
    $('.login').toggle();
    $('.ground').show();


});


});