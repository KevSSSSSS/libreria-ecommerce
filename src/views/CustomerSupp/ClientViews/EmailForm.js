import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function EmailForm() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "center", marginTop: 50, marginLeft: 600, width: 400,  border: "solid", padding: 10 }}>
                <h2>Formulario del correo:</h2>
                <Form>
                <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Ingresa tu nombre" 
                        required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control 
                        type="emaol" 
                        placeholder="Ingresa tu correo electrónico" 
                        required
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Horario de disponibilidad:</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>8:00</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de la situación:</Form.Label>
                        <Form.Control 
                        as="textarea" 
                        rows={5} 
                        required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Enviar
                    </Button>

                </Form>
            </div>
               
        </>
    )
}