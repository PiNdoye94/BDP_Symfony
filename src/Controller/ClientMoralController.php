<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ClientMoralController extends AbstractController
{
   /**
     * @Route("/clientmoral", name="clientmoral")
     */
    public function index()
    {
        return $this->render('clientmoral/clientmoral.html.twig');
    }
}
