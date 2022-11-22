<?php
$servidor = "localhost";
$basedatos = "citatatuaje";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("No se pudo conectar a la base de datos");
$consulta = "SELECT * FROM cita";

$registro = mysqli_query($con, $consulta) or die("No se puede hacer un SELECT");

$result = mysqli_fetch_all($registro);

mysqli_close($con);
echo json_encode($result);
