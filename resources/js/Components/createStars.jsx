function createStars(numberOfStars) {
    let bgBlack = document.getElementById("root");

    for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 99.8 + "%";
        star.style.left = Math.random() * 99.8 + "%";

        let size = Math.random() * 3 + "px";
        star.style.width = size;
        star.style.height = size;

        star.style.opacity = Math.random();

        bgBlack.appendChild(star);
    }
}
