import React, { useContext, useEffect, useState } from "react";

import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Table, Form, Container, Button } from "react-bootstrap";
import { UserContext } from "../../models/UserContext";
import { baseUrlAPI } from "../../constants/constants";

export default function Devoluciones() {

    const { user } = useContext(UserContext);

    const [ordenes, setOrdenes] = useState([]);


    useEffect(() => {
        getOrdenes();
    }, [])

    const getOrdenes = () => {
        fetch(baseUrlAPI + "pedidos?id_usuario=" + user.id_usuario)
            .then(response => response.json())
            .then((data) => {
                ordenarOrden(data);
            })
            .catch((e) => {

            })
    }

    const ordenarOrden = (data) => {
        const aux = [];
        data.map((orden) => {
            aux.push({
                id_pedido: orden.id_pedido,
                direccion: orden.direccion,
                total: orden.total,
                motivo: "",
                metodo: "",
                devuelto: false
            })
        })
        setOrdenes(aux);
        console.log(aux);
    }

    const handleCheck = (id_orden) => {
        console.log(id_orden);
        setOrdenes((prevState) =>
            prevState.map((orden) =>
                orden.id_pedido === id_orden ? { ...orden, devuelto: !orden.devuelto } : orden
            )
        );
    };

    const handleChange = (e, id_orden, key) => {
        setOrdenes((prevState) =>
            prevState.map((orden) =>
                orden.id_pedido === id_orden ? { ...orden, [key]: e.target.value } : orden
            )
        );
    };

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1>Devolución</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Seleccionar</th>
                            <th>Pedido</th>
                            <th>Dirección</th>
                            <th>Total</th>
                            <th>Motivo de devolución</th>
                            <th>Método de devolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenes.map((orden) => (
                            <tr key={orden.id_pedido}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={orden.devuelto}
                                        onChange={() => handleCheck(orden.id_pedido)}
                                    />
                                </td>
                                <td>{orden.id_pedido}</td>
                                <td>{orden.direccion}</td>
                                <td>${orden.total}.00</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={orden.motivo}
                                        onChange={(e) => handleChange(e, orden.id_pedido, "motivo")}
                                        disabled={!orden.devuelto}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        as="select"
                                        value={orden.metodo}
                                        onChange={(e) => handleChange(e, orden.id_pedido, "metodo")}
                                        disabled={!orden.devuelto}
                                    >
                                        <option value="">Seleccionar método</option>
                                        <option value="correo">Correo</option>
                                        <option value="entrega">Entrega en tienda</option>
                                    </Form.Control>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                    <Button>Realizar devolución</Button>
                    <Button>Cancelar devolución</Button>
                </div>
            </Container>
        </>
    );
}