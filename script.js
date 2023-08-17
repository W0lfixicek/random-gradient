function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function generateRandomGradient() {
    const numColors = Math.floor(Math.random() * 0) + 2; // Náhodný počet barev mezi 2 a 5
    let gradient = `linear-gradient(69deg,${generateRandomColor()}`;

    for (let i = 1; i < numColors; i++) {
        gradient +=`, ${generateRandomColor()}`;
    }

    gradient += ')';
    return gradient;
}

document.addEventListener('DOMContentLoaded', () => {
    const gradientBox = document.querySelector('.gradient-box');
    const gradDisp = document.querySelector('#gradDisp');
    const generateButton = document.getElementById('generate-button');

    generateButton.addEventListener('click', () => {
        const randomGradient = generateRandomGradient();
        gradientBox.style.background = randomGradient;
        gradDisp.value = randomGradient;
    });
});
