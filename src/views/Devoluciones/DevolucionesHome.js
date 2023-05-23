import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Link, useLocation } from "react-router-dom";
import { Table, Form, Container, Button } from "react-bootstrap";
import { UserContext } from "../../models/UserContext";
import { baseUrlAPI } from "../../constants/constants";

export default function DevolucionesHome() {

    const {user} = useContext(UserContext);

    const [ordenes, setOrdenes] = useState([]);

    useEffect(()=>{
        getOrdenes();
    },[])

    const getOrdenes = () => {
        fetch(baseUrlAPI + "pedidos?id_usuario=" + user.id_usuario)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setOrdenes(data);
            })
            .catch((e) => {

            })
    }

    const [libros, setLibros] = useState([
        {
            id: 1,
            nombre: "Libro 1",
            cantidad: 2,
            precio: 10.99,
            motivo: "",
            metodo: "",
            devuelto: false
        },
        {
            id: 2,
            nombre: "Libro 2",
            cantidad: 1,
            precio: 14.99,
            motivo: "",
            metodo: "",
            devuelto: false
        },
        {
            id: 3,
            nombre: "Libro 3",
            cantidad: 3,
            precio: 9.99,
            motivo: "",
            metodo: "",
            devuelto: false
        }
    ]);


    //Controladores
    const handleCheck = (id) => {
        setLibros((prevState) =>
            prevState.map((libro) =>
                libro.id === id ? { ...libro, devuelto: !libro.devuelto } : libro
            )
        );
    };

    const handleChange = (e, id, key) => {
        setLibros((prevState) =>
            prevState.map((libro) =>
                libro.id === id ? { ...libro, [key]: e.target.value } : libro
            )
        );
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
                            <th>Check</th>
                            <th>Libro</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Motivo de devolución</th>
                            <th>Metodo de devolución</th>
                            <th>Status de devolución</th>
                            <th>FechaDevolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map((libro) => (
                            <tr key={libro.id}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={libro.devuelto}
                                        onChange={() => handleCheck(libro.id)}
                                    />
                                </td>
                                <td>{libro.idLibro}</td>
                                <td>{libro.nombre}</td>
                                <td>{libro.cantidad}</td>
                                <td>{libro.precio}</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={libro.motivo}
                                        onChange={(e) => handleChange(e, libro.id, "motivo")}
                                        disabled={!libro.devuelto}
                                    />
                                </td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={libro.motivo}
                                        onChange={(e) => handleChange(e, libro.id, "motivo")}
                                        disabled={!libro.devuelto}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>

                    <Link to={'/devprocadmin'}>
                        <Button>Solicitudes procesadas </Button>
                    </Link>

                    <Link to={'/paqueteriadev'}>
                        <Button>Registro de paqueteria</Button>
                    </Link>

                </div>

            </Container>
        </>

    );
}
