<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// connect database
$conn = new mysqli('localhost', 'root', 'julia_youn_lmft');

if ($conn->connect_error) {
    die('Connection Failed  :  ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare('insert into restration(name, email, message) values(?,?,?)');
    $stmt->bind_param("sss", $name, $email, $message);
    echo "message successfully sent...";
    $stmt->close();
    $conn->close();
}
