import React, { useContext, useState } from "react";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../../../models/UserContext";
import { baseUrlAPI } from "../../../constants/constants";


export default function EmailForm() {

    const { user } = useContext(UserContext);
    const id_u = user.id_usuario;

    const horariosTienda = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"
        , "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
        , "18:00", "19:30", "20:00"];

    const [form, setForm] = useState({ id_cliente: "", nombre: "", correo: "", hora: "", descripcion: "", activo: "" });
    const [horario, setHorario] = useState("8:00");


    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const campoActivo = "1";
        
        form.id_cliente = id_u;
        form.hora = horario;
        form.activo = campoActivo;

        console.log(form);
        //Aqui haces tu fetch
        fetch(baseUrlAPI + "solicitudcorreos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {

                }

            })
            .catch(error => {
                console.error(error);
            });


    }
    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ float: "center", marginTop: "5%", marginLeft: "35%", width: 400, border: "solid", padding: 10 }}>
                <h2>Formulario del correo:</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Nombre completo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                            name="nombre"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="correo@dominio.com"
                            required
                            name="correo"
                            onChange={handleChange}
                        />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formText">
                        <Form.Label>Horario de disponibilidad:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => { setHorario(e.target.value) }}>
                            {horariosTienda.map((horario) => {
                                return (
                                    <option value={horario}>{horario}</option>
                                )
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción de la situación:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            required
                            name="descripcion"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ marginLeft: 220 }}>
                        Enviar
                    </Button>

                </Form>
            </div>

        </>
    )
}