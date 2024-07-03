import './style.css';
import {homePageLoad} from './home.js';
import {menuPageLoad} from './menu.js';
import {aboutPageLoad} from './about.js';

const content = document.querySelector("#content");
const btnHome = document.querySelector(".home");
const btnMenu = document.querySelector(".menu");
const btnAbout = document.querySelector(".about");

btnHome.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.lastChild);
    };
    homePageLoad();
});

btnMenu.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.lastChild);
    };
    menuPageLoad();
});

btnAbout.addEventListener("click",()=>{
    while(content.firstChild){
        content.removeChild(content.lastChild);
    };
    aboutPageLoad();
});

homePageLoad();




