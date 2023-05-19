import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default function UpProduct() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "center", marginTop: 50, marginLeft: 600, width: 400, border: "solid", padding: 10}}>
                <h2>Detalles del producto</h2>

                <Form>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Título del libro:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Text className="text-muted"> Escribe el título del libro</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />

                        <Form.Text className="text-muted">Escribe el nombre del autor</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />

                        <Form.Text className="text-muted">Escribe el precio</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formFile">
                        <Form.Label>Foto:</Form.Label>
                        <Form.Control
                            required
                            type="file"
                        />

                        <Form.Text className="text-muted">Inserta un archivo .jpg</Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Sinopsis:</Form.Label>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="¿De qué trata el libro?"
                            className="mb-3"
                        >
                            <Form.Control
                                required
                                as="textarea"
                                rows={5}

                            />
                        </FloatingLabel>
                        <Form.Text className="text-muted">Escribe la sinopsis del libro</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Dar de alta
                    </Button>

                </Form>
            </div>
                
        </>
    )
}