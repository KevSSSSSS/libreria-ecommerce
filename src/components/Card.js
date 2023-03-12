import React from "react";

export default function Card(props){
    const {nombre, autor, precio, anio, stock, imagen} = props.data;
    return (
        <div style={{width: "16%", height: "40vh", backgroundColor: "#CCCCCC", borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <img src={imagen} width={"60%"}></img>
            <div style={{fontSize: 12}}>{nombre}</div>
            <div style={{fontSize: 12}}>{autor}</div>
            <div style={{fontSize: 12}}>{anio}</div>
            <div style={{fontSize: 12}}>En stock: {stock}</div>
            <div style={{fontSize: 12}}>Precio: ${precio}</div>
        </div>
    )
}