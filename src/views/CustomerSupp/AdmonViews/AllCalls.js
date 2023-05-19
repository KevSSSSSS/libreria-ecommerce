import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export default function AllCalls() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 700 }}>Bienvenido @user</h1>
            <div style={{ marginTop: 50, marginLeft: 200, marginRight: 100, border: "solid", padding: 10, paddingBottom: 150 }}>
                <h3>Solicutudes de llamada: </h3>
                <div style={{ padding: 10, paddingTop: 50, marginRight: 800 }}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Clave de la solicitud</th>
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
                <Form.Group className="mb-3" controlId="formIDSelect">
                        <FloatingLabel controlId="floatingSelect" label="Selecciona la clave de la solicitud">

                            <Form.Select aria-label="Default select example">
                                <option>Clave de la solicitud</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Revisar
                    </Button>
                </Form>
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