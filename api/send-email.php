<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$message = $data['message'] ?? '';

if (!$name || !$email || !$phone || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required']);
    exit;
}

$to = 'contact@netprocess.ma';
$subject = 'Nouveau message de contact - NETPROCESS';

$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
];

$emailBody = "
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; }
    </style>
</head>
<body>
    <div class='container'>
        <h2>Nouveau message de contact</h2>
        <div class='field'>
            <div class='label'>Nom:</div>
            <div>" . htmlspecialchars($name) . "</div>
        </div>
        <div class='field'>
            <div class='label'>Email:</div>
            <div>" . htmlspecialchars($email) . "</div>
        </div>
        <div class='field'>
            <div class='label'>Téléphone:</div>
            <div>" . htmlspecialchars($phone) . "</div>
        </div>
        <div class='field'>
            <div class='label'>Message:</div>
            <div>" . nl2br(htmlspecialchars($message)) . "</div>
        </div>
    </div>
</body>
</html>
";

$success = mail($to, $subject, $emailBody, $headers);

if ($success) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}