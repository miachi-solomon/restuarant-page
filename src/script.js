import './styles.css';
import { homeBtn } from './scripts/buttons';
import { btnEventListener } from './scripts/functions';
import { homeSection } from "./scripts/section-content";
import { changeContent } from "./scripts/event function";
import { buttons } from './scripts/functions';

changeContent(homeBtn, homeSection);

buttons.forEach(button => {
    button.addEventListener('click', btnEventListener);
});