import React, { useEffect, useState } from "react";
import { Form, Button, Image, Spinner } from "react-bootstrap";
import { colors } from "../../constants/constants";

//Importaciones de componentes
import TabMenuPaqueterias from "../../components/Paqueteria/TabMenuPaqueterias";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";

export default function ViewPaqueterias() {

    return (
        <>
            <BannerPaqueteria />
            <TabMenuPaqueterias />
            <div style={{backgroundImage: 'url(https://img.interempresas.net/fotos/3253005.jpeg)', overflow: "hidden", height: "auto", maxWidth: "100%", backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundColor: `rgb(80,80,80)`, backgroundBlendMode: "soft-light"}}>
            <div style={{ height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%", color: "white", fontSize: "25px"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de paqueteria" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 35vh", color: "white"}}>PAQUETERIAS</h1>
            </div>
            <div style={{height: "60vh" , display: "flex"}}>
                <table style={{backgroundColor: colors.blackSwift, width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
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
            </div>
            
        </>
    )
}