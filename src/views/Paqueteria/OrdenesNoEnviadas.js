import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { colors } from "../../constants/constants";

//Importaciones de componentes
import TabMenuOrdenes from "../../components/Paqueteria/TabMenuOrdenes";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function OrdenesNoEnviadas() {

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
                <table style={{width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
                    <tr style={{textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>ID</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Direccion</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Detalle de Orden</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Enviar Orden</th>
                        <th style={{border: "1px solid #fba71b", fontSize: "25px", color: "white"}}>Cancelar Orden</th>
                    </tr>
                    <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                        <td>1</td>
                        <td>Tec toluca</td>
                        <td>
                        <Button variant="secondary" >ver detalle</Button>
                        </td>
                        <td>
                            <Button variant="secondary" >Enviar</Button>
                        </td>
                        <td>
                            <Button variant="outline-danger" >X</Button>
                        </td>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </div>
        </>
    )
}