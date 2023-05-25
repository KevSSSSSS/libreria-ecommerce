import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrlAPI, colors } from "../../constants/constants";
import { Link} from "react-router-dom";
//Importaciones de componentes
import TabMenuPaqueterias from "../../components/Paqueteria/TabMenuPaqueterias";
import BannerPaqueteria from "../../components/Paqueteria/BannerPaqueteria";


export default function ViewPaqueterias() {

    const [paq, setPaq] = useState([]);

        useEffect(() => {
            fetch(`${baseUrlAPI}paqueterias`)
            .then(response => response.json())
            .then(data => {
                console.clear();
                console.log(data);
                setPaq(data)
            });
        }, [])

    return (
        <>
            <BannerPaqueteria />
            <TabMenuPaqueterias />
            <div style={{backgroundImage: 'url(https://img.interempresas.net/fotos/3253005.jpeg)', overflow: "hidden", height: "auto", maxWidth: "100%", backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat", backgroundColor: `rgb(100,100,100)`, backgroundBlendMode: "soft-light"}}>
            <div style={{ height: "15vh" , display: "flex"}}>
                <form style={{ width: "20%" , height: "35%", margin: "1%", display: "flex", marginTop: "5vh"}}>
                    <label for="texto" style={{width: "50%", margin: "2%", color: "white", fontSize: "25px"}}>Buscar:</label>
                    <input type="text" name="texto" placeholder="   ID de paqueteria" style={{margin: "1%"}}></input>
                <Button variant="light">Buscar</Button>
                </form>
                <h1 style={{textAlign: "center", justifyContent: "center", margin: "4vh 35vh", color: "white"}}>PAQUETERIAS</h1>
            </div>
            <div style={{height: "60vh" , display: "flex"}}>
            <Table style={{backgroundColor: colors.blackSwift, width: "100%", verticalAlign: "center", border: "1px solid #fba71b", margin: "3vh"}}>
                <thead>
                    <tr style={{fontSize: "25px", color: "white", textAlign: "center", border: "1px solid #fba71b", height: "8%", background: colors.primary}}>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {paq.map((fila, indice) => (
                        <tr style={{fontSize: "20px", textAlign: "center", border: "1px solid #e1b683", height: "12%", background: colors.white}}>
                            <td>{fila.id_paqueteria}</td>
                            <td>{fila.nombre}</td>
                            <td>
                                <Link to ={"/modpaq"} state={{fila: fila}}>
                                    <Button variant="secondary">Editar</Button>
                                </Link>                      
                            </td>
                            <td>
                                <Link to ={"/delpaq"} state={{fila: fila}}>
                                 <Button variant="outline-danger">X</Button>
                                </Link>                       
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            </div>
            
        </>
    )
}