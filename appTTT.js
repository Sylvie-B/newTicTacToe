const LEFT = 0;
const RIGHT = 2;

let cases = document.getElementsByClassName("case");
console.log(cases);

for(let square of cases){
    square.addEventListener('mouseup', function (event){
        switch (event.button){
            case LEFT:
                console.log("click gauche");
                break;
            case RIGHT:
                console.log("click droit");
                break;
        }
    })
}

