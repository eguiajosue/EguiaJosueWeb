<?php
include ('./conexion.php');

if (isset($_GET['numero_ticket'])) {
    $numero_ticket = $_GET['numero_ticket'];
    $consulta = "DELETE FROM cita WHERE numero_ticket = $numero_ticket";
    $resultado = mysqli_query($con, $consulta);

    header("Location: ../index.php");
}