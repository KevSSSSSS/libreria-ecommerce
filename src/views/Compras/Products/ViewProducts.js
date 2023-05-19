import React from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default function ViewProducts() {
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <h1 style={{ marginLeft: 600 }}>Bienvenido @user</h1>

            <div style={{ float: "right", marginTop: 50, marginRight: 500, marginLeft: 500, width: 600, border: "solid", padding: 15}}>
                <h3>Detalles del producto</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo del libro:</Form.Label>
                        <Form.Control 
                        type="text" 
                        
                        disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control 
                        type="text" 
                        
                        disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control 
                        type="text" 
                        
                        disabled
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Foto:</Form.Label>
                        <image></image>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Sinopis:</Form.Label>
                            <Form.Control 
                            as="textarea"
                            rows={5} 
                            disabled
                             />
                        </Form.Group>
                    
                </Form>
            </div>
            <div style={{ float: "left", marginTop: -500, marginLeft: 80, width: 300, border: "solid", padding: 10}}>
                <Form>
                <Form.Group className="mb-3" controlId="formIDSelect">
                    <FloatingLabel controlId="floatingSelect" label="Selecciona la clave del producto">
                        
                        <Form.Select aria-label="Default select example">
                            <option>Clave del producto</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                </Form>
            </div>

        </>
    )
}