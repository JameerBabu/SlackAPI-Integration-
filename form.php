<?php



$message = "Parent Name is:".$_POST["Pname"]." \n" ."Student Name is:".$_POST["Sname"]."\n"."Student age is:". $_POST["Sage"]. "\n"."Mobile Number is:".$_POST["Number"]."\n". "Email is:". $_POST["email"]."\n"."Preferred Date is:". $_POST["Date"];

echo $message;


$url = 'https://hooks.slack.com/services/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';

$ch = curl_init($url);

$payload = array(
   "text" => $message
);


$jsonDataEncoded = json_encode($payload);


curl_setopt($ch, CURLOPT_POST, 1);

curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);


curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 


$result = curl_exec($ch);


echo $result ;



?>


