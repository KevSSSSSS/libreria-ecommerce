import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/constants";
import TableBooks from "../../components/Inventario/TableBooks";

export default function HomeInventary() {

    const navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState([])

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        fetch('http://localhost:4000/test/libros')
            .then(response => response.json())
            .then(data => setDatosTabla(data));
    }

    return (
        <div style={{ width: "100%", backgroundColor: colors.blackSwift, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "80%", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                <h1>Panel de inventario</h1>
                <Button onClick={() => {
                    navigate("/formBook");
                }}>Añadir un libro</Button>
                <TableBooks libros={datosTabla} />
            </div>
        </div>
    )
}