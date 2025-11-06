let currentPlayer = ["X", "O"];
let arr = [null, null, null, null, null, null, null, null, null];
let box = document.querySelectorAll(".box");
// let random = "";
let player1 = "a";
let player2 = "b";

let random = currentPlayer[Math.floor(Math.random() * currentPlayer.length)];
currentPlayer = random;
// console.log(random)

function giveValueToPlayer() {
    
}


function openGame() {
    const player1Input = document.querySelector("#player1Input");
    const player2Input = document.querySelector("#player2Input");
    const choosePlayer = document.querySelector(".choosePlayer");
    const submit = document.querySelector(".choosePlayer button");
    const player1h2 = document.querySelectorAll(".player1 h2")
    const player2h2 = document.querySelectorAll(".player2 h2")

    player1Input.addEventListener('input', (elem) => {
        player1 = elem.target.value;
    })
    player2Input.addEventListener('input', (elem) => {
        player2 = elem.target.value;
    })

    submit.addEventListener('click', () => {
        if (player1 !== "" && player2 !== "" && player1 !== player2) {
            choosePlayer.style.display = "none";
            // console.log(player1, player2)
            player1h2[0].innerHTML = player1.toUpperCase();
            player2h2[0].innerHTML = player2.toUpperCase();
            console.log(random)
            if (random === "X") {
                player1h2[1].innerHTML = "'" + random + "'";
                player2h2[1].innerHTML = "'O'";
            } else if (random === "O") {
                player1h2[1].innerHTML = "'" + random + "'";
                player2h2[1].innerHTML = "'X'";
            } else console.log("object")
        }else alert("please give player's name or not same name")
    })

}

openGame();

function fillBox() {
    box.forEach((elem) => {
        const id = Number(elem.id);
        elem.addEventListener('click', () => {
            if (arr[id] !== null) {
                return;
            }
            if (currentPlayer == 'X') {
                elem.innerHTML = '<span class="X">X</span>'
                currentPlayer = 'O'
                arr[id] = 'X'
                checkWin();
                checkDraw();
            } else if (currentPlayer == 'O') {
                elem.innerHTML = '<span class="O">O</span>'
                currentPlayer = 'X'
                arr[id] = 'O'
                checkWin();
                checkDraw();
            }
        })
    });
}


fillBox();


function checkWin() {
    const main = document.querySelector("main");
    if (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2] ||
        arr[3] !== null && arr[3] == arr[4] && arr[4] === arr[5] ||
        arr[6] !== null && arr[6] == arr[7] && arr[7] === arr[8] ||
        arr[0] !== null && arr[0] == arr[3] && arr[3] === arr[6] ||
        arr[1] !== null && arr[1] == arr[4] && arr[4] === arr[7] ||
        arr[2] !== null && arr[2] == arr[5] && arr[5] === arr[8] ||
        arr[0] !== null && arr[0] == arr[4] && arr[4] === arr[8] ||
        arr[2] !== null && arr[2] == arr[4] && arr[4] === arr[6]) {
        if (currentPlayer == 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        console.log(currentPlayer)
        main.innerHTML = `<h1>Player '${currentPlayer}' wins!</h1>`;
    }
}

function checkDraw() {
    if (!arr.includes(null)) {
        console.log("It's a draw!");
    }
}

checkDraw();


function refreshPage() {
    window.location.reload();
}