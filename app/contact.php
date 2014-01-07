<?php

/* Get POST data in JSON format */
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

/* Compose email */
$email_to = "sweetjamaican@gmail.com";
$email_from = "admin@wrapxaymaca.com";
$email_subject = "Contact Form submission from wrapxaymaca.com";
$email_message = "";
foreach($request as $key => $val) {
	$email_message .= "$key: $val\n";
}

$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();

/* Send message */
$outcome = mail($email_to, $email_subject, $email_message, $headers);
if($outcome == 1) {
	echo "Submission success!";
}
else {
	echo "Submission error.";
}

?>