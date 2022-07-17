import React from "react";

function Keypad() {
    function passwordEnter() {
        console.log('Entering password...');
    }
    return (
        <>
            <input
                type="password"
                onChange={passwordEnter}
            />
        </>
    )
}

export default Keypad;