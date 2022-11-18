function newElement() {
    let li = document.createElement("li");
    let eingabe = document.getElementById("eingabe").value;
    let t = document.createTextNode(eingabe);
    li.appendChild(t);


    if (eingabe === '') {
        alert("Leere Eingabe ist nicht erlaubt!");
    }
    else {
        document.getElementById("liste").appendChild(li);
    }
    document.getElementById("eingabe").value = "";

}

let input = document.getElementById("eingabe")

input.addEventListener("keypress", function (event){
    if (event.key == "Enter") {
        newElement()
    }
})