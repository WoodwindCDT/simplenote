export function Add(obj) {
    // Initially no localstorage, only on creation will a set exist
    if (obj != null) {
        if (localStorage.getItem('tasks') === null) {
            let tasks = [];
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        let prevTasks = JSON.parse(localStorage.getItem('tasks'));
        prevTasks.push(obj);
        localStorage.setItem('tasks', JSON.stringify(prevTasks));
    }
}

export function Remove(index) {
    let currTasks = JSON.parse(localStorage.getItem('tasks'));
    // Delete from localstorage at index
    if (index >= 0) {
        currTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(currTasks));
        if (currTasks.length === 0) localStorage.removeItem('tasks');
    }
}

export function SettingsUpdate(prop) {
    if (prop != null) {
        if (localStorage.getItem('settings') == null) {
            let settings = {"autoColor": true, "autoSort": true, "theme": true};
            localStorage.setItem('settings', JSON.stringify(settings));
        }
        const prevSettings = JSON.parse(localStorage.getItem('settings'));
        prevSettings[prop] = !prevSettings[prop]
        localStorage.setItem('settings', JSON.stringify(prevSettings));
    }
}