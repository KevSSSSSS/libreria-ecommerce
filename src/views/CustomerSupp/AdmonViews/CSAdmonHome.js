import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function CSAdmonHome() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>
            <div style={{ marginTop: 50, marginLeft: 200, marginRight: 100, border: "solid", padding: 10, paddingBottom: 150 }}>
                <h3>Revisar solicitudes de: </h3>
                <div style={{ padding: 10, paddingTop: 50 }}>
                <a href="/allcalls">
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 400 }}>Llamada</Button>
                </a>
                <a href="/allmails">
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 400 }}>Correo</Button>
                </a>
                </div>
            </div>
            
            <div style={{ marginTop: 10, marginLeft: 200, marginRight: 100, border: "solid" }}>
                <h3 style={{ marginLeft: 690 }}> Horario de atención </h3>

                <div style={{ padding: 15, border: "solid", marginRight: 900, marginLeft: 100, marginTop: 15 }}>
                <h3 style={{ marginLeft: 50 }}> Para llamadas </h3>
                    <p>El horario de atención de llamadas esta establecido de:</p>
                    <p>Lunes a Viernes de: 8:00 a.m. a 10:00 p.m.</p>
                    <p>Sábados y Domingos de 8:00 a.m. a 7:00 p.m.</p>
                </div>
                <div style={{ padding: 15, border: "solid", marginLeft: 900, marginRight: 100,  marginTop: -195, marginBottom: 5  }}>
                <h3 style={{ marginLeft: 50}}> Para correos </h3>
                    <p> El horario de atención de correos esta establecido de:</p>
                    <p>  Lunes a Viernes de: 7:00 a.m. a 10:00 p.m.</p>
                    <p>   Sábados y Domingos de 8:00 a.m. a 8:00 p.m.</p>
                </div>

            </div>
        </>
    )
}