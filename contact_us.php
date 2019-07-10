<?php

date_default_timezone_set('Asia/Kolkata');
$conn = new mysqli("localhost", "naraiyxn_admin", "F}b2.-MJ@nks", "naraiyxn_aviation");
// $conn = new mysqli("localhost", "root", "", "narain");
if($conn->connect_error){	die("Connection failed: " . $conn->connect_error);	}

$cust_name = $email_id = $mobile_no = $message = "";
$course_name = 'NA';

$form_name = $_POST['form_name'];

if($form_name == "Early_Bird" || $form_name == "Contact_Us"){
	$cust_name = ucwords(trim($_POST['cust_name']));
	$email_id = strtolower(trim($_POST['email_id']));
	$mobile_no = trim($_POST['mobile_no']);
	$message = $_POST['message'];
	$course_name = $_POST['course_name'];
	// if($form_name == "Contact_Us"){		$course_name = $_POST['course_name'];	} 
	
	/* if($form_name == "Early_Bird"){
		$cust_name = ucwords(trim($_POST['stu_name']));
		$email_id = strtolower(trim($_POST['stu_email_id']));
		$mobile_no = trim($_POST['stu_mobile_no']);
		$message = $_POST['stu_message'];
	}
	else if($form_name == "Contact_Us"){
		$cust_name = ucwords(trim($_POST['con_name']));
		$email_id = strtolower(trim($_POST['con_email_id']));
		$mobile_no = trim($_POST['con_mobile_no']);
		$course_name = $_POST['con_course_name'];
		$message = $_POST['con_message'];
	} */
	if($course_name == ""){$course_name = "NA";}
	if($message == ""){	$message = "NA";}
	
	// echo $form_name.', '.$cust_name.', '.$mobile_no.', '.$email_id.', '.$course_name.', '.$message;
	// die;
	
	if($form_name != "" && $cust_name != "" && $mobile_no != "" && $email_id != "" && $course_name != "" && $message !=""){
		$sql_query = "INSERT INTO narainaviation_contact_us VALUES(DEFAULT, '$form_name', '$cust_name', '$email_id', '$mobile_no', '$course_name', '$message', '".date('Y-m-d H:i:s')."', DEFAULT, DEFAULT, DEFAULT);";
		$result = $conn->query($sql_query);
		//echo $result;
		if($result){
		/* if($result == '1'){ */
			
			$to = "info@narainaviation.com";
			//$to = "anil.saini@azore.in";
			$subject = "Site Contact @ www.NarainAviation.com";
			
			$headers = "MIME-Version: 1.0" . "\r\n";
			$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
			$headers .= 'From: Narain Aviation Admin <admin@narainaviation.com>' . "\r\n";
			$headers .= 'Bcc: anil.saini@azore.in' . "\r\n";
			//$headers .= 'Bcc: roopak.gupta@azore.in' . "\r\n";
			
			$msg = "Hello Admin,<br><br>New contact request received from <strong>".$form_name."</strong> form www.NarainAviation.com.<br><br><table>
			<tr><td>Name: </td><td><b>" . $cust_name . "</b></td></tr>
			<tr><td>Email ID: </td><td><b>" . $email_id . "</b></td></tr>
			<tr><td>Mobile No.: </td><td><b>" . $mobile_no . "</b></td></tr>";
			if($form_name == "Contact_Us"){
				$msg .= "<tr><td>Course: </td><td><b>" . $course_name . "</b></td></tr>";
			}
			$msg .= "<tr><td>Message: </td><td><b>" . $message . "</b></td></tr>
			</table>
			<br><br>From:<br>Admin<br>www.NarainAviation.com";
			//$this->email->attach($file_name);
			mail($to,$subject,$msg,$headers);
			echo 'Data Inserted';
		}
		else
		{
			echo 'Error1';
		}	
	}
	else{
		//echo 'Incomplete Data';
		echo 'Error2';
	}	
}
else{
	echo 'Error3';
}

$conn->close();


?>