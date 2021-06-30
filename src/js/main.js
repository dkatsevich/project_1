import slider from './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import numberValidation from './modules/validation';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
    slider();
    modal();
    tabs();
    forms();
    numberValidation();
    calc();
})