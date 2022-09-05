import React from "react";
import { Add } from "../Pin";

function objControl() {
    let note = {"time": new Date().toLocaleTimeString(), desc: document.getElementsByName("desc")[0].value};
    Add(note);
}

export default function Modal() {
    return (
        <div className="modal">
            <form onSubmit={() => {objControl();}}>
                <textarea name="desc" required autoFocus={true} placeholder="description here" />
                <input type="submit" value="create note"/>
            </form>
        </div>
    );
}   