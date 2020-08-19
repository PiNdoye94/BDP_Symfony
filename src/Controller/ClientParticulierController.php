<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ClientParticulierController extends AbstractController
{
     /**
     * @Route("/clientparticulier", name="clientparticulier")
     */
    public function index()
    {
        return $this->render('clientparticulier/clientparticulier.html.twig');
    }
}
