import React, { useContext, useState } from "react";
import { Button, Form, Image, Spinner } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../constants/constants";
import fondo from "../../assets/background1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../models/UserContext";


export default function EnvioOrden() {

    return (
        <>
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`, backgroundSize: "cover", backgroundColor: `rgb(40,40,40)`, backgroundBlendMode: "soft-light",}}>
            <div style={{ width: "50%", height: "60vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary, fontSize: "30px"}}>Envío de Orden</h4>
                    <Form style={{ marginTop: 30 }} >
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Introduzca su email" ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" name="contrasena" placeholder="Introduzca su contraseña" ></Form.Control>
                        </Form.Group>
                        <div style={{ color: "red", marginTop: 8 }}>Los dos campos son requeridos.</div>
                        <div style={{ color: "red", marginTop: 8 }}>El correo o contraseña están incorrectos.</div>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }}  type="submit">
                            Entrar
                        </Button>
                    </Form>
                    <div style={{ marginTop: 20 }}>¿Aún no tienes una cuenta? Registrate gratis</div>
                    <Link to={"/register"}>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 5 }} >
                            Registrarse
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
        

}