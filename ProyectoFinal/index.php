<?php include("database.php") ?>
<?php include("includes/header.php") ?>
    <div class="container p-4">
        <div class="row">
            <div class="col-md-3">
                <div class="card card-body">
                    <p class="card-title">PRODUCT INFO</p>
                    <form action="save.php" method="post">
                        <div class="form-group">
                            <input class="form-control mb-2" type="text" name="model" placeholder="Product's Model">
                        </div>
                        <div class="form-group mb-2">
                            <select class="form-select" name="category" id="">
                                <option>- Select one category -</option>
                                <option value="monitor">Monitor</option>
                                <option value="cabinet">Cabinet</option>
                                <option value="laptop">Laptop</option>
                                <option value="mouse">Mouse</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="speaker">Speakers</option>
                                <option value="ram">RAM</option>
                                <option value="hdd">HDD</option>
                                <option value="ssd">SSD</option>
                            </select>
                        </div>
                        <div class="form-group mb-2">
                            <input class="form-control" type="text" name="brand" placeholder="Product's Brand">
                        </div>
                        <div class="form-group mb-2">
                            <input type="number" name="price" id="price" class="form-control" placeholder="Price">
                        </div>
                        <textarea class="form-control mb-2" name="description" rows="5" placeholder="Product's Description"></textarea>

                        <div class="d-grid">
                            <input class="btn btn-primary" type="submit" value="Add Product" name="save">
                        </div>
                    </form>
                </div>

                <?php
                if (isset($_SESSION['message'])) { ?>
                    <div class="alert alert-<?=$_SESSION['type']?> alert-dismissible fade show mt-2" role="alert">
                        <?= $_SESSION['message'] ?>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                <?php session_unset(); } ?>
            </div>

            <div class="col-md-9">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $query = "SELECT * FROM product";
                            $products = mysqli_query($connection, $query);

                            while ($new_product = mysqli_fetch_array($products)) { ?>
                                <tr>
                                    <td> <?php echo $new_product['name'] ?> </td>
                                    <td> <?php switch ($new_product['category']) {
                                            case 'monitor': echo 'Monitor'; break;
                                            case 'cabinet': echo 'Cabinet'; break;
                                            case 'laptop': echo 'Laptop'; break;
                                            case 'mouse': echo 'Mouse'; break;
                                            case 'keyboard': echo 'Keyboard'; break;
                                            case 'speakers': echo 'Speakers'; break;
                                            case 'ram': echo 'RAM'; break;
                                            case 'hdd': echo 'HDD'; break;
                                            case 'ssd': echo 'SSD'; break;
                                        }?> </td>
                                    <td> <?php echo $new_product['brand'] ?> </td>
                                    <td> $<?php echo $new_product['price'] ?> </td>
                                    <td> <?php echo $new_product['description'] ?> </td>
                                    <td>
                                        <a class="btn btn-secondary" data-bs-toggle="modal" href="#updateModal<?php echo $new_product['id'] ?>" data-target="#updateModal<?php echo $new_product['id']?>">
                                            Edit
                                        </a>
                                        <a href="delete.php?id=<?php echo $new_product['id']?>" class="btn btn-danger">Delete</a>
                                    </td>
                                </tr>
                                 <?php include("editModal.php") ?>
                            <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
<?php include("includes/footer.php") ?>