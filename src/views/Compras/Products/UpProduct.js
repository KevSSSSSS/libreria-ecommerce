import React, { useContext, useState } from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { UserContext } from "../../../models/UserContext";


export default function UpProduct() {
    const {user} = useContext(UserContext);

    const [form, setForm] = useState({ titulo: "", autor: "", precio: "", foto: "", sinopsis: "", activo: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const campoActivo = "1";
        form.activo = campoActivo;
        
        console.log(form);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />

            <div style={{ float: "center", marginTop: "5%", marginLeft: "35%", width: "40%", border: "solid", padding: 10}}>
                <h2>Detalles del producto</h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Título del libro:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="titulo"
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted"> Escribe el título del libro</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="autor"
                            onChange={handleChange}
                        />

                        <Form.Text className="text-muted">Escribe el nombre del autor</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="precio"
                            onChange={handleChange}
                        />

                        <Form.Text className="text-muted">Escribe el precio</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Foto:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="foto"
                            onChange={handleChange}
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
                                name="sinopsis"
                                onChange={handleChange}
                            />
                        </FloatingLabel>
                        <Form.Text className="text-muted">Escribe la sinopsis del libro</Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: "30%" }}>
                        Dar de alta
                    </Button>

                </Form>
            </div>
                
        </>
    )
}