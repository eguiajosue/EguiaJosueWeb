<?php

$nombre = $_POST["nombre"];

require('./FPDF/fpdf.php');


$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',32);
$pdf->Cell(40,10,$nombre);
$pdf->Output();
?> 