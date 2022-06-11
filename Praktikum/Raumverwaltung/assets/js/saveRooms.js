class Room {
    constructor(name, description, floor) {
        this.name = name;
        this.description = description;
        this.floor = floor;
    }
};


const room1 = new Room("A.E.01", "Hörsaal", "EF 42");
const room2 = new Room("A.E.02", "Übungsraum", "EF 42");
const room3 = new Room("A.E.03", "Labor", "EF 42");


const rooms = [];

document.getElementById("btn_save_room_1").addEventListener("click", () => {
    addToLocalStorage(room1);
});

document.getElementById("btn_save_room_2").addEventListener("click", () => {
    addToLocalStorage(room2);
});

document.getElementById("btn_save_room_3").addEventListener("click", () => {
    addToLocalStorage(room3);
});

function addToLocalStorage(room) {
    rooms.push(room);
    localStorage.setItem('rooms', JSON.stringify(rooms));
   
}