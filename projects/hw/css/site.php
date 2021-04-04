<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>PHP Mike Dane</title>
  </head>
  <body>

    <?php

    echo "<br><br><br>";

    $phrase = "Giraffe Academy";

    /*-- Numers */
    echo floor(3.7); /* will always round DOWN, so to 3 here */
    echo ceil(3.3); /* will always round up, so to 4 here */
    echo round(3.2); /* will round it down to 3 */
    echo max(2, 10); /*gives the bigger number - opposite is min*/
    echo sqrt(144); /* square root so it gives 12*/
    echo pow(2, 4); /* gives back 2^4 */
    echo abs(-100); /* gives back the absolute value of 100 (without negative sign) */

    $num = 10;
    $num += 25;   /*-- is the same as $num = $num + 10; */
    $num -= 25;  /*-- is the same as $num = $num - 10; */




    echo "<br><br><br>";

    echo substr($phrase, 8, 3);
    echo str_replace("Giraffe", "Panda", $phrase);


     ?>


  </body>
</html>
