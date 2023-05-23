import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Link, useLocation } from "react-router-dom";
import { Table, Form, Container, Button } from "react-bootstrap";
import { UserContext } from "../../models/UserContext";
import { baseUrlAPI } from "../../constants/constants";

export default function DevolucionesHome() {

    const { user } = useContext(UserContext);

    const [devoluciones, setDevoluciones] = useState([]);

    const [datos, setDatos] = useState({fecha_envio: "", num_guia: "", fecha_atencion: ""});

    console.log(datos);

    useEffect(() => {
        getOrdenes();
    }, [])

    const getOrdenes = () => {
        fetch(baseUrlAPI + "devoluciones")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setDevoluciones(data);
            })
            .catch((e) => {

            })
    }

    const atenderSolicitud = (devolucion) => {
        fetch(`${baseUrlAPI}devoluciones`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...devolucion, estatus_dev: "Atendido", fecha_envio: datos.fecha_envio, num_guia: datos.num_guia, fecha_atencion: new Date().toISOString().slice(0, 10) })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.code === 200) {
                    getOrdenes();
                } else {
                    //console.log("Ocurrio un error");
                    //console.log(data);
                }
            })
            .catch(error => {
                //console.log("Ocurrio un error 2:");
                // console.error("ERROR:", error);
            });
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setDatos({ ...datos, [name]: value })
    };

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                <h1>Atender Devoluciones</h1>
                <h5>Porfavor seleccione el status de la devolución</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID del libro</th>
                            <th>Precio</th>
                            <th>Metodo de devolucion</th>
                            <th>Motivo de devolución</th>
                            <th>Número de guia</th>
                            <th>Fecha de recibido</th>
                            <th>Fecha de envio</th>
                            <th>Estado</th>

                        </tr>
                    </thead>
                    <tbody>
                        {devoluciones.map((devolucion) => {
                            if (devolucion.estatus_dev === "Solicitado") {
                                return (
                                    <tr key={devolucion.id_devolucion}>
                                        <td>{devolucion.id_libro}</td>
                                        <td>${devolucion.precio}.00</td>
                                        <td>{devolucion.metodo_dev}</td>
                                        <td>{devolucion.motivo_dev}</td>
                                        <td><Form.Control
                                            type="text"
                                            value={devolucion.motivo}
                                            name="num_guia"
                                            onChange={handleChange}
                                        /></td>
                                        <td>{devolucion.fecha_recibido}</td>
                                        <td><Form.Control
                                            type="text"
                                            value={devolucion.motivo}
                                            name="fecha_envio"
                                            onChange={handleChange}
                                        /></td>
                                        <td>{devolucion.estatus_dev}</td>
                                        <td><Button onClick={() => { atenderSolicitud(devolucion) }}>Atender</Button></td>
                                    </tr>
                                )
                            }
                        }
                        )}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>

                </div>

            </Container>
        </>

    );
}
