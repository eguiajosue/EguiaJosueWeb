<?php

$registro["numeroTicket"] = 0001;
$registro["nombreCliente"] = "Josue";
$registro["apellidoPaterno"] = "Eguia";
$registro["apellidoMaterno"] = "Rodriguez";
$registro["edad"] = 22;
$registro["nombreTatuador"] = "Rebha";
$registro["fechaCitada"] = date("Y-m-d");
$registro["horaCitada"] = date("H:i:s");
$registro["descripcion"] = "Soga con un numero 13 dentro";
$registro["tamaño"] = 5;
$registro["color"] = false;;
$registro["precio"] = 300;

echo json_encode($registro);
