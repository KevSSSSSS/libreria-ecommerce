import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { baseUrlAPI, colors } from "../../constants/constants";

//Importaciones de componentes
import TabMenuPaqueteria from "../../components/Paqueteria/TabMenuOrdenes";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function OrdenesEnviadas() {

    const [pedidos, setPedidos] = useState([]);

    const filterpedido = pedidos.filter(pedidos => pedidos.status = "Enviado");
    const ordenapedidos = filterpedido.reverse();

        useEffect(() => {
            fetch(`${baseUrlAPI}pedidos`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPedidos(data)
            });
        }, [])

    return (
        <>
            <BannerPaqueteria />
            <TabMenuPaqueteria />
            <div style={{ backgroundColor: "#ebebeb", height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de pedido" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 25vh"}}>ORDENES ENVIADAS</h1>
            </div>
            <div style={{ backgroundColor: "#ebebeb", height: "60vh" , display: "flex"}}>
                <table style={{width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
                    <tr style={{textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>ID</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Paqueteria</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>No. Guia</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Fecha de envío</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Fecha de entrega</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Detalle</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Entregado</th>
                    </tr>
                    {ordenapedidos.map((fila, indice) => (
                    <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>{fila.id_pedido}</td>
                        <td>{fila.id_paqueteria}</td>
                        <td>{fila.guia}</td>
                        <td>{fila.fecha_envio}</td>
                        <td>{fila.fecha_entrega}</td>
                        <td>
                            <Button variant="secondary" state={{fila: fila}}>Ver Detalle</Button>
                        </td>
                        <td>
                            <Button variant="secondary" state={{fila: fila}}>Actualizar Entrega</Button>
                        </td>
                    </tr>
                    ))}
                </table>
            </div>
        </>
    )
}