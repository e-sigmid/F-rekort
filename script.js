function sjekkSertifikat() {
    var alderInput = document.getElementById("alder");
    var alder = parseInt(alderInput.value); //parseInt returnerer hva som er i Int
    var resultatElement = document.getElementById("resultat");

    if (isNaN(alder) || alder < 0) { //NaN (Not A Number) og returnerer hva som er i NaN
        resultatElement.innerHTML = "Feil inndata. Skriv inn alderen som et positivt heltall.";
        return;
    }

    var resultat = "";

    if (alder < 16) {
        resultat = "A. Ingenting, du er for ung.";
    } else if (alder === 16) {
        resultat = "B. Moped";
    } else if (alder === 18) {
        resultat = "C. Bil";
    } else if (alder === 21) {
        resultat = "D. Lastebil";
    } else if (alder >= 24) {
        resultat = "E. Buss";
    }

    resultatElement.innerHTML = `<p>Basert på alderen din kan du ta følgende sertifikat:</p><p>${resultat}</p>`;
}
