<?php
$servidor = "localhost";
$basedatos = "citatatuaje";
$usuario = "root";
$password = "";

$id = $_POST['numeroTicket'] = 1;

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("No se pudo conectar a la base de datos");
$consulta = "SELECT * FROM cita WHERE numero_ticket = $id";

$registro = mysqli_query($con, $consulta) or die("No se puede hacer un SELECT");

//$result = mysqli_fetch_all($registro);

$result = mysqli_fetch_array($registro, MYSQLI_ASSOC);

mysqli_close($con);

//echo $result;
echo json_encode($result);
