// Richiesta nome
function getInputValue(){
    
    let element = document.getElementById("ticket_card");
    element.classList.remove("display_none");

    

    let nome = document.getElementById("nome").value;
    let km = document.getElementById("km").value;
    let eta = document.getElementById("eta").value;
    console.log("nome",nome);
    console.log("km",km);
    console.log("età",eta);

    document.getElementById("name_container").innerHTML = `${nome}`;
    document.getElementById("km_container").innerHTML = `${km} KM`;

    // Calcolo prezzo in base alla distanza
    let prezzo_km = km * 0.21;

    console.log("prezzo",prezzo_km);
    

    // Calcolo sconto minorenni
        let discount_minors = ((prezzo_km / 100) * 80);

        console.log("prezzo_minori",discount_minors);

    // Calcolo sconto over 65
        let discount_over = ((prezzo_km / 100) * 60);

        console.log("prezzo_over",discount_over);

// Arrotondamenti
    let pezzo_km_arrotondato = (prezzo_km).toFixed(2);
    let discount_minors_arrotondato = (discount_minors).toFixed(2);
    let discount_over_arrotondato = (discount_over).toFixed(2);

    console.log("norm arrotondato",pezzo_km_arrotondato);
    console.log("min arrotondato",discount_minors_arrotondato);
    console.log("over arrotondato",discount_over_arrotondato);


// Condizioni
if(eta == "min"){
document.getElementById("prezzo_finale").innerHTML = `${discount_minors_arrotondato} €`;
document.getElementById("discount_container").innerHTML = `20%`;

} else if(eta == "over"){
document.getElementById("prezzo_finale").innerHTML = `${discount_over_arrotondato} €`;
document.getElementById("discount_container").innerHTML = `40%`;

} else {
document.getElementById("prezzo_finale").innerHTML = `${pezzo_km_arrotondato} €`;
document.getElementById("discount_container").innerHTML = `---`;
}

}




//     // Range distanza
//     while (
//         isNaN(km) || //km is a number
//             km <0 || km >9999
//         )
//         {
//             alert ("🙄I don't know Rick...");
//             km = parseInt(prompt("Quanti Km hai intenzione di percorrere?"));
//         };


// console.log("età",eta);

//     // Range età
//     while (
//         isNaN(eta) || //eta is a number
//             eta <0 || eta >110
//         )
//         {
//             alert ("🙄I don't know Rick...");
//             eta = parseInt(prompt("Quanti anni hai?"));
//         };    
    