import './styles.css';
import { homeBtn, menuBtn, aboutBtn } from './scripts/buttons';
import { homeBtnEventListener, menuBtnEventListener, aboutBtnEventListener } from './scripts/functions';
import { homeSection } from "./scripts/section-content";
import { changeContent } from "./scripts/event function";

changeContent(homeBtn, homeSection);

homeBtn.addEventListener('click', homeBtnEventListener);
menuBtn.addEventListener('click', menuBtnEventListener);
aboutBtn.addEventListener('click', aboutBtnEventListener);