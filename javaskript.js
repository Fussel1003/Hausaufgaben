function changeTextColor() {
    var text = document.getElementById("text");
    text.style.color = "red"; // Beispiel für rote Textfarbe
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = "blue"; // Beispiel für blaue Hintergrundfarbe
}

function toggleImage() {
    var image = document.getElementById("image");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

function increaseSize() {
    var resizeable = document.getElementById("resizeable");
    resizeable.style.width = (parseInt(resizeable.style.width) + 50) + "px";
    resizeable.style.height = (parseInt(resizeable.style.height) + 50) + "px";
}

function decreaseSize() {
    var resizeable = document.getElementById("resizeable");
    resizeable.style.width = (parseInt(resizeable.style.width) - 50) + "px";
    resizeable.style.height = (parseInt(resizeable.style.height) - 50) + "px";
}
