<?php
include("config_db.php");

$student_id = $_GET['student_id'];

$query = "SELECT DISTINCT F_ID FROM current_record WHERE S_ID = '".$student_id."' ";

$result = mysql_query($query);

while ($row = mysql_fetch_array($result))
{
	$data[] = array('Faculty_Id' => $row['F_ID']);
}

echo json_encode($data);
?>