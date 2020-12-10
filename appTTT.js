const CLICK_LEFT = 0;
const CLICK_RIGHT = 2;

let cases = document.getElementsByClassName("case");
console.log(cases);

for(let square of cases){
    square.addEventListener('mouseup', function (event){
        switch (event.button){
            case CLICK_LEFT:
                // si la case est vide alors...
                insertPlayerTexte(this, 'X');
                horizon();
                console.log(horizon());

                break;
            case CLICK_RIGHT:
                insertPlayerTexte(this, 'O');
                break;
        }
        checkCases();
    })
}

function checkCases() {
    horizon();
    verticale();
    diago();
}

function horizon (){
    // une verif horizontale
    // test 0,1,2
    // if(cases[0].innerHTML === 'X' && cases[1].innerHTML === 'X' && cases[2].innerHTML === 'X'){
    //     return 'player 1 won';
    // }
    // else if (cases[0].innerHTML === 'O' && cases[1].innerHTML === 'O' && cases[2].innerHTML === 'O'){
    //     return 'player 2 won';
    // }
    // return false;
    // test 3,4,5
    // test 6,7,8
    for(let index = 0; index <= 8; index+=3){
        if(cases[0].innerHTML === 'x' && cases[index+1].innerHTML && cases[index+2]){
            return 'player 1 won';
        }
    }
}

function verticale (){
    // une verif verticale
    // test 0, 3, 6
    // test 1, 4, 7
    // test 2, 5, 8
}

function diago (){
    // une verfif diagonale
    // test 0, 4, 8
    // test 6, 4, 2
}




function insertPlayerTexte (element, playerChar){
    if (element.innerHTML.length === 0){
        // playerChar contient X ou 0
        element.innerHTML = playerChar;
    }
}

document.addEventListener('contextmenu', function (event){
    event.preventDefault();
})

