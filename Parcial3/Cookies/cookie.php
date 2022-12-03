<?php
$fechaHoy = date('Y/m/d H:i:s');
$siguienteSemana = time() + (7*24*60*60);
$fechaExpira = date('Y-m-d H:i:s', $siguienteSemana)."<br>";

echo "<b>Fecha de creacion de cookie: </b>".$fechaHoy;
echo "<b>Fecha de Vencimiento de Cookie: </b>".$fechaExpira;

setcookie("ultimaVisita", $fechaHoy, time() + (7*24*60*60));