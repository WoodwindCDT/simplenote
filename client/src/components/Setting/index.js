import React, { useState } from "react";
import { SettingsUpdate } from "../../assets/Pin";
import { setter } from "../../assets/Action";

function getSettings() {
    return JSON.parse(localStorage.getItem('settings'));
}

export default function Setting() {
    const [set, setSettings] = useState(getSettings());
    const settings = set;
    const a = settings.autoColor;
    const b = settings.autoSort;
    const c = settings.theme;
    return (
        <div>
            <li>
                <ul>
                    <h1>Current Theme: {c ? "Dark" : "Light"}</h1>
                    <button id="theme" className="theme-btn" onClick={(e) => {SettingsUpdate(e.target.id); setSettings(getSettings()); setter(set)}}>Switch to {c ? "Light" : "Dark"} Mode</button>
                    <h1>Allow Auto-Color: {a ? "Active" : "In-Active"}</h1>
                    <button id="autoColor" className="autoColor-btn" onClick={(e) => {SettingsUpdate(e.target.id); setSettings(getSettings());}}>Turn {a ? "Off" : "On"} Automatic Coloring</button><br />
                    <h1>Allow Auto-Sort {b ? "Active" : "In-Active"}</h1>
                    <button id="autoSort" className="autoSort-btn" onClick={(e) => {SettingsUpdate(e.target.id); setSettings(getSettings())}}>Turn {b ? "Off" : "On"} Automatic Sorting</button><br />
                </ul>
            </li>
        </div>
    );
}