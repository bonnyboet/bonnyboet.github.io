<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>


    
    <?php $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['comments'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "bonny.boet@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
    ?>
  </body>
</html>
