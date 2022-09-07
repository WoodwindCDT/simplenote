import React, {useState} from "react";
import Canvas from "../Canvas";
import Navigator from "../Navigator";

// Body will contain modal and main canvas for tasks
export default function Body() {
    const [add, setAdd] = useState(false);
    const [rem, setRem] = useState(false);

    const startRem = () => setRem(value => !value);
    const startAdd = () => setAdd(value => !value);

    return (
    /* OnClick functionality to add new sticky note */
    <>
        <Canvas add={add} remove={rem}/>
        <Navigator setAdd={startAdd} setRem={startRem}/>
    </>
    )
}