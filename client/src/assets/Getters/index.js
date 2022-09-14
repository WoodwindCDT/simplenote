export function getTheme() {
    return JSON.parse(localStorage.getItem('settings')).theme;
}


export function getColor() {
    return JSON.parse(localStorage.getItem('settings')).autoColor;
}

export function getSort() {
    return JSON.parse(localStorage.getItem('settings')).autoSort;;
}