import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function DownProduct() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "right", marginTop: 50, marginRight: 500, marginLeft: 500, width: 600, border: "solid", padding: 15}}>
                <h3>Detalles del producto</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formIDProduct">
                        <Form.Label>Clave:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Texto obtenido de la BD" 
                        disabled
                        />                     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Texto obtenido de la BD" 
                        disabled 
                        />                     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formAutor">
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Texto obtenido de la BD" 
                        disabled 
                        />                     
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 200 }}>
                        Dar de baja del negocio
                    </Button>
                    <Button variant="primary" type="submit" style={{ marginLeft: 200, marginTop:30 }}>
                        Eliminar una unidad del inventario
                    </Button>

                </Form>
            </div>
            <div style={{ float: "left", marginTop: -430, marginLeft: 80, width: 300, border: "solid", padding: 10}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formIDSelect">
                        <h3>Selecciona la clave del producto</h3>
                        <Form.Select aria-label="Default select example">
                            <option>Clave del producto</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                </Form>
            </div>

        </>
    )
}