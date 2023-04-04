import React, { useState } from "react";
import { colors } from "../constants/constants";

//Iconos
import { BsFillHouseFill, BsFillBookmarksFill, BsFillCartFill, BsFillPersonFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { categories } from "../data/Categories";

export default function NavTabMenu() {

    return (
        <div style={{ width: "100%", height: "5vh", backgroundColor: colors.primary, alignItems: "center", justifyContent: "space-between", display: "flex", padding: 20 }}>
            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                <BsFillHouseFill size={24} style={{ marginRight: 6 }} />
                Inicio
            </Button>
            <Dropdown>
                <Dropdown.Toggle style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }}>
                    <BsFillBookmarksFill size={24} style={{ marginRight: 6 }} />
                    Categorias
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {categories.map((cat) => {
                        return (
                            <Dropdown.Item style={{ backgroundColor: colors.white }}>{cat}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                <BsFillCartFill size={24} style={{ marginRight: 6 }} />
                Carrito
            </Button>
            <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16, alignItems: "center", display: "flex" }} type="submit">
                <BsFillPersonFill size={24} style={{ marginRight: 6 }} />
                Cuenta
            </Button>
            <div>
                <Link to={"/login"}>
                    <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginRight: 16 }} type="submit">
                        Iniciar sesion
                    </Button>
                </Link >
                <Link to={"/register"}>
                <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary }} type="submit">
                    Registrarse
                </Button>
                </Link>
            </div>
        </div>
    )
}