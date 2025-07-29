const contentsDiv = document.querySelector('#contents');

export function eventFunction (button, sectionObject) {
    const btnName = button.textContent.toLowerCase();

    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const text = document.createElement('div');

    container.classList.add(`${btnName}-section`);
    h1.classList.add(`${btnName}-section-header`);
    text.classList.add(`${btnName}-section-text`);

    h1.textContent = sectionObject.header;
    text.textContent = sectionObject.text;

    container.appendChild(h1);
    container.appendChild(text);
    contentsDiv.appendChild(container);
}

export function changeContent (button, sectionObject) {
    const btnName = button.textContent.toLowerCase();

    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const text = document.createElement('div');

    container.classList.add(`${btnName}-section`);
    h1.classList.add(`${btnName}-section-header`);
    text.classList.add(`${btnName}-section-text`);

    h1.textContent = sectionObject.header;
    text.textContent = sectionObject.text;

    container.appendChild(h1);
    container.appendChild(text);
    contentsDiv.innerHTML = container.outerHTML;
}