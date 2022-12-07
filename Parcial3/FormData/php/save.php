<?php
include('./conexion.php');

if (isset($_POST['agendarCita'])) {
    $nombre = $_POST['nombre'];
    $apellidoPaterno = $_POST['apellidoPaterno'];
    $apellidoMaterno = $_POST['apellidoMaterno'];
    $edad = $_POST['edad'];
    $tatuador = $_POST['nombreTatuador'];
    $fecha = $_POST['fechaCitada'];
    $hora = $_POST['horaCitada'];
    $descripcion = $_POST['descripcion'];
    $estilo = $_POST['estilo'];
    $size = $_POST['tamano'];
    $precio = $_POST['precio'];
    $color = 0;

    $consulta = "INSERT INTO cita (nombre_cliente, apellido_paterno_cliente, apellido_materno_cliente, edad, tatuador, fecha_citada, hora_citada, descripcion_tatuaje, estilo, size, precio, color) VALUES ('$nombre','$apellidoPaterno','$apellidoMaterno',$edad,'$tatuador','$fecha','$hora','$descripcion','$estilo',$size,$precio,$color);";

    $registro = mysqli_query($con, $consulta) or die("No se pudo hacer el INSERT");
    if ($registro) echo "Cita insertada correctamente";

    mysqli_close($con);

    header("Location: ../index.php");
}
