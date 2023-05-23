import React, { useContext, useEffect, useState} from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { baseUrlAPI, colors } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import TableOrdNE from "../../components/Paqueteria/TableOrdNE";
import { UserContext } from "../../models/UserContext";
import { AiOutlinePoweroff } from "react-icons/ai";

//Importaciones de componentes
import TabMenuOrdenes from "../../components/Paqueteria/TabMenuOrdenes";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function OrdenesNoEnviadas() {

    const { user, login, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState([]);
    const [loading, setLoading] = useState(false);

    const filterordne = datosTabla.filter(datosTabla => datosTabla.activo != 0);

    useEffect(() => {
        getOrdNE();
        if (!user) {
            navigate('/');
        }
    }, [])

    const getOrdNE = () => {
        setLoading(true);
        fetch(`${baseUrlAPI}pedidos`)
            .then(response => response.json())
            .then(data => {
                setDatosTabla(data)
                setLoading(false)
            });

    }

    return (
        <>
            <BannerPaqueteria />
            <TabMenuOrdenes />
            <div style={{ backgroundColor: "#ebebeb", height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de pedido" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 25vh"}}>ORDENES NO ENVIADAS</h1>
            </div>
            <div style={{ backgroundColor: "#ebebeb", height: "60vh" , display: "flex"}}>
            <TableOrdNE ordenesNE={filterordne} />
            </div>
        </>
    )
}