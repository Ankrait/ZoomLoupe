<?php
$email = $_POST['email'];

$filename = __DIR__ . '/file_to_write_to.csv';

file_put_contents($filename,  PHP_EOL . $email, FILE_APPEND);
    
echo "<script>window.close()</script>"
?>