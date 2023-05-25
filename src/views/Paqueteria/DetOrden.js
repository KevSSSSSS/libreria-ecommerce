import React, { useEffect, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";
import { useLocation } from "react-router";
import { baseUrlAPI, colors, fontFamily } from "../../constants/constants";
import { Link, useNavigate } from "react-router-dom";

export default function DetOrden() {

    const location = useLocation();
    const solicitud = location.state.fila;

    const [user, setUser] = useState([]);
    const filtrarusuario = user.filter(user => user.id_usuario = solicitud.id_usuario);
    console.log(solicitud.id_usuario);
    console.log(filtrarusuario);

    useEffect(() => {
        fetch(`${baseUrlAPI}usuarios`)
        .then(response => response.json())
        .then(data => {
            setUser(data)
        });
    }, [])

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary}}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "35px", marginTop: "5px"}}>Detalle de Orden</h4>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "25px"}}>ID: {solicitud.id_pedido}</h4>
                    <div style={{ marginTop: 30, justifyContent: "start"}} >
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
                            <p>Nombre del Cliente: {filtrarusuario.nombre}</p>
                        </div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
                            <p>Fecha de Pedido: </p>
                        </div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
                            <p>Total: </p>
                        </div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
                            <p>Direccion: </p>
                        </div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
                            <p>Estatus: </p>
                        </div>         
                        <div style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}></div>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80, marginRight: 80 }}  type="submit">
                            Confirmar
                        </Button>
                        <Link to={"/ordenesnoenv"}>
                        <Button size="lg" style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 80 }} >
                            Cancelar
                        </Button>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
        

}