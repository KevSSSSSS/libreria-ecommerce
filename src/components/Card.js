import React from "react";
import { Button, Image } from "react-bootstrap";
import { colors, fontFamily } from "../constants/constants";

export default function CardBooks(props){
    const {nombre, autor, precio, anio, stock, imagen} = props.data;
    return (
        <div style={{width: "10%",borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)'}}>
        <div style={{ backgroundColor: colors.white, borderRadius: 10, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
            <Image src={imagen} width={"100%"} height={"250vh"} style={{borderRadius: 10}}></Image>
            <div style={{fontSize: 16, fontFamily: fontFamily.primary}}>{nombre}</div>
            <div style={{fontSize: 12, fontFamily: fontFamily.primary}}>{autor}</div>
            <div style={{fontSize: 14, fontFamily: fontFamily.primary}}>{anio}</div>
            <div style={{fontSize: 16, fontFamily: fontFamily.primary}}>En stock: {stock}</div>
            <div style={{fontSize: 16, fontFamily: fontFamily.primary}}>Precio: ${precio}</div>
        </div>
        </div>
    )
}