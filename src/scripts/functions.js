import { homeSection, menuSection, aboutSection } from "./section-content";
import { changeContent } from "./event function";
import { homeBtn, menuBtn, aboutBtn} from './buttons';

export const buttons = [homeBtn, menuBtn, aboutBtn];
const buttonSections = [homeSection, menuSection, aboutSection];

export function btnEventListener (button) {
    const btnIndex = buttons.indexOf(button.target);

    changeContent(button.target, buttonSections[btnIndex]);

    buttons.forEach(btn => btn.classList.remove('selected-section'));

    button.target.classList.add('selected-section');
}