import React from "react";
import Note from "../../components/Note";

function getTasks() {
    let storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks;
} 

export default function GetNote(props) {
    return (
        <Note rem={props.rem} tasks={getTasks()}/>
    );
}   