import React from "react";
import GetRandomAffirmation from "../Affirmations";

const Footer = () => {
    const style = {
        width: '100%'
    }
    return (
        <div style={style}>
            <GetRandomAffirmation/>
        </div>
    )
}

export default Footer