import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { baseUrlAPI, colors, fontFamily } from "../../constants/constants";
import fondo from "../../assets/background1.jpg";
import { UserContext } from "../../models/UserContext";
import { useNavigate } from "react-router";

export default function Register() {

     // Contexto de usuario
     const { user, login, logout } = useContext(UserContext);
    
    // Navegación
     const navigate = useNavigate();


     // Estado para los datos del usuario

    const { user, login, logout } = useContext(UserContext);
    const navigate = useNavigate();


    const [dataUser, setDataUser] = useState({
        id_usuario: "",
        nombre: "",
        rol: "Cliente",
        apellido_p: "",
        apellido_m: "",
        email: "",
        contrasena: ""
    });

// Manejar cambios en los campos del formulario



    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataUser({ ...dataUser, [name]: value });
    };


// Enviar el formulario de registro

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Agrega aquí la lógica de registro en la base de datos

        fetch(`${baseUrlAPI}usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataUser)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    login({ ...dataUser, id_usuario: data.body.insertId });
                    navigate("/");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

 // Renderizado del componente 

    return (
        <div style={{ textAlign: "center", display: "flex", alignItems: "center", height: "100vh", justifyContent: "center", backgroundImage: `url(${fondo})`, backgroundSize: "cover" }}>
            <div style={{ width: "50%", height: "80vh", backgroundColor: colors.white, borderRadius: 20, alignItems: "center", justifyContent: "center", display: "flex" }}>
                <div style={{ color: colors.terceary, width: "100%" }}>
                    <h4 style={{ fontFamily: fontFamily.primary }}>Registrate gratis</h4>
                    <Form style={{ marginTop: 30, width: "100%" }} onSubmit={handleSubmit}>
                        <div style={{ display: "flex", alignContent: "center", justifyContent: "space-evenly" }}>
                            <div>
                                <Form.Group>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control name="nombre" type="text" placeholder="Introduzca su nombre" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control name="apellido_p" type="text" placeholder="Introduzca su apellido paterno" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control name="apellido_m" type="text" placeholder="Introduzca su apellido materno" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Introduzca su email" onChange={handleChange}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control name="contrasena" type="password" placeholder="Introduzca su contraseña" onChange={handleChange}></Form.Control>
                                </Form.Group>
                            </div>
                        </div>

                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} type="submit">
                            Registrarse
                        </Button>
                    </Form>
                </div>

            </div>
        </div>
    )
}