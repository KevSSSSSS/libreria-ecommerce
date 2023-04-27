import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";

export default function Privacity() {
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
                    <Button variant="info" size="lg" style={{ padding: 15, marginLeft: 1050, marginTop: -60, marginRight: 80 }}>Métodos de pago</Button>
                </div>
            </div>
            <div style={{ marginTop: 10, marginLeft: 200, marginRight: 100, border: "solid", padding: 20 }}>
                <h3 style={{ marginLeft: 0}} >Aviso de privacidad. </h3>
                <div style={{ padding: 10, marginLeft: 50, border: "solid"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget lectus suscipit, dictum ipsum vel, accumsan nisi. 
                Nunc non tortor non nibh iaculis pellentesque. 
                Nullam scelerisque dui purus, in feugiat metus consequat eget. Suspendisse eget nulla ipsum.
                </div>
            </div>

            <div style={{ marginTop: 10, marginLeft: 200, marginRight: 100, border: "solid" }}>
                <h3 style={{ marginLeft: 500 }}> Horario de atención </h3>
                <h3 style={{ marginLeft: 200 }}> Para llamadas </h3>
                <h3 style={{ marginLeft: 850, marginTop: -40 }}> Para correos </h3>
                <div style={{ padding: 15, border: "solid", marginRight: 800, marginLeft: 100 }}>
                    <p>El horario de atención de llamadas esta establecido de:</p>
                    <p>Lunes a Viernes de: 8:00 a.m. a 10:00 p.m.</p>
                    <p>Sábados y Domingos de 8:00 a.m. a 7:00 p.m.</p>
                </div>
                <div style={{ padding: 15, border: "solid", marginLeft: 800, marginRight: 100, marginTop: -225}}>
                <p> El horario de atención de correos esta establecido de:</p>
                <p>  Lunes a Viernes de: 7:00 a.m. a 10:00 p.m.</p>
                <p>   Sábados y Domingos de 8:00 a.m. a 8:00 p.m.</p>
                </div>
            </div>
        </>
    )
}