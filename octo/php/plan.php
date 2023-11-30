<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Simulando dados do plano
    $planoPremium = [
        'name' => 'Plano PREMIUM',
        'price' => 25,
        'currency' => '$',
        'duration' => '/mês',
        'features' => [
            'Teste de aptidão',
            'Conteúdo exclusivo',
            'Tutoria',
            'Quiz',
            'Planejamento de carreira',
            'Simulação de investimento'
        ]
    ];

    // Convertendo o array para JSON e retornando
    echo json_encode($planoPremium);
} else {
    // Método não suportado
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
}
?>
