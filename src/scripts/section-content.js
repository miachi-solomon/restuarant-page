export class Section {
    constructor(header, text=undefined) {
        this.header = header,
        this.text = text
    }
}

export const homeSection = new Section ('X-Restuarant', 'At X-Restuarant, we offer the best meals for our customers locally and internationally.');
export const aboutSection = new Section ('About Us', 'We are a global business that serves customer with all the love and care they need to be happy. We do so by making delicious meals for consumers and provide a variety of options for them to choose from.');
export const menuSection = new Section ('Menu');