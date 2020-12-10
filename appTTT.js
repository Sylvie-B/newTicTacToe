const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;
let playerX = false, playerO = false;
let cases = document.getElementsByClassName("case");

for(let square of cases){
    square.addEventListener('mouseup', function (event){
        switch (event.button){
            case CLICK_LEFT:
                // si la case est vide alors...
                insertPlayerTexte(this, 'X');
                break;
            case CLICK_RIGHT:
                insertPlayerTexte(this, 'O');
                break;
        }
        checkCases();
    });
}

function checkCases() {
    playerX = horizon('X'); //  || verticale('X') || diago('X')
    playerO = horizon('O');

    if (!playerX && !playerO) {
        playerX = verticale('X');
        playerO = verticale('O');

        if (!playerX && !playerO) {
            playerX = diago('X');
            playerO = diago('O');
        }

    }
        if(playerX) {
            document.getElementById('won').innerHTML = "le joueur 1 a gagné (X)";
        }
        else if (playerO){
            document.getElementById('won').innerHTML = "le joueur 2 a gagné (Y)";
        }
}

function horizon (player){

    for(let idx = 0; idx <= 8; idx+=3){
        if(cases[idx].innerHTML === player && cases[idx+1].innerHTML === player && cases[idx+2] === player){
            return true;
        }
    }
    return false;
}

function verticale (player){
    // une verif verticale
    for(let idx = 0; idx <= 2; idx+=1){
        if(cases[idx].innerHTML === player && cases[idx+3].innerHTML === player && cases[idx+6] === player){
            return true;
        }
    }
    return false;
}

function diago (player){
    return cases[4].innerHTML === player && (cases[0].innerHTML === player && cases[8].innerHTML === player) ||
                                            (cases[2].innerHTML === player && cases[6].innerHTML === player)
}

function insertPlayerTexte (element, playerChar){
    if (element.innerHTML.length === 0){
        // playerChar contient X ou 0
        element.innerHTML = playerChar;
    }
}

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

document.getElementById("reset").addEventListener('click', function (){
    for(let square of cases) {
        square.innerHTML = "";
    }
    playerO = false;
    playerX = false;
    document.getElementById('won').innerHTML = "";
});

