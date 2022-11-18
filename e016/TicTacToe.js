var game = true;
var spieler = [0];
var claimedCells = [[], []]

function checkwinning(){
    let winningStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    arrCompare = function(userarray, winstate) {
        return winstate.every((value, index) => userarray.includes(value))
        winstate.every(function(value, index){
            userarray.includes(value);
        })
    }

    currentPlayer = spieler[0];

    sClaimed = claimedCells[currentPlayer].map(v => parseInt(v));

    for(i = 0;i<winningStates.length;i++){
        if(arrCompare(sClaimed,winningStates[i]))
        {
            let info = document.getElementById("info");
            let farbe = (currentPlayer === 0) ? "rot" : "blau"
            info.innerText = farbe +" hat gewonnen!!";
            game = false;
            return;
        }
    }

    spieler[0] = (currentPlayer+1)%2
    let info = document.getElementById("info");
    let farbe = (currentPlayer === 0) ? "blau" : "rot"
    info.innerText = farbe +" ist am zug";


}
let spielfeld = document.getElementById("spielfeld");
console.log(spielfeld)
for (i = 0; i < 9; i++) {
    let div = document.createElement("div");
    div.className = "cell";
    div.setAttribute("value",i)
    console.log(div)
    spielfeld.append(div);

    div.addEventListener(
        "click",
        function(ey){
            if(!game){
                return;
            }

            currentPlayer = spieler[0]

            if (ey.target.classList.contains("rot") || ey.target.classList.contains("blau"))
                return;

            if (currentPlayer === 0)
                ey.target.classList.add("rot")
            else
                ey.target.classList.add("blau")

            claimedCells[currentPlayer].push(ey.target.getAttribute("value"))
            console.log(claimedCells)
            checkwinning()

        },
        false
    )
}