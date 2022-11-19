<?php

include("database.php");

if (isset($_POST['id'])) {
    $id = $_GET['id'];
    $name = $_POST['model'];
    $category = $_POST['category'];
    $brand = $_POST['brand'];
    $price = $_POST['price'];
    $description = $_POST['description'];

    $query = "UPDATE product SET 
                   name = '$name', 
                   category = '$category', 
                   brand = '$brand', 
                   price = '$price', 
                   description = '$description' 
               WHERE id = $id";

    $result = mysqli_query($connection, $query);

    if (!$result) die("The product cannot be saved");

    $_SESSION['message'] = 'Product Saved Succesfuly!';
    $_SESSION['type'] = 'success';

//     echo "Saved";
    header("Location: index.php");
}
