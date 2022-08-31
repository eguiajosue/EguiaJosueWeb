<div class="modal fade" id="updateModal<?php echo $new_product['id'] ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Edit Product</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card card-body">
                    <form action="update.php" method="post">
                        <div class="form-group row">
                            <label class="form-text col-sm-3 " for="name">Product's Id:</label>
                            <div class="col-sm-9">
                                <input class="form-control mb-2 disabled" disabled type="text" name="id"  value="<?= $new_product['id'] ?>">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="form-text col-sm-3" for="name">Product's Model:</label>
                            <div class="col-sm-9">
                                <input class="form-control mb-2" type="text" name="model" placeholder="Product's Model" value="<?= $new_product['name'] ?>">
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="form-text col-sm-3 " for="category">Product's Category:</label>
                            <div class="col-sm-9">
                                <select class="form-select" name="category" id="">
                                    <option>- Select one category -</option>
                                    <option value="monitor">Monitor</option>
                                    <option value="cabinet">Cabinet</option>
                                    <option value="cabinet">Laptop</option>
                                    <option value="mouse">Mouse</option>
                                    <option value="keyboard">Keyboard</option>
                                    <option value="speaker">Speakers</option>
                                    <option value="ram">RAM</option>
                                    <option value="hdd">HDD</option>
                                    <option value="ssd">SSD</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="form-text col-sm-3" for="brand">Product's Brand:</label>
                            <div class="col-sm-9">
                                <input class="form-control" type="text" name="brand" placeholder="Product's Brand" value="<?= $new_product['brand'] ?>">
                            </div>
                        </div>
                        <div class="form-group row mb-2">
                            <label class="form-text col-sm-3" for="price">Product's Price:</label>
                            <div class="col-sm-9">
                                <input type="number" name="price" id="price" class="form-control" placeholder="Price" value="<?= $new_product['price'] ?>">
                            </div>
                        </div>

                        <label class="form-text " for="description">Product's Description:</label>
                        <textarea class="form-control mb-2" name="description" rows="5" placeholder="Product's Description" ><?= $new_product['description'] ?></textarea>

<!--                        <a href="update.php?id=--><?php //echo $new_product['id']?><!--" class="btn btn-primary">Update</a>-->
                        <input href="update.php?id=<?php echo $new_product['id']?>" class="btn btn-primary" type="submit" value="Update Product" name="update">
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>