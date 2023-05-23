import React, { useContext } from "react";

import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import BannerHome from "../../components/BannerHome";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../models/UserContext";

export default function Cart() {

    const { cart } = useContext(UserContext);

    console.log(cart);

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <BannerHome />
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h2>Carrito de compra</h2>
                {cart.map((b) => {
                    return (
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                            <Image src={b.foto} width={"8%"} height={"200vh"} style={{ borderRadius: 10 }}></Image>
                            <div>{b.titulo}</div>
                            <div>{b.stock} unidades</div>
                            <div>$ {b.precio}</div>
                        </div>
                    )
                })}
                <Link to={"/payment"}>
                    <Button>Comprar</Button>
                </Link>
            </div>
        </>
    )
}