import React, { useContext, useRef, useState } from "react";
import { Button, Col, Form, Row, Spinner, Toast, ToastContainer } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { baseUrlAPI, colors } from "../../../constants/constants";
import MasterPage from "../../../components/MasterPage";
import NavTabMenu from "../../../components/NavTabMenu";
import { UserContext } from "../../../models/UserContext";

export default function ModProducts() {

    const location = useLocation();
    const libro = location.state.fila;
    const valtitulo = useRef(null);
    const valautor = useRef(null);
    const valfoto = useRef(null);
    const valeditorial = useRef(null);
    const valdescripcion = useRef(null);
    const valprecio = useRef(null);
    const valdescuento = useRef(null);
    const valstock = useRef(null);
    const valactivo = useRef(null);

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [bookData, setBookData] = useState(
        {
            id_libro: "",
            titulo: "",
            autor: "",
            foto: "",
            editorial: "",
            descripcion: "",
            precio: "",
            descuento: "",
            stock: "",
            activo: ""
        }
    );
    const [bookTemp, setBookTemp] = useState(
        {
            id_libro: "",
            titulo: "",
            autor: "",
            foto: "",
            editorial: "",
            descripcion: "",
            precio: "",
            descuento: "",
            stock: "",
            activo: ""
        }
    );

    const postBook = (event) => {
        event.preventDefault();
        verifContent();
        bookData.id_libro = libro.id_libro;

        //console.log(bookTemp);
        // console.log(bookData);
        setLoading(true);
        fetch(`${baseUrlAPI}libros`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_libro: bookData.id_libro,
                titulo: bookData.titulo,
                autor: bookData.autor,
                foto: bookData.foto,
                editorial: bookData.editorial,
                descripcion: bookData.descripcion,
                precio: bookData.precio,
                descuento: bookData.descuento,
                stock: bookData.stock,
                activo: bookData.activo})
        })
            .then(data => {
                if (data.code === 200) {
                    setShowToast(true);
                } else {
                    console.log("Ocurrio un error");
                }
            })
            .catch(error => {
                console.error(error);
            });

    }
    function verifContent() {
        const realTitutlo = valtitulo.current.defaultValue;
        const realautor = valautor.current.defaultValue;
        const realfoto = valfoto.current.defaultValue;
        const realeditorial = valeditorial.current.defaultValue;
        const realdescripcion = valdescripcion.current.defaultValue;
        const realprecio = valprecio.current.defaultValue;
        const realdescuento = valdescuento.current.defaultValue;
        const realstock = valstock.current.defaultValue;
        const realactivo = valactivo.current.defaultValue;

        if (bookTemp.titulo === "") { //cuando no hay cambios en el campo
            bookData.titulo = realTitutlo;
            //console.log("es dif no hay cambio");
        } else {
            bookData.titulo = bookTemp.titulo;
            //console.log("hay cambios");
            if (bookTemp.autor === "") {
                bookData.autor = realautor;
            } else {
                bookData.autor = bookTemp.autor;
                if (bookTemp.foto === "") {
                    bookData.foto = realfoto;
                } else {
                    bookData.foto = bookTemp.foto;
                    if (bookTemp.editorial === "") {
                        bookData.editorial = realeditorial;
                    } else {
                        bookData.editorial = bookTemp.editorial;
                        if (bookTemp.descripcion === "") {
                            bookData.descripcion = realdescripcion;
                        } else {
                            bookData.descripcion = bookTemp.descripcion;
                            if (bookTemp.precio === "") {
                                bookData.precio = realprecio;
                            } else {
                                bookData.precio = bookTemp.precio;
                                if (bookTemp.descuento === "") {
                                    bookData.descuento = realdescuento;
                                } else {
                                    bookData.descuento = bookTemp.descuento;
                                    if (bookTemp.stock === "") {
                                        bookData.stock = realstock;
                                    } else {
                                        bookData.stock = bookTemp.stock;
                                        if (bookTemp.activo === "") {
                                            bookData.activo = realactivo;
                                        } else {
                                            bookData.activo = bookTemp.activo;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setBookTemp({ ...bookTemp, [name]: value })
    }
    const toggleShow = () => {
        setShowToast(!showToast);
    }

    return (
        <>
            <MasterPage />
            <NavTabMenu />
            <div style={{ width: "100%", height: "100vh", backgroundColor: colors.blackSwift, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ToastContainer>
                    <Toast onClose={toggleShow} show={showToast}>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">Libro modificado</strong>
                            <small className="text-muted">Justo ahora</small>
                        </Toast.Header>
                        <Toast.Body>El libro {bookData.titulo} se ha agregado correctamente.</Toast.Body>
                    </Toast>
                </ToastContainer>
                <div style={{ width: "80%", padding: 20, backgroundColor: colors.white, borderRadius: 10, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)' }}>
                    <h1>Modificar datos del libro</h1>
                    <h3>Advertencia: No reescribir ni dar clic si no hay cambios</h3>
                    <Form style={{ marginTop: 30 }} onSubmit={postBook}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="titulo"
                                        placeholder="Introduzca el titulo"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valtitulo}
                                        required
                                        defaultValue={libro.titulo}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>URL de la foto</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="foto"
                                        placeholder="Introduzca la url de la foto"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valfoto}
                                        required
                                        defaultValue={libro.foto}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={6}
                                        name="descripcion"
                                        placeholder="Introduzca la descripcion"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valdescripcion}
                                        required
                                        defaultValue={libro.descripcion}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Autor</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="autor"
                                        placeholder="Introduzca el autor"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valautor}
                                        required
                                        defaultValue={libro.autor}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Editorial</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="editorial"
                                        placeholder="Introduzca el editorial"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valeditorial}
                                        required
                                        defaultValue={libro.editorial}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="precio"
                                        placeholder="Introduzca el precio"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valprecio}
                                        required
                                        defaultValue={libro.precio}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Descuento en %</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="descuento"
                                        placeholder="Introduzca el descuento"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valdescuento}
                                        required
                                        defaultValue={libro.descuento}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Stock</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="stock"
                                        placeholder="Introduzca el stock"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valstock}
                                        required
                                        defaultValue={libro.stock}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Producto activo en la base de datos</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="activo"
                                        placeholder="Introduzca si esta activo (1) o no (0)"
                                        onClick={handleChange}
                                        onChange={handleChange}
                                        ref={valactivo}
                                        required
                                        defaultValue={libro.activo}
                                    >
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button style={{ backgroundColor: colors.primary, borderColor: colors.primary, marginTop: 20 }} disabled={loading} type="submit">
                            Modificar producto
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}