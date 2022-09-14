import { getTheme } from "../Getters";

export function setter() {
    Theme(getTheme());
}


export function Theme(obj) {
    if (obj === false) {
        document.body.classList.remove('darkmode');
        document.body.classList.toggle('lightmode');
    } 
    else if (obj === true) {
        document.body.classList.remove('lightmode');
        if (document.body.classList[0] !== 'darkmode') return document.body.classList.toggle('darkmode');
    }
}