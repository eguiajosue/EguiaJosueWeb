<?php

    include("database.php");

    if (isset($_POST['update'])) {
        $id = $_GET['id'];
        echo $id;
//        $name = $_POST['name'];
//        $category = $_POST['category'];
//        $brand = $_POST['brand'];
//        $price = $_POST['price'];
//        $description = $_POST['description'];
    }
//    $id = $_REQUEST['id'];
//    $name = $_REQUEST['name'];
//    $category = $_REQUEST['category'];
//    $brand = $_REQUEST['brand'];
//    $price = $_REQUEST['price'];
//    $description = $_REQUEST['description'];

    $query = "UPDATE product SET 
                   name = '$name', 
                   category = '$category', 
                   brand = '$brand', 
                   price = '$price', 
                   description = '$description' 
               WHERE id = '$id'";

    $result = mysqli_query($connection, $query);

    if (!$result) die("The product cannot be edited");

    $_SESSION['message'] = 'Product Edited Succesfuly!';
    $_SESSION['type'] = 'warning';

    echo "edited";

//    header("Location: index.php");
