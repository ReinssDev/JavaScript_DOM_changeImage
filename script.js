// Root
let root = document.getElementById('root');
// Header
const header = document.createElement('header');
header.style.backgroundColor = 'rgba(74, 13, 214, 1)';
const elementHeader = document.createElement('h1');
elementHeader.textContent = 'Change Image';
elementHeader.style.color = "#fff";
elementHeader.style.textAlign = 'center';
header.style.padding = '10px';
header.append(elementHeader);
root.style.padding = '0px';
root.style.margin = '0px';

// Main
const main = document.createElement('main');
const mainContainer = document.createElement('div');
mainContainer.style.border = '2px solid #000';
mainContainer.style.margin = '150px auto';
mainContainer.style.maxWidth = '700px';
mainContainer.style.padding = '10px';
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'column';
mainContainer.style.gap = '20px';
const headerMain = document.createElement('h2');
headerMain.style.textAlign = 'center';
headerMain.textContent = 'Click tombol dibawah ini untuk mengubah gambar';

// button
const buttonChange = document.createElement('button');
buttonChange.textContent = 'Ubah!';
buttonChange.style.color = '#fff';
buttonChange.style.backgroundColor = '#014fc4ff';
buttonChange.style.padding = '10px';
buttonChange.style.borderRadius = '10px';
buttonChange.style.cursor = 'pointer';

// Container Image
const containerImage = document.createElement('div');
containerImage.setAttribute('id', 'image-container');
const imageElement = document.createElement('img');
imageElement.setAttribute('id', 'image');
imageElement.style.width = '200px';
imageElement.style.borderRadius = '80px';
containerImage.append(imageElement);

mainContainer.append(headerMain, buttonChange, containerImage);
main.append(mainContainer);


root.append(header, main);