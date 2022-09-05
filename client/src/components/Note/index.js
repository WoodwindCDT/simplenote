import React from "react";
import { Remove } from "../../assets/Pin";

// props.rem to SHOW delete button
export default function Note(props) {
    if (props.tasks != null) {
        let board = [];
        for (let i = 0; i < props.tasks.length; i++) {
            let a = props.tasks[i].desc;
            board.push(
                <div id={i} key={i} className="container">
                    <div className={props.rem ? "rem desc " : "desc"}>
                        {a}
                    </div>
                    <span className="time">{props.tasks[i].time}</span> <br />
                    {props.rem ? <button className="btn-rem" onClick={(e) => Remove(e.target.parentNode.id)}>X</button> : null}
                </div>
            ); 
        }
        return board;
    }
    return "no notes!";
} 