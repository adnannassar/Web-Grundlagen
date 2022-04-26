let button = document.querySelector("#btn");
// Registrierung eines Handlers für Mausklick
button.addEventListener("click", function () {
    alert("Das Datum lautet: " + Date());
});
// Registrierung eines weiteren Handlers für Mauskl
button.addEventListener("click", function () {
    button.innerHTML = "DATUM! JETZT!";
});