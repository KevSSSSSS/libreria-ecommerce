import React from "react";
import { Table } from "react-bootstrap";

export default function TableBooks(props) {
    const {libros} = props;
    return (
        <Table>
            <thead>
                <tr>
                    <th>id_libro</th>
                    <th>titulo</th>
                    <th>autor</th>
                    <th>foto</th>
                    <th>editorial</th>
                    <th>descripcion</th>
                    <th>precio</th>
                    <th>descuento</th>
                    <th>stock</th>
                </tr>
            </thead>
            <tbody>
                {libros.map((fila, indice) => (
                    <tr key={indice}>
                        <td>{fila.id_libro}</td>
                        <td>{fila.titulo}</td>
                        <td>{fila.autor}</td>
                        <td><img src={fila.foto} alt={fila.titulo} width={"60%"} /></td>
                        <td>{fila.editorial}</td>
                        <td>{fila.descripcion}</td>
                        <td>{fila.precio}</td>
                        <td>{fila.descuento}</td>
                        <td>{fila.stock}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}