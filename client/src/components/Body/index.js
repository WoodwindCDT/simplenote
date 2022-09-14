import React, {useState} from "react";
import { setter } from "../../assets/Action";
import Canvas from "../Canvas";
import Navigator from "../Navigator";
import Setting from "../Setting";

// Body will contain modal and main canvas for tasks
export default function Body() {

    // Default for Settings
    if (localStorage.getItem('settings') === null) {
        let settings = {"autoColor": true, "autoSort": true, "theme": true};
        localStorage.setItem('settings', JSON.stringify(settings));
    }

    // Initial Setter for displays
    const [set, setSet] = useState(false);
    const [add, setAdd] = useState(false);
    const [rem, setRem] = useState(false);

    // Functions for displays
    const startSet = () => setSet(val => !val);
    const startRem = () => setRem(val => !val);
    const startAdd = () => setAdd(val => !val);

    if (set) {
        return (
         <>
            <Setting />
            <button onClick={startSet}>Return</button>
         </>
        )
    }
    // Settings is not active
    return (
    <>
        <Canvas add={add} remove={rem} />
        <Navigator setAdd={startAdd} setRem={startRem} />
        <button onClick={startSet}>Settings</button>
        {setter()}
        {/* Setter function added to adjust coloring, sorting, or theme on build */}
    </>
    )
}