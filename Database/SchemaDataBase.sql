CREATE TABLE Libros (
  id_libro INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  foto VARCHAR(255) NOT NULL,
  editorial VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  descuento INT(5) NOT NULL,
  stock INT(11) NOT NULL,
  PRIMARY KEY (id_libro)
);

CREATE TABLE Categorias (
  id_categoria INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_categoria)
);

CREATE TABLE Libros_Categorias (
  id_libro INT(11) NOT NULL,
  id_categoria INT(11) NOT NULL,
  PRIMARY KEY (id_libro, id_categoria),
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE Usuarios (
  id_usuario INT(11) NOT NULL AUTO_INCREMENT,
  rol VARCHAR(50) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  apellido_p VARCHAR(255) NOT NULL,
  apellido_m VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_usuario)
);

CREATE TABLE Pedidos (
  id_pedido INT(11) NOT NULL AUTO_INCREMENT,
  id_usuario INT(11) NOT NULL,
  fecha DATE NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Detalles_Pedidos (
  id_detalle INT(11) NOT NULL AUTO_INCREMENT,
  id_pedido INT(11) NOT NULL,
  id_libro INT(11) NOT NULL,
  cantidad INT(11) NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_detalle),
  FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro)
);
//------------------- Después de hacer la base -----------------------

CREATE TABLE SolicitudCorreos (
  id_correo INT(11) NOT NULL AUTO_INCREMENT,
  id_cliente INT(11) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  horario INT(11) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_correo),
  FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);
CREATE TABLE CorreosAtendidos (
  id_correoatend INT(11) NOT NULL AUTO_INCREMENT,
  id_correo INT(11) NOT NULL,
  dateAt DATE, NOT NULL,
  PRIMARY KEY (id_correoatend),
  FOREIGN KEY (id_correo) REFERENCES SolicitudCorreos(id_correo)
);
CREATE TABLE SolicitudLlamadas (
  id_llamada INT(11) NOT NULL AUTO_INCREMENT,
  id_cliente INT(11) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  numero INT(12) NOT NULL,
  horario INT(11) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_llamada),
  FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);
CREATE TABLE LlamadasAtendidas (
  id_llamadaatend INT(11) NOT NULL AUTO_INCREMENT,
  id_llamada INT(11) NOT NULL,
  dateAt DATE, NOT NULL,
  PRIMARY KEY (id_llamadaatend),
  FOREIGN KEY (id_llamada) REFERENCES SolicitudLlamadas(id_llamada)
);
CREATE TABLE Productos (
  id_producto INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  autor VARCHAR(50) NOT NULL,
  precio INT(11) NOT NULL,
  foto VARCHAR(50) NOT NULL,
  sinopsis VARCHAR(150) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_producto)
);