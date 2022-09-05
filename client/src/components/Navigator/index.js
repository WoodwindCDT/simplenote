import React from "react";
import Add from "../../assets/Add";

export default function Navigator(props) {
    return (
        <>
            <div className='sct-2 nav'>
                <li>
                    <button onClick={() => {Add(); props.setAdd();}}>Add</button>
                    <button onClick={() => {props.setRem();}}>Remove</button>
                </li>
            </div>
        </>
    );
}   