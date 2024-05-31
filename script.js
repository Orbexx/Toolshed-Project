const buttonGrid = document.getElementById('button-grid');

function addButton() {
    const stackContainer = document.createElement('div');
    stackContainer.className = 'stack-container';

    const newButton = document.createElement('button');
    newButton.className = 'tool-button';
    newButton.innerText = 'New Button';
    newButton.onclick = () => {
        addButton();
    };

    //create a new input
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Name this tool';

    //Append the button and input to the stack container
    stackContainer.appendChild(newButton);
    stackContainer.appendChild(newInput);

    //append the stack container to the button grid
    buttonGrid.appendChild(stackContainer);
};

