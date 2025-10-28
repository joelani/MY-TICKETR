<?php
require_once __DIR__ . '/../vendor/autoload.php';
session_start();

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

// Setup Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false, // change to /cache in production
]);

// --- Simple Router ---
$page = $_GET['page'] ?? 'home';
$error = $_GET['error'] ?? null;
$success = $_GET['success'] ?? null;

// --- Base Context ---
$context = [
    'user' => $_SESSION['user'] ?? null,
    'error' => $error,
    'success' => $success
];

// --- Mock data for dashboard ---
$sampleStats = [
    'open_tickets' => 4,
    'closed_tickets' => 7,
    'pending_tickets' => 2
];

$sampleTickets = [
    ['id' => 101, 'title' => 'Login issue', 'status' => 'open', 'created_at' => '2025-10-25'],
    ['id' => 102, 'title' => 'Payment not processing', 'status' => 'pending', 'created_at' => '2025-10-26'],
    ['id' => 103, 'title' => 'Page loading slowly', 'status' => 'closed', 'created_at' => '2025-10-27'],
];

// --- Routing Logic ---
switch ($page) {
    case 'login':
        echo $twig->render('login.twig', $context);
        break;

    case 'signup':
        echo $twig->render('signup.twig', $context);
        break;

    case 'dashboard':
        if (!isset($_SESSION['user'])) {
            header('Location: ?page=login');
            exit;
        }

        // Add mock dashboard data
        $context['stats'] = $sampleStats;
        $context['tickets'] = $sampleTickets;

        echo $twig->render('dashboard.twig', $context);
        break;

    case 'logout':
        session_destroy();
        header('Location: ?page=login&success=Logged out successfully');
        exit;

    default:
        echo $twig->render('home.twig', $context);
        break;
}
