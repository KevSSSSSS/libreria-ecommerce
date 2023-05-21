import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function CallsView() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "center", marginTop: 50, marginLeft: 600, width: 400,  border: "solid", padding: 10}}>
                <h2>Datos de la solicitud:</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Nombre del cliente:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Correo electrónico:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{'Horario de disponibilidad:'}</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de la situación:</Form.Label>
                        <Form.Control as="textarea" disabled rows={3} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" style={{ marginLeft: 150 }}>
                        Atendido
                    </Button>
                    
                </Form>
            </div>
               
        </>
    )
}