import React, { useState } from 'react';
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { baseUrlAPI } from '../../../constants/constants';

export default function ModProducts() {

    const [prod, setProd] = useState([]);
    function est(){
        fetch(`${baseUrlAPI}productos/id_producto=1`)
        .then((data) => {
            setProd(data);
            //Aqui te trae la informaciön y de la tabla y la muestra en consola
            console.log(data);
        })
        .catch((e) => {
            // Te imprime eI error en caso de que haya
            console.log(e);
        })

    }

    

    return (
        <>
            <MasterPage />
            <NavTabMenu />

            <div style={{ float: "right", marginTop: 50, marginRight: "10%", marginBottom: "2%", width: "40%", border: "solid", padding: 15 }}>
                <h3>Detalles del producto</h3>

                <Form>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Título del libro:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            defaultValue={prod.algo}

                        />
                        <Form.Text className="text-muted"> Escribe el título del libro
                        
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Autor:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Texto obtenido de la BD"

                        />

                        <Form.Text className="text-muted">Escribe el nombre del autor</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formNumber">
                        <Form.Label>Precio:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Texto obtenido de la BD"

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

                    <Button
                        variant="info" size="lg"
                        type="sumbit"
                        style={{ padding: 15, marginLeft: 250 }}>Modificar
                    </Button>

                </Form>


            </div>
            <div style={{ float: "left", marginTop: "5%", marginLeft: "5%", width: "30%", border: "solid", padding: 10 }}>
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