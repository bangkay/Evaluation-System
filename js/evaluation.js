$(document).ready(function () {
	var subId = 0;
	var subName = "";
	
	$('#btnEvaluate').click(function () {
		studId = $('#s_id').val();
		
		if (!$.isNumeric(studId)) {
			alert("Invalid Student Id");
		}
		else {
			getCurrentRecordForInstructors(studId);
			getCurrentRecordForSubjects(studId);
		}
	});
	
	/*
	$('#drpSubj').change(function () {
		var subId = $('#drpSubj').val();
		
		$.ajax({
				type: "GET",
				url: "GetStudentCurrentInstructions.php",
				data: { subject_id: subId },
				dataType: "json",
				success: function (result) {
					$.each(result, function (index, value) {
						$('<option value=' + value.Teacher_ID + '>' + value.Fname + '</option>').appendTo('#drpTeacher');
					});
				},
				error: function (error) {
					console.log(error);
				}
			});
	});
	*/
	
	$('#btnSubmit').click(function () {
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
		
		$.ajax({
			type: "POST",
			url: "save_evaluation.php",
			data: { score: runningTotal, remarks: remarks },
			success: function (result) {
				console.log(result);
			},
			error: function (error) {
				console.log(error);
			}
	
		});
		
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
				getStudentCurrentInstructors(value.Faculty_Id);
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}

function getStudentCurrentInstructors(instructor_id) {
	$.ajax({
		type: "GET",
		url: "GetStudentCurrentInstructors.php",
		data: { instructor_id: instructor_id },
		dataType: "json",
		success: function (result) {
			$.each(result, function (index, value) {
				$('<option value=' + value.Teacher_ID + '>' + value.Fname + '</option>').appendTo('#drpTeacher');
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}

function getCurrentRecordForSubjects(student_id) {
	$.ajax({
		type: "GET",
		url: "GetStudentCurrentRecordForSubjects.php",
		data: { student_id: student_id },
		dataType: "json",
		success: function (result) {
			$.each(result, function (index, value) {
				getStudentCurrentEnrolledSubjects(value.Subject_Id);
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}

function getStudentCurrentEnrolledSubjects(subject_id) {
	$.ajax({
		type: "GET",
		url: "GetStudentCurrentEnrolledSubjects.php",
		data: { subject_id: subject_id },
		dataType: "json",
		success: function (result) {
			$.each(result, function (index, value) {
				$('<option value=' + value.Subject_ID + '>' + value.Subject_Name + '</option>').appendTo('#drpSubj');
			});
		},
		error: function (error) {
			console.log(error);
		}
	});
}