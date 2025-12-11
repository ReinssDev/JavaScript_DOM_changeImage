export const styleUI = (ui) => {
    // root
    ui.root.style.margin = 0;
    ui.root.style.padding = 0;

    // header
    ui.header.style.backgroundColor = 'rgba(74, 13, 214, 1)';
    ui.header.style.padding = '10px';
    ui.title.style.color = '#fff';
    ui.title.style.textAlign = 'center';

    // Main Container
    ui.mainContainer.style.border = '1px solid #000';
    ui.mainContainer.style.borderRadius = '8px';
    ui.mainContainer.style.boxShadow = '8px 8px 12px rgba(0, 0, 0, 0.5)';
    ui.mainContainer.style.margin = '150px auto';
    ui.mainContainer.style.maxWidth = '700px';
    ui.mainContainer.style.padding = '20px';
    ui.mainContainer.style.display = 'flex';
    ui.mainContainer.style.flexDirection = 'column';
    ui.mainContainer.style.gap = '20px';

    // button
    ui.buttonChange.style.padding = '10px';
    ui.buttonChange.style.backgroundColor = '#014fc4ff';
    ui.buttonChange.style.color = '#fff';
    ui.buttonChange.style.cursor = 'pointer';
    ui.buttonChange.style.borderRadius = '8px';
    ui.buttonChange.style.width = '100px';
    ui.buttonChange.style.margin = 'auto';

    ui.img.style.width = "200px";
    ui.img.style.borderRadius = "8px";
    ui.img.style.display = 'block';
    ui.img.style.margin = 'auto';
}