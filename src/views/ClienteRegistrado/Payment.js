import React, { useContext, useState } from "react";

import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { baseUrlAPI } from "../../constants/constants";
import { UserContext } from "../../models/UserContext";

export default function Payment() {

    const { user } = useContext(UserContext);

    const location = useLocation();

    const importe = location.state.total;
    const fecha = location.state.fecha;
    const cart = location.state.cart;

    const [metodoDePago, setMetodoDePago] = useState({});

    const postMetodoPago = () => {
        let metodo = { id_usuario: user.id_usuario, tarjeta: "87887782", fecha_expiracion: "10-03-2023", titular: user.nombre + user.apellido_p + user.apellido_m, cvv: "757" };
        console.log(metodo);
        fetch("http://localhost:4000/test/" + "metodospago", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(metodo)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postPedido = () => {
        let pedido = { id_usuario: user.id_usuario, fecha: "10-03-2023", total: importe, direccion: "Calle la paz sin numero", estatus: "Sin enviar" };
        fetch("http://localhost:4000/test/" + "pedidos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        })
            .then(response => response.json())
            .then(data => {
                postDetallePedido(data.body.insertId);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const postDetallePedido = (id_pedido) => {
        cart.map((libro) => {
            console.log(libro);
            let detalle = {id_pedido: id_pedido, id_libro: libro.id_libro, cantidad: libro.cantidad, precio_unitario: libro.precio};
            fetch("http://localhost:4000/test/" + "detallespedidos", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detalle)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.code === 200) {
                        //Hacer algo
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        })
    }
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ width: "100%", display: "flex" }}>
                <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h2>Datos de la operación</h2>
                    <Form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Form.Group>
                            <Col>
                                <Row>
                                    <Form.Label>Importe: </Form.Label>
                                    <Form.Label>$ {importe}</Form.Label>
                                </Row>
                                <Row>
                                    <Form.Label>Fecha: </Form.Label>
                                    <Form.Label>{fecha.toDateString()}</Form.Label>
                                </Row>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
                <div style={{ width: "50%", marginTop: 100, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h2>Datos de pago</h2>
                    <Form style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Form.Group>
                            <Form.Label>No. Tarjeta </Form.Label>
                            <Form.Control type="number"></Form.Control>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                                <Form.Label size="sm">Mes: </Form.Label>
                                <Form.Control type="number" size="sm" style={{ width: "30%" }}></Form.Control>
                                <Form.Label size="sm" style={{ marginLeft: 40 }}>Año: </Form.Label>
                                <Form.Control type="number" size="sm" style={{ width: "30%" }}></Form.Control>
                            </div>
                            <Form.Label>CVV: </Form.Label>
                            <Form.Control type="number"></Form.Control>
                            <Button style={{ marginTop: 50, marginRight: 20 }}>Cancelar</Button>
                            <Button style={{ marginTop: 50, marginRight: 20 }} onClick={() => { postMetodoPago(); postPedido(); }}>Pagar</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}