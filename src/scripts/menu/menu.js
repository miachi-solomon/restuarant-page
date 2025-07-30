import './menu.css';
import { menuItems } from "./menu-products";

export function generateMenuHTMl () {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menuItems.forEach((item) => {
        const menuItem = document.createElement('div');
        const itemImageDiv = document.createElement('div');
        const itemPrice = document.createElement('div');
        const itemImage = document.createElement('img');

        menuItem.classList.add('menu-item');

        itemImage.src = item.image;

        menuItem.append(itemImage, itemPrice);
        menuContainer.appendChild(menuItem);

        itemImageDiv.innerHTML = itemImage;
        itemPrice.textContent = item.price;
    });
    return menuContainer.outerHTML;
}