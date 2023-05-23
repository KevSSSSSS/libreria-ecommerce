import React, { useEffect, useState } from "react";
import { Container, Image, Table } from "react-bootstrap";
import NavTabMenu from "../../components/NavTabMenu";
import MasterPage from "../../components/MasterPage";
import { useLocation } from "react-router-dom";
import { baseUrlAPI } from "../../constants/constants";

export default function VerDetallePedido() {

    const location = useLocation();

    const orden = location.state.orden;

    const [libros, setLibros] = useState([]);


    useEffect(() => {
        getOrdenes();
    }, [])

    const getOrdenes = () => {
        fetch( baseUrlAPI+"detallespedidos?id_pedido=" + orden.id_pedido)
            .then(response => response.json())
            .then((data) => {
                setLibros(data);
            })
            .catch((e) => {

            })
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container>
                <h2>Detalle del pedido</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>ID del libro</th>
                            <th>Libro</th>
                            <th>Foto</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>

                        {libros.map((l) => {
                            return (
                                <tr key={l.id_libro}>
                                    <td>{l.id_libro}</td>
                                    <td>{l.titulo}</td>
                                    <td style={{width: "50%"}}> <Image style={{ width: "20%" }} src={l.foto}></Image></td>
                                    <td>{l.precio}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>

            </Container>
        </>

    )
}