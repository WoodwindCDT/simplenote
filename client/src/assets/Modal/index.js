import React from "react";
import { Add } from "../Pin";

function objControl() {
    const date =  document.getElementById("dueBy").value;
    let note = {};
    (date !== "") ? note = {"due": date, "time": new Date().toLocaleTimeString(), "desc": document.getElementsByName("desc")[0].value, "note": false} : note = {"time": new Date().toLocaleTimeString(), "desc": document.getElementsByName("desc")[0].value, "note": true};
    Add(note);
}

export default function Modal() {
    return (
        <div className="modal">
            <form onSubmit={() => {objControl()}}>
                <textarea name="desc" required autoFocus={true} placeholder="description here" />
                <input type="date" id="dueBy" min={new Date().toLocaleDateString('en-CA')}></input>
                <input type="submit" value="Pin"/>
            </form>
        </div>
    );
}   