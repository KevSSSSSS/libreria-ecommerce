import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { colors } from "../../constants/constants";
import TableBooks from "../../components/Inventario/TableBooks";

export default function HomeInventary() {

    const navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        getBooks();

    }, [])

    const getBooks = () => {
        setLoading(true);
        fetch('http://localhost:4000/test/libros')
            .then(response => response.json())
            .then(data => {
                setDatosTabla(data)
                setLoading(false)
            });

    }

    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: colors.blackSwift, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "80%", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                <h1>Panel de inventario</h1>
                <Button onClick={() => {
                    navigate("/formBook");
                }}>Añadir un libro</Button>
                <TableBooks libros={datosTabla} />
                {loading && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="grow" variant="warning" /></div>}
            </div>
        </div>
    )
}