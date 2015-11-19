<?php
include("config_db.php");

$eval_score = $_POST['score'];
$remarks = $_POST['remarks'];

$query = "INSERT INTO result(F_ID, S_ID, RES_score, RES_remarks) VALUES(1, 1, '".$eval_score."', '".$remarks."')";
mysql_query($query);
?>		  