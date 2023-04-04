import React from "react";
import { Button, Form, Image } from "react-bootstrap";

import { colors, fontFamily } from "../constants/constants";
import fondo from "../assets/background1.jpg";

export default function Register() {
    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}>
            <div style={{ width: "50%", height: "60vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary, width: "100%" }}>
                    <h4 style={{ fontFamily: fontFamily.primary }}>Registrate gratis</h4>
                    <Form style={{ marginTop: 30, width: "100%" }}>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-evenly"}}>
                            <div>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Introduzca su email"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Introduzca su contraseña"></Form.Control>
                                </Form.Group>
                            </div>
                        </div>

                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </div>

            </div>
        </div >
    )
}