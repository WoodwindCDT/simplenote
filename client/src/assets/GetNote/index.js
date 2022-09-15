import React, { useState } from "react";
import { Remove } from "../../assets/Pin";
import {getColor, getTheme, getSort} from "../../assets/Getters";

function colorCalc(prop) {
    if (prop != null) {
        let today = new Date();
        var diffMs = (new Date(prop) - today); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        return '60, ' + diffDays + ', 225';
    }
    return null;
}

function getTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (getSort()) {
        if (storedTasks != null) {
            storedTasks.sort((a,b) => (a.due > b.due) ? 1 : ((b.due > a.due) ? -1 : 0)); // auto sort for due date!
            return storedTasks.sort((a, b) => Number(a.note) - Number(b.note)); // auto sort for assignments first!
        }
    }
    return storedTasks;
}

export default function GetNote(props) {
    const [tasks, setTasks] = useState(getTasks());

    if (tasks != null ) {
        let board = [];
        for (let i = 0; i < tasks.length; i++) {
            let a = tasks[i].desc;
            board.push(
                <div id={i} key={i} className="container" style={(getColor()) ? {background: (tasks[i].note) ? null : `rgb(${colorCalc(tasks[i].due)})`} : {border: getTheme() ? null : '2px dashed black'}}>
                    <div className="desc">
                        {a}
                    </div>
                    <span className="time">{tasks[i].due ? "Due: " + tasks[i].due : "Pinned: " + tasks[i].time}</span> <br />
                    {props.rem ? <button className="btn-rem" onClick={(e) => {Remove(e.target.parentNode.id); setTasks(getTasks())}}>DELETE</button> : null}
                </div>
            ); 
        }
        return board;
    }
    return "No Notes Pinned! Click \"Add\" Below to Begin :)";
}