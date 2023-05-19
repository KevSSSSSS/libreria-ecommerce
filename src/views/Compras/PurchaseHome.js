import React from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function PurchaseHome() {
    return (
        <>
            <MasterPage/>
            <NavTabMenu/>
            <h1 style={{marginLeft:600}}>Bienvenido @user</h1>
            <div style={{marginTop: 100, marginLeft: 300, marginRight: 150, border: "solid", padding: 20}}>   
            <h1>Productos: </h1>
                <div style={{padding: 100}}>
                <a href="/viewproducts">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Visualizar producto por ID</Button>
                </a>
                <a href="/modproducts">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Modificar datos</Button>  
                </a>
                <a href="/upproduct">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de alta</Button>  
                </a>
                <a href="/downproduct">
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de baja</Button> 
                </a>
                </div>
            </div>
        </>
    )
}