<?php
session_start();

$usersFile = __DIR__ . '/../users.json';
$users = file_exists($usersFile) ? json_decode(file_get_contents($usersFile), true) : [];

// Sanitize inputs
$action = $_POST['action'] ?? '';
$email = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';
$name = trim($_POST['name'] ?? '');

if ($action === 'logout') {
    session_destroy();
    header('Location: index.php?page=login');
    exit;
}

if ($action === 'signup') {
    if (empty($name) || empty($email) || empty($password)) {
        header('Location: index.php?page=signup&error=All fields are required');
exit;
    }

    // Check if user exists
    foreach ($users as $u) {
        if (strtolower($u['email']) === strtolower($email)) {
            header('Location: index.php?page=signup&error=User already exist');
exit;
        }
    }

    $hashed = password_hash($password, PASSWORD_DEFAULT);
    $newUser = ['name' => $name, 'email' => $email, 'password' => $hashed];
    $users[] = $newUser;

    file_put_contents($usersFile, json_encode($users, JSON_PRETTY_PRINT));

    $_SESSION['user'] = ['name' => $name, 'email' => $email];
    header('Location: index.php?page=login&success=Account created successfully! Please log in.');
exit;

    exit;
}

if ($action === 'login') {
    if (empty($email) || empty($password)) {
        die('Email and password are required.');
    }

    foreach ($users as $u) {
        if (strtolower($u['email']) === strtolower($email) && password_verify($password, $u['password'])) {
            $_SESSION['user'] = ['name' => $u['name'], 'email' => $u['email']];
            header('Location: index.php?page=dashboard');
            exit;
        }
    }

    header('Location: index.php?page=login&error=Invalid credentials');
exit;
}

// fallback
die('Invalid request.');

