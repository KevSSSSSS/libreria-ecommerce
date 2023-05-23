import React, { useContext, useState } from "react";
import { colors } from "../../constants/constants";


//Iconos
import {FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";

export default function TabMenuHomeAdmin() {

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", display: "flex", padding: 20 }}>
            <Link to={"/viewemp"} style={{ marginRight: "15vh",textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <FaUsers size={25} style={{ marginRight: 8 }} />
                    Ver Empleados
                </Button>
            </Link>
        </div >
    )
}