<?php

//$cust_name = $email_id = $mobile_no = $course_name = $message = 'NA';
//$to = "info@narainaviation.com";
$to = "anil.saini@azore.in";
$subject = "Site Contact @ www.NarainAviation.com";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Narain Aviation Admin <admin@narainaviation.com>' . "\r\n";
//$headers .= 'Bcc: anil.saini@azore.in' . "\r\n";
//$headers .= 'Bcc: roopak.gupta@azore.in' . "\r\n";

$msg = "Hello Admin,<br><br>New contact request received from <strong>".$form_name."</strong> form www.NarainAviation.com.<br><br><table>
<tr><td>Name: </td><td><b>Anil Saini</b></td></tr>
<tr><td>Email ID: </td><td><b>anil.saini@digigarage.in</b></td></tr>
<tr><td>Mobile No.: </td><td><b>8510945494</b></td></tr>";
if($form_name == "Contact_Us"){
$msg .= "<tr><td>Course: </td><td><b>NA</b></td></tr>";
}
$msg .= "<tr><td>Message: </td><td><b>Testing</b></td></tr>
</table>
<br><br>From:<br>Admin<br>www.NarainAviation.com";
//$this->email->attach($file_name);
echo 'Start<hr>';
echo $to.', '.$subject.', '.$msg.', '.$headers.'<hr>';

echo mail($to,$subject,$msg,$headers);

//echo 'Data Inserted';

?>