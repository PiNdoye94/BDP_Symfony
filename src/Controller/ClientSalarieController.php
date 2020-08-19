<?php

namespace App\Controller;

use App\Entity\Client;
use App\Entity\Salarie;
use App\Entity\Compte;
use App\Entity\Courant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ClientSalarieController extends AbstractController
{
    /**
     * @Route("/clientsalarie", name="clientsalarie")
     */
    public function index()
    {
        return $this->render('clientsalarie/clientsalarie.html.twig');
    }

    /**
     * @Route("/enregistrementclient", name="enregistrement")
     */
    public function salarie()
    {
        extract($_POST);
        // var_dump($_POST);
        // die();
        $client = new Client();
        $clientsalarie = new Salarie();
        $compte = new Compte();
        $comptecourant = new Courant();
        $em = $this->getDoctrine()->getManager();

        $client->setNom($nom);
        $client->setTelephone($telephone);
        $client->setAdresse($adresse);
        $client->setEmail($email);

        $em->persist($client);
        $em->flush();

        $clientsalarie->setPrenom($prenom);
        $clientsalarie->setProfession($profession);
        $clientsalarie->setSalaire($salaire);
        $clientsalarie->setNomEntreprise($nom_entreprise);
        $clientsalarie->setAdresseEntreprise($adresse_entreprise);
        $clientsalarie->setIdEmployeur($id_employeur); 
        $clientsalarie->setCarteIdentite($carte_identite);
        $clientsalarie->setValiditeCIN(new \DateTime($validite_identite));
        $clientsalarie->setClient($client);
       
        $em->persist($clientsalarie);
        $em->flush();

        $compte->setNumeroCompte($numero_compte);
        $compte->setNumeroAgence($numero_agence);
        $compte->setCleRib($cle_rib);
        $compte->setDateOuverture(new \DateTime());
        $compte->setSolde($solde);
        $compte->setClient($client);

        $em->persist($compte);
        $em->flush();

        $comptecourant->setnomEmployeur($nom_employeur);
        $comptecourant->setadresseEmployeur($adresse_employeur);
        $comptecourant->setraisonSociale($rs_employeur);
        $comptecourant->setCompte($compte);

        $em->persist($comptecourant);
        $em->flush();

        return $this->render('clientsalarie/clientsalarie.html.twig');
    }
    
}
