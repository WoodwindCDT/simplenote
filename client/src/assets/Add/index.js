export default function Add(obj) {
    // Initially no localstorage, only on creation will a set exist
    if (localStorage.length < 1) {
        let tasks = [];
        localStorage.setItem("tasks", JSON.stringify(tasks));
        return;
    };

    let prevTasks = JSON.parse(localStorage.getItem('tasks'));
    if (obj != null) {
        prevTasks.push(obj);
        localStorage.setItem('tasks', JSON.stringify(prevTasks));
    }
}