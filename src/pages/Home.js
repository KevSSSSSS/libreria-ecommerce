import React from "react";
import Card from "../components/Card";
import { productos } from "../data/Products";

export default function Home() {
    return (
        <div style={{ backgroundColor: "#FAC81D", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex" }}>
            <div style={{ width: "80%", height: "90vh", backgroundColor: "#ffffff" }}>
                <div style={{ width: "98%", height: "30vh", margin: 10, backgroundImage: `url(https://imgs.search.brave.com/d3L41qqXoMdxOng_zXNNxUriehmImIUpHktR6kDl_nI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNTk1NC81ZDI5/L2IyMmUvMzhiZS9l/MzAwLzAwMjgvbGFy/Z2VfanBnLzIzMDUx/N19fLV9fTGlicmVy/aWFfUXVhZGVfcGhf/R19WaXJhbW9udGUt/OTU5OC5qcGc_MTQ5/ODcwMTA4OQ)` }}>
                </div>
                <div style={{ width: "98%", height: "8vh", backgroundColor: "#d10002", margin: 10 }}>
                    <button style={{ backgroundColor: "#eb8508", color: "#ffffff", borderWidth: 0, borderRadius: 6, padding: 8, marginLeft: 6, marginTop: 10 }}>Empresa</button>
                    <button style={{ backgroundColor: "#eb8508", color: "#ffffff", borderWidth: 0, borderRadius: 6, padding: 8, marginLeft: 6, marginTop: 10 }}>Catalogo</button>
                </div>
                {/* <div style={{ width: "98%", height: "20vh", margin: 20 }}>
                    Una librería es un establecimiento comercial o tienda que se dedica a la venta de libros. Existen librerías de todo tipo, desde pequeños locales con pocos ejemplares hasta edificios enteros que ofrecen miles de publicaciones. Las librerías pueden pertenecer a una cadena con muchas sucursales o tener un único punto de venta.

                    Por ejemplo: “Ya ha estado en cinco librerías pero sigo sin encontrar el nuevo libro de Michael Krepcky”, “Mi nieto trabaja en una librería del centro”, “Dos heridos en un intento de robo a una librería”.

                    Hay librerías generalistas, que comercializan libros de diversas temáticas, mientras que otras se especializan en temas específicos. Es posible, en este sentido, encontrar librerías deportivas, librerías científicas, etc.
                    <h6>2023 por Kevin Daniel Flores Lopez</h6>
                </div> */}

                <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-around" }}>
                    {productos.map((l) => {
                        return (
                            <Card data={l}></Card>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}