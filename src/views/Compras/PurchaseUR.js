import React from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function PurchaseUR() {
    return (
        <>
            <MasterPage/>
            <NavTabMenu/>
            <div style={{ width: "100%", padding: 50, paddingLeft: 10, alignItems: "center"}}>
            <h1>Visualizar</h1>
            <div style={{paddingLeft: 30}}>
            <Button variant = "info" size="lg" style={{ padding: 15}}>Pedidos</Button>  
            </div>
           
            </div>
            
            <div style={{ width: "100%", padding: 50, paddingLeft: 150 }} >
            <h1>Visualizar</h1>
            <Button variant = "info" size="lg">Proveedores</Button>  
            </div>
        </>
    )
}