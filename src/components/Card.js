import React from "react";
import { Button } from "react-bootstrap";

export default function Card(props){
    const {nombre, autor, precio, anio, stock, imagen} = props.data;
    return (
        <div style={{width: "10%", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
        <div style={{ backgroundColor: "#e1b683", borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <img src={imagen} width={"100%"} ></img>
            <div style={{fontSize: 16}}>{nombre}</div>
            <div style={{fontSize: 16}}>{autor}</div>
            <div style={{fontSize: 16}}>{anio}</div>
            <div style={{fontSize: 16}}>En stock: {stock}</div>
            <div style={{fontSize: 16}}>Precio: ${precio}</div>
        </div>
        <Button variant="light">Comprar</Button>
        </div>
    )
}