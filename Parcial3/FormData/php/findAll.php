<?php
include('./conexion.php');

$consulta = "SELECT * FROM cita";

$registro = mysqli_query($con, $consulta) or die ("No se pudo hacer el SELECT");

$result = mysqli_fetch_all($registro, MYSQLI_ASSOC);

mysqli_close($con);

echo json_encode($result);

?>