import React from "react";
import { Button, Form, Image } from "react-bootstrap";

import { colors, fontFamily } from "../constants/constants";
import fondo from "../assets/background1.jpg";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div style={{textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${fondo})`, backgroundSize: "cover"}}>
            <div style={{ width: "50%", height: "60vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <Image style={{ width: "20%", marginRight: 80 }} src="https://imgs.search.brave.com/ubuMxJsB94CNuWODv8lg-4lkoBvkm2xZos4nK7kKKkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC8wOS8wOTZk/ZWM1NTI1NTUxYTEw/NjAzZDIzMmRiNWMx/NjY1MS5wbmc"></Image>
                <div style={{ color: colors.terceary }}>
                    <h4 style={{ fontFamily: fontFamily.primary }}>¡Bienvenido!</h4>
                    <Form style={{ marginTop: 30 }}>
                        <Form.Group style={{ marginBottom: 20 }}>
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Introduzca su email"></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Introduzca su contraseña"></Form.Control>
                        </Form.Group>
                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} type="submit">
                            Entrar
                        </Button>
                    </Form>
                    <div style={{marginTop: 20}}>¿Aún no tienes una cuenta? Registrate gratis</div>
                    <Link to={"/register"}>
                    <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 5}} type="submit">
                        Registrarse
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}