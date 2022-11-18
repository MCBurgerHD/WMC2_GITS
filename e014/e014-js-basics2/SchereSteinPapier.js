function schere() {
    nachricht = "";
    random = Math.random();
    Player = 0;
    Bot = random;
    if(Bot === Player){
        nachricht = "Unentschieden";
    }
    if(Bot > 0 && Bot < 2){
        nachricht = "Verloren" ;
    }
    if(Bot > 1 && Bot < 3){
        nachricht = "Gewonnen";
    }
    else{
        nachricht = "Verloren";
    }
    return nachricht
}

function stein() {
    nachricht = ""
    random = Math.random();
    Player = 1;
    Bot = random;
    if(Bot === Player){
        nachricht = "Unentschieden"
    }
    if(Bot < 1){
        nachricht = "Gewonnen";
    }
    if(Bot > 1 && Bot < 3){
        nachricht = "Verloren"
    }
    else{
        nachricht = "Verloren"
    }
    return nachricht
}

function papier() {
    nachricht = ""
    random = Math.random();
    Player = 2;
    Bot = random;
    if(Bot === Player){
        nachricht = "Unentschieden"
    }else if(Bot < 2 && Bot > 0){
        nachricht = "Gewonnen"
    }else if(Bot < 1){
        nachricht = "Verloren"
    }else{
        nachricht = "Verloren"
    }
    return nachricht
}