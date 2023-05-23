import React, { useContext, useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage";
import NavTabMenu from "../../components/NavTabMenu";
import { Container, Table } from "react-bootstrap";
import { baseUrlAPI } from "../../constants/constants";
import { UserContext } from "../../models/UserContext";

export default function FormasPago() {

    const { user } = useContext(UserContext);

    const [metodos, setMetodos] = useState([]);

    useEffect(() => {
        getMetodos();
    }, [])

    const getMetodos = () => {
        console.log(user.id_usuario);
        fetch(`${baseUrlAPI}metodospago?id_usuario=` + user.id_usuario)
            .then(response => response.json())
            .then(data => {
                setMetodos(data);
            });
    }


    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Titular</th>
                            <th>Tarjeta</th>
                            <th>Fecha expiración</th>
                            <th>CVV</th>
                        </tr>
                    </thead>
                    <tbody>

                        {metodos.map((m) => {
                            return (
                                <tr>
                                    <td>{m.titular}</td>
                                    <td>{m.tarjeta}</td>
                                    <td>{m.fecha_expiracion}</td>
                                    <td>{m.cvv}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </Container>
        </>
    )
}