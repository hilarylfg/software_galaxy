export default function createStars(): void {
    const bgBlack = document.getElementById("root");

    if (!bgBlack) {
        console.error("Element with id 'root' not found");
        return;
    }

    const baseStars = 1500;

    for (let i = 0; i < baseStars; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.top = `${Math.random() * 99.8}%`;
        star.style.left = `${Math.random() * 99.8}%`;

        const size = `${Math.random() * 3}px`;
        star.style.width = size;
        star.style.height = size;

        star.style.opacity = `${Math.random()}`;

        bgBlack.appendChild(star);
    }
}

createStars();