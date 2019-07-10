<?php

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Narain Aviation Admin <admin@narainaviation.com>' . "\r\n";
//echo $to.', '.$subject.', '.$msg.', '.$headers.'<hr>';
//echo mail('me.anilsaini@gmail.com','Site Contact @ www.NarainAviation.com','Hello Admin',$headers);
echo mail('anil.saini@azore.in','Site Contact @ www.NarainAviation.com','Hello Admin',$headers);

?>