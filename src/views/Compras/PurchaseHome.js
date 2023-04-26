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
            <div style={{marginTop: 100, marginLeft: 300, marginRight: 150, border: "solid"}}>   
            <h1>Productos: </h1>
                <div style={{padding: 100}}>
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Visualizar producto por ID</Button>
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Modificar datos</Button>  
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de alta</Button>  
                <Button variant = "info" size="lg" style={{ padding: 15, marginLeft: 20}}>Dar de baja</Button> 
                </div>
            </div>
        </>
    )
}