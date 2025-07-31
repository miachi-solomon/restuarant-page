import './menu.css';
import { menuItems } from "./menu-products";
import { contentsDiv } from '../event function';

export function generateMenuHTMl () {
    let menuHTML = '';
    menuItems.forEach((item) => {
        // const menuItem = document.createElement('div');
        // const itemImageDiv = document.createElement('div');
        // const itemPrice = document.createElement('p');
        // const itemImage = document.createElement('img');

        // menuItem.classList.add('menu-item');
        // itemPrice.classList.add('item-price');

        // itemImage.src = item.image;

        // menuItem.append(itemImage, itemPrice);

        // itemImageDiv.innerHTML = itemImage;
        // itemPrice.innerHTML = item.price;
        menuHTML += `
            <div class="menu-item">
                <div class="item-image-div">
                    <img src="${item.image}">
                </div>
                <p class="item-price">${item.price}</p>
            </div>`;
    });
    return menuHTML;
}