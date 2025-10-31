<?php
require_once __DIR__ . '/../vendor/autoload.php';
session_start();

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

// --- Setup Twig ---
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false, // change to /cache in production
]);

// --- Base Context ---
$context = [
    'user' => $_SESSION['user'] ?? null,
    'error' => $_GET['error'] ?? null,
    'success' => $_GET['success'] ?? null
];

// --- Simple Router ---
$page = $_GET['page'] ?? 'home';
$allowedPages = ['home', 'login', 'signup', 'dashboard', 'logout'];
if (!in_array($page, $allowedPages)) {
    $page = 'home';
}

switch ($page) {
    case 'login':
        $template = 'login.twig';
        break;

    case 'signup':
        $template = 'signup.twig';
        break;

    case 'dashboard':
        if (!isset($_SESSION['user'])) {
            header('Location: ?page=login&error=Please log in first');
            exit;
        }

        // Mock dashboard data
        $context['stats'] = [
            'open_tickets' => 4,
            'closed_tickets' => 7,
            'pending_tickets' => 2
        ];
        $context['tickets'] = [
            ['id' => 101, 'title' => 'Login issue', 'status' => 'open', 'created_at' => '2025-10-25'],
            ['id' => 102, 'title' => 'Payment not processing', 'status' => 'pending', 'created_at' => '2025-10-26'],
            ['id' => 103, 'title' => 'Page loading slowly', 'status' => 'closed', 'created_at' => '2025-10-27'],
        ];
        $template = 'dashboard.twig';
        break;

    case 'logout':
        session_destroy();
        header('Location: ?page=login&success=Logged out successfully');
        exit;

    default:
        $template = 'home.twig';
        break;
}
$context['base_url'] = '/public/';

echo $twig->render($template, $context);
