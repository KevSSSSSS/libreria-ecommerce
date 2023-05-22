import React, { useContext, useState } from "react";
import { colors } from "../../constants/constants";


//Iconos
import { BsBoxSeam } from "react-icons/bs";
import {RiOrderPlayFill} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";

export default function NavTabMenu() {

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, alignItems: "center", justifyContent: "center", display: "flex", padding: 20 }}>
            <Link to={"/ordenes"} style={{ marginRight: "15vh",textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <RiOrderPlayFill size={20} style={{ marginRight: 8 }} />
                    Ordenes
                </Button>
            </Link>
            <Link to={"/paqueterias"} style={{ textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BsBoxSeam size={24} style={{ marginRight: 8 }} />
                    Paqueterias
                </Button>
            </Link>
        </div >
    )
}