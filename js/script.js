$(document).ready(function(){

// GLOBAL VARIABLES
let outcome = 0;



//GAME

//player One
    $('#roll').click(function(){
        let play = new Dice();

        let score = parseInt(play.roll());
        outcome += score;

        console.log(score);
        spit(outcome);

        if (score > 1) {
            clear('#score');
            $('#score').append(score+"<br>");
            if (outcome === play.win) {
                alert(outcome+': Woooow ! You Win!');
            } 
        }
        else {
            clear('#score');
            outcome = 0;
            $('#antenna').text('0');
            $('#score').append("Ooops ! You rolled 1");
            $('.roll').toggleClass('animating');
        }
        spin(score);
        
    });
//player Two
    $('#btnRoll').click(function(){
        let nextPlay = new Dice();

        let score = parseInt(play.roll());
        outcome += score;

        console.log(score);
        spit(outcome);

        if (score > 1) {
            clear('#scored');
            $('#score').append(score + "<br>");
            if (outcome === nextPlay.win) {
                alert(outcome + ': Woooow ! You Win!');
            }
        }
        else {
            clear('#score');
            outcome = 0;
            $('#aerial').text('0');
            $('#scored').append("Ooops ! You rolled 1");
            $('.roll').toggleClass('animating');
        }
        spin(score);

    });








// FUNCTIONS ,FACTORIES , CONSTRUCTORS & OBJECTS

function Dice() {
    this.sides = 6;
    this.win = 50;
    this.roll = function roll() {
        let num = Math.floor((Math.random() * this.sides) + 1);
        return num;
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

//function clear 

function clear(where){
    $(where).text('');
}

function cleared(){

}




//calculator
function spit(calc){
    clear('#antenna');
    $('#antenna').append(calc);

}



//spin images 
function spin(score) {

    if (score === 1) {
        $('.one').toggleClass('fa-spin').removeClass('fa-spin');
        removeSpin(".one");
    } else if (score === 2) {
        $('.two').toggleClass('fa-spin');
        removeSpin(".two");
    } else if (score === 3) {
        $('.three').toggleClass('fa-spin');
        removeSpin(".three");
    } else if (score === 4) {
        $('.four').toggleClass('fa-spin');
        removeSpin(".four");
    } else if (score === 5) {
        $('.five').toggleClass('fa-spin');
        removeSpin(".five");
    } else {
        $('.six').addClass('fa-spin');
        removeSpin(".six");
    }

}

//remove spin

function removeSpin(which){
    $(which).removeClass('.fa-spin');
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