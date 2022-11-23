<?php

$numero_ticket = $_POST['buscarNumeroTicket'];

$servidor = "localhost";
$basedatos = "citatatuaje";
$usuario = "root";
$password = "";


$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("No se pudo conectar a la base de datos");
$consulta = "SELECT * FROM cita WHERE numero_ticket = $numero_ticket";

$registro = mysqli_query($con, $consulta) or die("No se puede hacer un SELECT");

$result = mysqli_fetch_array($registro, MYSQLI_ASSOC);

mysqli_close($con);

echo json_encode($result);
