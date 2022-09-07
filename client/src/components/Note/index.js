import React from "react";
import { Remove } from "../../assets/Pin";

// function to adjust color gradient over time
function colorCalc(prop) {
    if (prop != null) {
        let today = new Date();
        var diffMs = (new Date(prop) - today); // milliseconds between now & Christmas
        var diffDays = Math.floor(diffMs / 86400000); // days
        return '165, ' + diffDays + ', 60';
    }
    return null;
}

// props.rem to SHOW delete button
export default function Note(props) {
    if (props.tasks != null) {
        let board = [];
        for (let i = 0; i < props.tasks.length; i++) {
            let a = props.tasks[i].desc;
            board.push(
                <div id={i} key={i} className="container" style={{background: `rgb(${colorCalc(props.tasks[i].due)})`}}>
                    <div className="desc">
                        {a}
                    </div>
                    <span className="time">{props.tasks[i].due ? "Due: " + props.tasks[i].due : "Pinned: " + props.tasks[i].time}</span> <br />
                    {props.rem ? <button className="btn-rem" onClick={(e) => Remove(e.target.parentNode.id)}>X</button> : null}
                </div>
            ); 
        }
        return board;
    }
    return "no notes!";
} 