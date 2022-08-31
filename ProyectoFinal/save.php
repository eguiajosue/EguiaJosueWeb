<?php

include("database.php");

if (isset($_POST['save'])) {
    $name = $_POST['model'];
    $category = $_POST['category'];
    $brand = $_POST['brand'];
    $price = $_POST['price'];
    $description = $_POST['description'];

    $query = "INSERT INTO product(name, category, brand, price, description) 
                VALUES ('$model', '$category', '$brand','$price', '$description')";

    $result = mysqli_query($connection, $query);
#
    if (!$result) die("The product cannot be saved");

    $_SESSION['message'] = 'Product Saved Succesfuly!';
    $_SESSION['type'] = 'success';

    // echo "Saved";
    header("Location: index.php");
}
