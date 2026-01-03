<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Lire le JSON envoyé par React
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Vérification JSON
if (!$data || json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(["msg" => "Données non reçues ou JSON invalide"]);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["msg" => "Tous les champs sont requis !"]);
    exit;
}

// Connexion MySQL
$conn = new mysqli("localhost", "root", "", "portfolio");
if ($conn->connect_error) {
    echo json_encode(["msg" => "Erreur DB"]);
    exit;
}

// Insertion sécurisée
$stmt = $conn->prepare("INSERT INTO contact (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["msg" => "Message enregistré !"]);
} else {
    echo json_encode(["msg" => "Erreur insertion"]);
}

$stmt->close();
$conn->close();
