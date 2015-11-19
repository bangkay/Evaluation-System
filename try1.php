<?php

include("config_db.php");
?>

<html>
<head>
	<script src="../evaluation-system/js/jquery-1.11.3.js"></script>
	<script src="../evaluation-system/js/evaluation.js"></script>
</head>
<body>

<!--
<table width="800" height="561"  border="0" align="center" cellpadding="1" cellspacing="1" >
    <tr>
          <td><label>
            <?php
			
			 ?>

          </label></td>
		 -->

			                                         <!-- mao ni ang sa Questionares -->
													 
<!--
    	<tr>
		<td colspan="10" align="center"><h3>Teacher 's Classroom Performance Evaluation Questionares</td>
		</tr>
          <td colspan="10" align="center">Note: Check No. of Ratings</td>
        </tr>
		<tr><td colspan="10" align="center">5 - always &nbsp 4 - Most of the Time &nbsp  3 - Sometimes &nbsp 2 - Rarely &nbsp  1 - Never </td>
		  </tr>
		<tr>
			
          <td colspan="5">
		  <table width="100%" id="rounded-corner" cellpadding="10" cellspacing="0" border="1" align="center">
-->

<div style="width: 800px; margin: 0 auto;">
	<div>
		<label>Student ID</label>
		<input type="text" id="s_id" />
		<input type="button" id="btnEvaluate" value="Evaluate" />
	</div>
	<div>
		<label>Teacher</label>
		<select id="drpTeacher">
			<option>Select..</option>
		</select>
	</div>
	<div>
		<label>Subject</label>
		<select id="drpSubj">
			<option>Select..</option>
		</select>
	</div>
	<br />
	<table width="800" height="561"  border="1" align="center" cellpadding="1" cellspacing="1">
		<thead>
			<tr>
				<th width="8%" class="rounded-company" align="center">ID</th>
				<th width="86%" class="rounded-q1" align="center">Evaluation Factor</th>
				<th width="6%" class="rounded-q4">5</th>
				<th width="6%" class="rounded-q4">4</th>
				<th width="6%" class="rounded-q4">3</th>
				<th width="6%" class="rounded-q4">2</th>
				<th width="6%" class="rounded-q4">1</th>
			</tr>
		</thead>
		<tbody id="items">
			<?php
				$sql_que="select * from question";
				$res_que=mysql_query($sql_que) or die(mysql_error());
				
				$i=1;
				$tab_ind=7;
				while($row_que=mysql_fetch_array($res_que))
				{
					echo '<tr>';
					echo '<td align="center">'.$i.'</td>';
					echo '<td>'.$row_que['Ques_Desc'].'</td>';
					
					echo '<td><input type="radio" name="updateField'.$i.'" value="5" /></td>';
					echo '<td><input type="radio" name="updateField'.$i.'" value="4" /></td>';
					echo '<td><input type="radio" name="updateField'.$i.'" value="3" /></td>';
					echo '<td><input type="radio" name="updateField'.$i.'" value="2" /></td>';
					echo '<td><input type="radio" name="updateField'.$i.'" value="1" /></td>';
						'</td>';
		
					echo '</tr>';
					$i++;
				}
			  ?>
		</tbody>
	</table>
	&nbsp <center><input type="button" id="btnSubmit" value="Submit" />
</div>

<?php include("footer.php")?>

<!--
		<form method="post">		  
		  <thead>
		  <tr >
		     <th width="8%" class="rounded-company" align="center">ID</th>			 
			 <th width="86%" class="rou	nded-q1" align="center">Evaluation Factor</th>
			 <th width="6%" class="rounded-q4">5</th>
			 <th width="6%" class="rounded-q3">4</th>	 
			 <th width="6%" class="rounded-q3">3</th>
			 <th width="6%" class="rounded-q3">2</th> 
			 <th width="6%" class="rounded-q3">1</th>
		  </tr>
		  </thead>
		  
		  </table>
		  
		  <table>
		  <tr>
		  <td>Remark:</td>
		  <td colspan="2"><textarea name="remark" style="width:650px; height:40px;" onkeypress="return isCharOnly(event);" tabindex="16"></textarea></td>
		  </tr>		  
		  	<tr>
				<td colspan="2"  class="rounded-foot-left" align="center"><input class="button" type="button" name="submit" value="Submit" tabindex="17"/>&nbsp;
			</form>
			-->

<!--
			</tr>			
		  </table>
		  </td>
        </tr>
      </table>
    </form></td>
  </tr>
  <tr>
    <td width="697"  height="1"></td>
  </tr>
  
 </body>
</html>  
-->