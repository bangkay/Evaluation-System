<?php

include("config_db.php");
?>

<html>
<body>

<table width="650" height="561"  border="0" align="center" cellpadding="1" cellspacing="1" >
    <tr>
          
            <td>Faculty Name:</td>
          <td><label>
            <?php
			
			 ?>

          </label></td>

			                                         <!-- mao ni ang sa Questionares -->
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
		  <?php
		  	$sql_que="select * from questionares";
			$res_que=mysql_query($sql_que) or die(mysql_error());
			$i=1;
			$tab_ind=7;
			while($row_que=mysql_fetch_array($res_que))
			{
				echo "<tr>";
				echo "<td align=\"center\">".$i."</td>";
				echo "<td>".$row_que['ques']."</td>";
				echo "<td> <input type=\"checkbox\" name=\"ans_$i\" </td>";
				echo "<td> <input type=\"checkbox\" name=\"ans_$i\" </td>";
				echo "<td> <input type=\"checkbox\" name=\"ans_$i\" </td>";
				echo "<td> <input type=\"checkbox\" name=\"ans_$i\"</td>";
				echo "<td> <input type=\"checkbox\" name=\"ans_$i\"</td>";
								
					echo "</tr>";$i++;
			}
		  ?>		  
		  </table>
		  
		  <table>
		  <tr>
		  <td>Remark:</td>
		  <td colspan="2"><textarea name="remark" style="width:650px; height:40px;" onkeypress="return isCharOnly(event);" tabindex="16"></textarea></td>
		  </tr>		  
		  	<tr>
				<td colspan="2"  class="rounded-foot-left" align="center"><input class="button" type="submit" name="submit" value="Submit" tabindex="17"/>&nbsp;
				<!-- <input type="reset" name="reset" value="Reset" tabindex="18" class="button"/></td> -->
				<!-- <td align="center" class="rounded-foot-right"></td> -->
			</tr>			
		  </table>
		  </td>
        </tr>
      </table>
    </form></td>
  </tr>
  <tr>
    <td width="697"  height="1"><?php include("footer.php")?></td>
  </tr>
  
 </body>
</html>  