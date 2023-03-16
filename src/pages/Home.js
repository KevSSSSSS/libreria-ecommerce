import React, { useState } from "react";
import Card from "../components/Card";
import { BsFillHouseFill, BsFillBookmarksFill, BsFillCartFill, BsFillPersonFill } from "react-icons/bs"
import { productos } from "../data/Products";
import { Form, Button, Image } from "react-bootstrap";

export default function Home() {

    const [home, setHome] = useState(true);

    return (
        <div style={{ backgroundColor: "#FAC81D", height: "100vh", alignItems: "center", justifyContent: "center", display: "flex" }}>
            <div style={{ width: "100%", height: "100vh", backgroundColor: "#ffffff" }}>
                <div style={{ width: "100%", height: "30vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundImage: `url(https://imgs.search.brave.com/wxDaGP_cjgg6zCtRAV82KWAVCQhKdBI3XOkLnlynIiw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMzY4/OTcuanBn)` }}>
                    <Form className="d-flex" style={{ width: "30%" }}>
                        <Form.Control
                            type="search"
                            placeholder="Autor o libro"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="light">Buscar</Button>
                    </Form>
                    <Image style={{ width: "10%" }} src="https://imgs.search.brave.com/ubuMxJsB94CNuWODv8lg-4lkoBvkm2xZos4nK7kKKkg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC8wOS8wOTZk/ZWM1NTI1NTUxYTEw/NjAzZDIzMmRiNWMx/NjY1MS5wbmc"></Image>
                </div>
                <div style={{ width: "100%", height: "8vh", backgroundColor: "#e1b683", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <div style={{ flexDirection: "row", display: "flex", cursor: "pointer" }} onClick={() => {
                        setHome(true);
                    }}>
                        <BsFillHouseFill size={26} />
                        <div>Inicio</div>
                    </div>
                    <div style={{ flexDirection: "row", display: "flex", cursor: "pointer" }} onClick={() => {
                        setHome(false);
                    }}>
                        <BsFillBookmarksFill size={26} />
                        <div>Catalogo</div>
                    </div>
                    <div style={{ flexDirection: "row", display: "flex" }}>
                        <BsFillCartFill size={26} />
                        <div>Mi carrito</div>
                    </div>
                    <div style={{ flexDirection: "row", display: "flex", alignItems: "" }}>
                        <BsFillPersonFill size={26} />
                        <div>Mi cuenta</div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#8e7253", height: "62vh" }}>
                    {home ? (
                        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                            <Image style={{ width: "100%", height: "24vh" }} src="https://imgs.search.brave.com/Gu5qWvOi7hoKnEMHSlL5N5DKhKEC17dt7YU_j0nQcDo/rs:fit:1200:324:1/g:ce/aHR0cHM6Ly9lbXBv/cmlvbGlicm9zLmNs/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA3L0Rlc2N1ZW50/by1FbXBvcmlvLWxp/YnJvc19CYW5uZXIt/d2ViLTE1MzZ4MzI0/LnBuZw"></Image>
                            <h3 style={{color: "white"}}>Categorias</h3>
                            <div>
                            <Image style={{ width: "20%", height: "29vh" }} src="https://imgs.search.brave.com/wRalqklAcPPxkQhvbuoHTRbPCvIASXJ7NDqJTDfuC-A/rs:fit:1200:1117:1/g:ce/aHR0cHM6Ly93d3cu/cmlnZXNob3AuY29t/L2NvbnRlbnQvaW1h/Z2VzLzE5MzY1LzE0/MDB4MTQwMC90ZXJy/b3ItYmFubmVyLW1l/bHRpbmctc2t1bGxz/LmpwZw"></Image>
                            <Image style={{ width: "20%", height: "29vh" }} src="https://imgs.search.brave.com/RIpPe5lMnPG3sjmA7XvKEIktvRs61RipnDAygHNv2vU/rs:fit:850:700:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQyLzQ2/L2I3LzQyNDZiN2Jj/NGFiNTVjNTUzOGI1/Y2RmNzJjOGVkOTJi/LmpwZw"></Image>
                            <Image style={{ width: "20%", height: "29vh" }} src="https://imgs.search.brave.com/_AbsDexCoYDo1_FexI0btshMMiSeV31FkgbDLR9KXJk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS80MC8z/NS9SNGxGM1YuanBn"></Image>
                            <Image style={{ width: "20%", height: "29vh" }} src="https://imgs.search.brave.com/2SP5URUgp1CEdmV-inshdU66_zxW0gJLJKWDQlExUdI/rs:fit:640:425:1/g:ce/aHR0cHM6Ly9zcGFy/ay5hZG9iZS5jb20v/cGFnZS83YWoyYkNN/Q3VRSVNML2ltYWdl/cy8yNkRBQkUzQy1E/QzBCLTRBMUMtOUVG/Ni1FQ0RFN0ZDN0Uw/NzYuanBnP2Fzc2V0/X2lkPTU2Q0I0RDZB/LTY0MjUtNDIyMS1B/MUY2LUM2REVBRTJD/RTI4MSZzaXplPTY0/MA"></Image>
                            <Image style={{ width: "20%", height: "29vh" }} src="https://imgs.search.brave.com/CyfjAQ2JZFqijymvriZth--210Rn41DBep4HNqhGO5U/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5m/b25kb3NoZC5teC93/YWxscGFwZXJzL2Np/ZW5jaWEtZmljY2lv/bi0yNDY2LmpwZw"></Image>                            
                            </div>
                        </div>
                    ) : (
                        <div style={{ flexDirection: "row", display: "flex", justifyContent: "space-around" }}>
                            {productos.map((l) => {
                                return (
                                    <Card data={l}></Card>
                                )

                            })}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}