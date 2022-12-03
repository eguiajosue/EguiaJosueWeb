<?php

$servidor = "localhost";
$basedatos = "citatatuaje";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor, $usuario, $password, $basedatos) or die("No se pudo conectar a la base de datos");