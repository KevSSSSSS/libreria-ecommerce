import React, { useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Table, Form, Container, Button } from "react-bootstrap";

export default function DevolucionesHome() {
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
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1>Devolución</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Check</th>
                            <th>Libro</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Motivo de devolución</th>
                            <th>Método de devolución</th>
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
                    <Button onClick={document.location.href='atenderDev.js'}>Atender devolución</Button>

                    <Button>Devolución paqueteria</Button>
                    <Button>Almacen</Button>
                </div>
            </Container>
        </>
    );
}