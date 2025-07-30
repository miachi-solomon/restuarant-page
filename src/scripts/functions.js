import { homeSection, aboutSection, menuSection } from "./section-content";
import { changeContent, changeMenuContent } from "./event function";
import { homeBtn, menuBtn, aboutBtn} from './buttons';

export function homeBtnEventListener () {
    changeContent(homeBtn, homeSection);
}

export function menuBtnEventListener () {
    changeMenuContent(menuBtn, menuSection);
}

export function aboutBtnEventListener () {
    changeContent(aboutBtn, aboutSection);
}