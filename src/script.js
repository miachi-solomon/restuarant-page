import './styles.css';
import { homeBtn, menuBtn, aboutBtn } from './buttons';
import { homeBtnEventListener, aboutBtnEventListener } from './functions';
import { homeSection } from "./section-content";
import { eventFunction } from "./event function";

eventFunction(homeBtn, homeSection);

homeBtn.addEventListener('click', homeBtnEventListener);
// menuBtn.addEventListener('click', menuBtnEventListener);
aboutBtn.addEventListener('click', aboutBtnEventListener);
