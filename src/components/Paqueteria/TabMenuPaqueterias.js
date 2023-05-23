import React, { useContext, useState } from "react";
import { colors } from "../../constants/constants";


//Iconos
import { BsBoxSeam } from "react-icons/bs";
import {BiHomeAlt2} from "react-icons/bi";
import {FaBoxOpen} from "react-icons/fa";
import {IoIosCheckbox} from "react-icons/io";
import {TbCubeSend} from "react-icons/tb";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function TabMenuPaqueterias() {

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, display: "flex", padding: 20 }}>
            <Link to={"/homepaq"} style={{textDecoration: "none" }}>
                <Button style={{fontSize: "19px", backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                    <BiHomeAlt2 size={20} style={{ marginRight: 8 }} />
                    Nueva Paqueteria
                </Button>
            </Link>
        </div >
    )
}