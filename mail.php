<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$formcontent="$name \n Mensaje: $message \n Telefono $phone";
$recipient = "informes@geoenv.pe";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Gracias en breve nos comunicaremos con ud ...";
header("location:http://geoenv.pe");
?>