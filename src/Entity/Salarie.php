<?php

namespace App\Entity;

use App\Repository\SalarieRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SalarieRepository::class)
 */
class Salarie
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
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $profession;

    /**
     * @ORM\Column(type="integer")
     */
    private $salaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nomEntreprise;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresseEntreprise;

    /**
     * @ORM\Column(type="integer")
     */
    private $idEmployeur;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $carteIdentite;

    /**
     * @ORM\Column(type="date")
     */
    private $validiteCIN;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="salaries")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Client;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getProfession(): ?string
    {
        return $this->profession;
    }

    public function setProfession(string $profession): self
    {
        $this->profession = $profession;

        return $this;
    }

    public function getSalaire(): ?int
    {
        return $this->salaire;
    }

    public function setSalaire(int $salaire): self
    {
        $this->salaire = $salaire;

        return $this;
    }

    public function getNomEntreprise(): ?string
    {
        return $this->nomEntreprise;
    }

    public function setNomEntreprise(string $nomEntreprise): self
    {
        $this->nomEntreprise = $nomEntreprise;

        return $this;
    }

    public function getAdresseEntreprise(): ?string
    {
        return $this->adresseEntreprise;
    }

    public function setAdresseEntreprise(string $adresseEntreprise): self
    {
        $this->adresseEntreprise = $adresseEntreprise;

        return $this;
    }

    public function getIdEmployeur(): ?int
    {
        return $this->idEmployeur;
    }

    public function setIdEmployeur(int $idEmployeur): self
    {
        $this->idEmployeur = $idEmployeur;

        return $this;
    }

    public function getCarteIdentite(): ?string
    {
        return $this->carteIdentite;
    }

    public function setCarteIdentite(string $carteIdentite): self
    {
        $this->carteIdentite = $carteIdentite;

        return $this;
    }

    public function getValiditeCIN(): ?\DateTimeInterface
    {
        return $this->validiteCIN;
    }

    public function setValiditeCIN(\DateTimeInterface $validiteCIN): self
    {
        $this->validiteCIN = $validiteCIN;

        return $this;
    }

    public function getClient(): ?Client
    {
        return $this->Client;
    }

    public function setClient(?Client $Client): self
    {
        $this->Client = $Client;

        return $this;
    }
}
