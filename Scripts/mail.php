<?php
  $subject = $_GET["subject"];
  $message = $_GET["message"];

  mail("johnrivard23@gmail.com", $subject, $message);
 ?>
