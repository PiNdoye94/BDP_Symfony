<?php

namespace App\Entity;

use App\Repository\CourantRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CourantRepository::class)
 */
class Courant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomEmployeur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresseEmployeur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $raisonSociale;

    /**
     * @ORM\ManyToOne(targetEntity=Compte::class, inversedBy="courants")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Compte;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomEmployeur(): ?string
    {
        return $this->nomEmployeur;
    }

    public function setNomEmployeur(string $nomEmployeur): self
    {
        $this->nomEmployeur = $nomEmployeur;

        return $this;
    }

    public function getAdresseEmployeur(): ?string
    {
        return $this->adresseEmployeur;
    }

    public function setAdresseEmployeur(string $adresseEmployeur): self
    {
        $this->adresseEmployeur = $adresseEmployeur;

        return $this;
    }

    public function getRaisonSociale(): ?string
    {
        return $this->raisonSociale;
    }

    public function setRaisonSociale(string $raisonSociale): self
    {
        $this->raisonSociale = $raisonSociale;

        return $this;
    }

    public function getCompte(): ?Compte
    {
        return $this->Compte;
    }

    public function setCompte(?Compte $Compte): self
    {
        $this->Compte = $Compte;

        return $this;
    }
}
