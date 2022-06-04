let Person = {
    Name: "Ola",
    Studium: "Informatki",
    Age: 20,
    isNewStudent: true,
    Module: ["Java", 'Css', 'Html', "JS"],
    Adresses: [
        {
            Straße: "newStraße",
            Nummer: 30,
            PLZ: 12345
        },
        {
            email: "ola@gmail.com",
            userName: "ola",
        }
    ],
    ModuleInfo: function () {
        return `Module before: ${Person.Module}`;
    }
};


class Film {
    constructor(titel, regisseur, jahr) {
        this.titel = titel;
        this.regisseur = regisseur;
        this.jahr = jahr;

    }
    berechneAlter() {
        return new Date().getFullYear() - this.jahr;
    }
}

let film1 = new Film("Pi", "Darren Aronofsky", 1998);
console.log(film1.berechneAlter()); // Ausgabe: "24"




