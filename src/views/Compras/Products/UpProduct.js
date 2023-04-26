import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function UpProduct() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "center", marginTop: 50, marginLeft: 600, width: 400 }}>
                <h2>Detalles del producto</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre del libro</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa los datos..." />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa los datos..." />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa los datos..." />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="file" placeholder="Ingresa los datos..." />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Sinopis</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Dar de alta
                    </Button>

                </Form>
            </div>
                
        </>
    )
}