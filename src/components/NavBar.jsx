import React from "react";
const NavBar = () => {
    let estilo = {
        color: "white",
        backgroundColor: "pink",
        padding: "20",
        paddingTop: "20px",
        paddingBottom: "20px"

    };

    return (
        <div style={estilo}>
            <p>Encabezado!</p>
            <hr />
        </div>
    )
}

export default NavBar; 