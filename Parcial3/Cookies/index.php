<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (isset($_COOKIE['ultimaVisita'])) {
        printf("Su ultima vista fué: %s", $_COOKIE['ultimaVisita']);
        $fechaHoy = date('Y/m/d H:1:s');
        setcookie("ultimaVisita", $fechaHoy, time() + (7 * 24 * 60 * 60));
    } else {
        printf("No se encontro cookie de ultima visita<br>");

        $fechaHoy = date('Y/m/d H:1:s');
        $siguienteSemana = time() + (7 * 24 * 60 * 60);
        $fechaExpira = date('Y/m/d H:1:s', $siguienteSemana) . '<br>';

        echo '<b>Fecha de Creación de Cookie:</b>' . $fechaHoy . '<br>';
        echo '<b>Fecha de Vencimiento de Cookie:</b>' . $fechaExpira . '<br>';
        setcookie("ultimaVisita", $fechaHoy, time() + (7 * 24 * 60 * 60));
    }
    ?>
</body>

</html>