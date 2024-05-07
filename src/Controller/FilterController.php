<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class FilterController extends AbstractController
{
    #[Route('/filter', name: 'app_filter')]
    public function index(): Response
    {
        return $this->render('filter/index.html.twig', [
            'controller_name' => 'FilterController',
        ]);
    }

    #[Route('/hello-404', name: 'app_hello_404')]
    public function notFound(): Response
    {
        throw $this->createNotFoundException('Ops! Risorsa non trovata');
    }
}
