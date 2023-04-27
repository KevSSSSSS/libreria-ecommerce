import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function AllCalls() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>
            <div style={{ marginTop: 50, marginLeft: 200, marginRight: 100, border: "solid", padding: 10, paddingBottom: 150 }}>
                <h3>Solicutudes de llamada: </h3>
                <div style={{ padding: 10, paddingTop: 50, marginRight: 600 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID de la solicitud</th>
                                <th>Hora de la solicitud</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>15</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div style={{ padding: 10, paddingTop: 50, marginLeft: 800, marginRight: 5, marginTop: -250 }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID de la solicitud</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa los datos..." />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Revisar
                    </Button>
                </Form>
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
                <div style={{ padding: 15, border: "solid", marginLeft: 800, marginRight: 100, marginTop: -225 }}>
                    <p> El horario de atención de correos esta establecido de:</p>
                    <p>  Lunes a Viernes de: 7:00 a.m. a 10:00 p.m.</p>
                    <p>   Sábados y Domingos de 8:00 a.m. a 8:00 p.m.</p>
                </div>
            </div>
        </>
    )
}