import React, { useState } from "react";
import { productos } from "../data/Products";
import { Form, Button, Image } from "react-bootstrap";
import { colors } from "../constants/constants";

//Importaciones de componentes
import MasterPage from "../components/MasterPage";
import NavTabMenu from "../components/NavTabMenu";
import CardBooks from "../components/Card";
import BannerHome from "../components/BannerHome";

import { categories } from "../data/Categories";

export default function Home() {
    let contador = 0;

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <BannerHome/>
            <div style={{ backgroundColor: "#ebebeb" }}>
                <div style={{ marginLeft: 40, marginRight: 40 }}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h2 style={{ marginRight: 20 }}>Libros</h2>
                        <div >Ver más</div>
                    </div>
                    <div style={{ width: "100%", backgroundColor: "#ebebeb", alignItems: "center", justifyContent: "space-around", display: "flex", padding: 20 }}>
                        {productos.slice(0, 6).map((book) => {
                            return (
                                <CardBooks data={book}></CardBooks>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}