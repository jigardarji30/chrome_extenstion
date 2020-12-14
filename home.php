<?php

$password = $_POST['string'];
if ($password == "" || $password == null) {
    // http_response_code(422);
    echo json_encode([
        'status' => false,
        'data' => '',
        'message' => 'String field is required'
    ]);
} else {

    $hash = password_hash($password, PASSWORD_DEFAULT);
    // http_response_code(200);
    echo json_encode([
        'status' => true,
        'data' => $hash,
        'message' => 'Password hashed successfully'
    ]);
}
