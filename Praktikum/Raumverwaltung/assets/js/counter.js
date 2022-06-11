

const textArea = document.getElementById("description");

var counter = document.getElementById("counter");

textArea.addEventListener("keyup", (e) => {
    counter.innerText = e.target.value.length - 20;
});
