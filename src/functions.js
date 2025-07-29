import { homeSection, aboutSection } from "./section-content";
import { changeContent } from "./event function";
import { homeBtn, menuBtn, aboutBtn } from './buttons';

export function homeBtnEventListener () {
    changeContent(homeBtn, homeSection);
}

function menuBtnEventListener () {
    //...
}

export function aboutBtnEventListener () {
    changeContent(aboutBtn, aboutSection);
}