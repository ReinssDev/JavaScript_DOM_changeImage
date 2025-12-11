export const createUI = () => {
    const root = document.getElementById('root');

    // Header
    const header = document.createElement('header');
    const title = document.createElement('h1');
    title.textContent = 'Change Image';
    header.append(title);

    // Main
    const main = document.createElement('main');
    const mainContainer = document.createElement('div');

    const heading = document.createElement('h2');
    heading.textContent = 'Klik tombol di bawah ini untuk mengubah gambar';

    const buttonChange = document.createElement('button');
    buttonChange.id = 'btnChange';
    buttonChange.textContent = 'Ubah!';

    const imgContainer = document.createElement('div');
    imgContainer.id = 'imageContainer';

    const img = document.createElement('img');
    img.id = 'image';

    imgContainer.append(img);
    mainContainer.append(heading, buttonChange, imgContainer);
    main.append(mainContainer);

    root.append(header, main);

    return {root, header, main, mainContainer, buttonChange, imgContainer, img, title, heading}
}