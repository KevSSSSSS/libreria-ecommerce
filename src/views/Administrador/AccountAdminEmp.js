import React from "react";
import NavTabMenu from "../../components/Admin/TabMenuHomeAdmin";
import MasterPage from "../../components/Paqueteria/BannerPaqueteria";
import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import {colors} from "../../constants/constants";

export default function AccountAdminEmp() {
    const { state } = useLocation();
    const user = state?.user;
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ height: "75vh", width: "100%", display: "flex" , backgroundColor: colors.blackSwift}}>
            <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                    <h2 style={{padding: "4vh", marginTop: "6vh"}}>Foto de perfil</h2>
                    <Image width={"20%"} src={"https://imgs.search.brave.com/YQszaMPPSLRj_TTM4cBHqqHQCp8AMSLOZhCWLIebuBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bG9nb2x5bnguY29t/L2ltYWdlcy9sb2dv/bHlueC84My84Mzky/NmUxNzM3MmFjMDNk/NzFlNzk5ZTNkMTgx/MmY3My5wbmc"}></Image>
                </div>
                <div style={{marginTop: "6vh", borderRadius: "22px", backgroundColor: "white", width: "100%", height: "60vh", display: "flex", justifyContent: "space-evenly",marginRight: "15vh", flexDirection: "column" }}>
                    <div style={{ backgroundColor: "white", width: "100%", height: "60vh", display: "flex", justifyContent: "space-evenly",marginLeft: "10vh", flexDirection: "column" }}>
                    <h2>Nombre de usuario: {user.nombre} </h2>
                    <h2>Apellido de usuario: {user.apellido_p} {user.apellido_m}</h2>
                    <h2>Correo: {user.email}</h2>
                    <h2>Rol: {user.rol}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}