import React from "react";
import Modal from "../../assets/Modal";
import GetNote from "../../assets/GetNote";

// rem = remove function
// add = add task function
export default function Canvas(props) {
    return (
        <>
            <div className="sct-1">
                <GetNote rem={props.remove} />
                {props.add ? <Modal /> : null}
            </div>
        </>
    );
}