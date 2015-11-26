$(document).ready(function () {
	var studId = 0;
	var teacherId = 0;
	var subId = 0;
	var subName = "";
	
	studId = parseInt($('#txtStudId').val());
	getCurrentRecordForInstructors(studId);
	
	$('#drpTeacher').change(function () {
		$('#drpSubj').empty();
		
		teacherId = parseInt($('#drpTeacher').val());
		
		getCurrentRecordForSubjects(studId, teacherId);
	});
	
	$('#btnSubmit').click(function () {
		// Get score per category
		var count = 1;
		var questionCount = 0;
		var catIndex = $('#items').find('tr td p.category-header');
		
		var catRunningTotal = 0;
		var average = 0;
		
		$.each(catIndex, function (index, value) {
			var catItems = $('#items').find('tr.category_questions' + count);
			
			$.each(catItems, function (index, value) {
				var $tds = $(this).find('td');
				
				var r5 = $tds.eq(2);
				var r4 = $tds.eq(3);
				var r3 = $tds.eq(4);
				var r2 = $tds.eq(5);
				var r1 = $tds.eq(6);
				
				var rb5 = $(r5).find('input[type=radio]');
				var rb5Checked = $(rb5).is(':checked');
				if (rb5Checked) {
					catRunningTotal += parseInt(rb5.val());
					questionCount++;
				}
				else {
					catRunningTotal += 0;
					questionCount++;
				}
				
				var rb4 = $(r4).find('input[type=radio]');
				var rb4Checked = $(rb4).is(':checked');
				if (rb4Checked) {
					catRunningTotal += parseInt(rb4.val());
					questionCount++;
				}
				else {
					catRunningTotal += 0;
					questionCount++;
				}
				
				var rb3 = $(r3).find('input[type=radio]');
				var rb3Checked = $(rb3).is(':checked');
				if (rb3Checked) {
					catRunningTotal += parseInt(rb3.val());
					questionCount++;
				}
				else {
					catRunningTotal += 0;
					questionCount++;
				}
				
				var rb2 = $(r2).find('input[type=radio]');
				var rb2Checked = $(rb2).is(':checked');
				if (rb2Checked) {
					catRunningTotal += parseInt(rb2.val());
					questionCount++;
				}
				else {
					catRunningTotal += 0;
					questionCount++;
				}
				
				var rb1 = $(r1).find('input[type=radio]');
				var rb1Checked = $(rb1).is(':checked');
				if (rb1Checked) {
					catRunningTotal += parseInt(rb1.val());
					questionCount++;
				}
				else {
					catRunningTotal += 0;
					questionCount++;
				}
			});
			
			average = catRunningTotal / questionCount;
			console.log(count + ' ' + average);
			
			count++;
		});
		
		// Get Overall Evaluation Score
		/*
		var runningTotal = 0;
		var remarks = "";
		var temp = 0;
		var rows = $('#items').find('tr');
		
		$.each(rows, function (index, value) {
			var $tds = $(this).find('td');
			
			var r5 = $tds.eq(2);
			var r4 = $tds.eq(3);
			var r3 = $tds.eq(4);
			var r2 = $tds.eq(5);
			var r1 = $tds.eq(6);
			
			var rb5 = $(r5).find('input[type=radio]');
			var rb5Checked = $(rb5).is(':checked');
			if (rb5Checked) {
				runningTotal += parseInt(rb5.val());
			}
			else {
				runningTotal += 0;
			}
			
			var rb4 = $(r4).find('input[type=radio]');
			var rb4Checked = $(rb4).is(':checked');
			if (rb4Checked) {
				runningTotal += parseInt(rb4.val());
			}
			else {
				runningTotal += 0;
			}
			
			var rb3 = $(r3).find('input[type=radio]');
			var rb3Checked = $(rb3).is(':checked');
			if (rb3Checked) {
				runningTotal += parseInt(rb3.val());
			}
			else {
				runningTotal += 0;
			}
			
			var rb2 = $(r2).find('input[type=radio]');
			var rb2Checked = $(rb2).is(':checked');
			if (rb2Checked) {
				runningTotal += parseInt(rb2.val());
			}
			else {
				runningTotal += 0;
			}
			
			var rb1 = $(r1).find('input[type=radio]');
			var rb1Checked = $(rb1).is(':checked');
			if (rb1Checked) {
				runningTotal += parseInt(rb1.val());
			}
			else {
				runningTotal += 0;
			}
		});
		
		if (runningTotal >= 40 && runningTotal <= 50)
			remarks = "Excellent";
		else if (runningTotal >= 30 && runningTotal <= 39)
			remarks = "Very Satisfactory";
		else if (runningTotal >= 20 && runningTotal <= 29)
			remarks = "Very Good";
		else if (runningTotal >= 10 && runningTotal <= 19)
			remarks = "Good";
		else if (runningTotal >= 1 && runningTotal <= 9)
			remarks = "Need Improvement"
		else
			remarks = "";
		
		var facultyId = teacherId;
		var subjectId = $('#drpSubj').val();
		var score = runningTotal;
		
		console.log(score + ' ' + remarks);
		
		$.ajax({
			type: "POST",
			url: "SaveEvaluation.php",
			data: { facultyId: facultyId, subjectId: subjectId, score: score, remarks: remarks },
			success: function (result) {
				if (result[0].status == 1)
					alert(result[0].message);
			},
			error: function (error) {
				console.log(error);
			}
		});
		*/
	});	
});

function getCurrentRecordForInstructors(student_id) {
	$.ajax({
		type: "GET",
		url: "GetStudentCurrentRecordForInstructors.php",
		data: { student_id: student_id },
		dataType: "json",
		success: function (result) {
			$.each(result, function (index, value) {
				$('<option value=' + value.Faculty_Id + '>' + value.Faculty_Name + '</option>').appendTo('#drpTeacher');
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}

function getCurrentRecordForSubjects(student_id, teacher_id) {
	$.ajax({
		type: "GET",
		url: "GetStudentCurrentRecordForSubjects.php",
		data: { student_id: student_id, teacher_id: teacher_id },
		dataType: "json",
		success: function (result) {
			$.each(result, function (index, value) {
				$('<option value=' + value.Subject_Id + '>' + value.Subject_Name + '</option>').appendTo('#drpSubj');
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}