function createStars(numberOfStars) {
    var bgBlack = document.getElementById("root");

    for (var i = 0; i < numberOfStars; i++) {
        var star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 99.8 + "%";
        star.style.left = Math.random() * 99.8 + "%";

        var size = Math.random() * 3 + "px";
        star.style.width = size;
        star.style.height = size;

        star.style.opacity = Math.random();

        bgBlack.appendChild(star);
    }
}
