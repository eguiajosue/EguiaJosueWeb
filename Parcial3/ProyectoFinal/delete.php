<?php

    include("database.php");

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = "DELETE FROM product WHERE id = $id";
        $result = mysqli_query($connection, $query);

        if (!$result) {
            die("The product cannot be removed");
        }

        $_SESSION['message'] = 'Product Removed Succesfuly!';
        $_SESSION['type'] = 'danger';
        header("Location: index.php");
    }
