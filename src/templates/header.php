<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Innodra Solutions - Software Development Startup</title>
    <meta name="description" content="Innodra Solutions is a software development startup creating innovative digital solutions for businesses.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="/css/styles.css" rel="stylesheet">
    <link rel="icon" type="image/png" sizes="64x64" href="/img/innodra-cube.png">
    <link rel="icon" type="image/png" sizes="128x128" href="/img/innodra-cube-128.png">
    <link rel="apple-touch-icon" href="/img/innodra-cube-128.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="theme-color" content="#0f172a" />
    <link rel="preload" as="image" href="/img/innodra-cube-new.svg" type="image/svg+xml" />
    <?php if (defined('ENVIRONMENT') && ENVIRONMENT === 'development'): ?>
    <script>
        (function() {
            let ws = null;
            let reconnectAttempts = 0;
            const maxReconnectAttempts = 5;

            function connect() {
                ws = new WebSocket('ws://localhost:8080');
                
                ws.onopen = () => {
                    console.log('Connected to hot reload server');
                    reconnectAttempts = 0;
                };

                ws.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    if (data.type === 'reload') {
                        location.reload();
                    }
                };

                ws.onclose = () => {
                    console.log('Disconnected from hot reload server');
                    if (reconnectAttempts < maxReconnectAttempts) {
                        reconnectAttempts++;
                        console.log(`Reconnecting... Attempt ${reconnectAttempts}`);
                        setTimeout(connect, 1000);
                    }
                };

                ws.onerror = (error) => {
                    console.error('WebSocket Error:', error);
                };
            }

            connect();
        })();
    </script>
    <?php endif; ?>
</head>
<body class="bg-white font-sans">
<?php include_once BASE_PATH . '/src/templates/nav.php'; ?>