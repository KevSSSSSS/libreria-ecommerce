import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function CSHome() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>
            <div style={{ marginTop: 50, marginLeft: 200, marginRight: 100, border: "solid", padding: 10 }}>
                <h3>¿Necesitas ayuda con...? </h3>
                <div style={{ padding: 10 }}>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 70 }}>Administrar tus pedidos</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 70 }}>Rastrear un paquete</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 70 }}>Devoluciones</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 70 }}>Cuenta</Button>
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 1050, marginTop: -90, marginRight: 80 }}>Métodos de pago</Button>
                </div>
            </div>

            <div>
            <div style={{ marginTop: 10, marginLeft: 200, marginRight: 100, border: "solid", float: "left", padding: 20 }}>
                <h3 style={{ marginLeft: 200 }} >Opciones de atención: </h3>
                <div style={{ padding: 10, marginLeft: 50 }}>
                <a href="/callform">
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 20 }}>Llamada</Button>
                </a>
                <a href="/emailform">    
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 300 }}>Correo</Button>
                </a>
                </div>
            </div>
            <div style={{ marginTop: 10, marginRight: 100, border: "solid", float: "right", padding: 30, marginRight: 300}}>
                <div style={{ padding: 10 }}>
                <a href="/terms">
                    <h3>Términos y condiciones de uso. </h3>
                </a>
                <a href="/privacity">
                    <h3 style={{ marginLeft: 100 }}>Aviso de privacidad. </h3>
                </a>
                </div>
            </div>
            </div>
            
            <div style={{ marginTop: 190, marginLeft: 200, marginRight: 100, border: "solid" }}>
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