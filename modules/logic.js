export const initLogic = (ui) => {
    const images = [
        'dan-gentile-IRW6T87IfVA-unsplash.jpg',
        'joachim-lesne-vYc1k5x_f7I-unsplash.jpg',
        'peter-thomas-0ZL_juKJzyQ-unsplash.jpg'
    ]
    ui.img.src = `img/${images[0]}`;

    ui.buttonChange.addEventListener('click', () => {
        const random = Math.round(Math.random() * images.length);
        ui.img.src = `img/${images[random]}`;
    })
}