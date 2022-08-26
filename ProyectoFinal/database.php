<!-- Mantener la conexion de MySQL -->

<?php

session_start();

// Creacion de un objeto para la conexion usando la libreria "mysqli"
$connection = mysqli_connect(
    'localhost',
    'root',
    '',
    'tienda'
);

// isset($connection) ?  'Database connected!' :  'Database connection failed!';

?>