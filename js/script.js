$(document).ready(function(){

// GLOBAL VARIABLES
let outcome = 0;



//GAME
    $('#roll').click(function(){
        let play = new Dice();

        let score = parseInt(play.roll());

        console.log(score);

        if (score > 1) {
            outcome += score;

            $('#score').append(score);
            if (outcome === play.win) {
                alert('Woooow ! You Win!');
            }
        } else {
            alert('Oops ! You Rolled 1');
            $('.roll').toggleClass('animating');
            $('#score').text('');
        }

        spin(score);
        
    });

    $



// FUNCTIONS ,FACTORIES , CONSTRUCTORS & OBJECTS

function Dice() {
    this.sides = 6;
    this.win = 50;
    this.roll = function roll() {
        let num = Math.floor((Math.random() * this.sides) + 1);
        return num;
    }

}

//spin images 
function spin(score) {

    if (score === 1) {
        $('.one').toggleClass('fa-spin');
    } else if (score === 2) {
        $('.two').toggleClass('fa-spin');
    } else if (score === 3) {
        $('.three').toggleClass('fa-spin');
    } else if (score === 4) {
        $('.four').toggleClass('fa-spin');
    } else if (score === 5) {
        $('.five').toggleClass('fa-spin');
    } else {
        $('.six').toggleClass('fa-spin');
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