<?php

namespace App\Entity;

use App\Repository\CompteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CompteRepository::class)
 */
class Compte
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

   

    /**
     * @ORM\Column(type="integer")
     */
    private $numeroAgence;

    /**
     * @ORM\Column(type="integer")
     */
    private $cleRib;

    /**
     * @ORM\Column(type="date")
     */
    private $dateOuverture;

    /**
     * @ORM\Column(type="integer")
     */
    private $solde;

    /**
     * @ORM\ManyToOne(targetEntity=Client::class, inversedBy="comptes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Client;

    /**
     * @ORM\OneToMany(targetEntity=Courant::class, mappedBy="Compte")
     */
    private $courants;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $numeroCompte;

    public function __construct()
    {
        $this->courants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroCompte(): ?string
    {
        return $this->numeroCompte;
    }

    public function setNumeroCompte(string $numeroCompte): self
    {
        $this->numeroCompte = $numeroCompte;

        return $this;
    }

    public function getNumeroAgence(): ?int
    {
        return $this->numeroAgence;
    }

    public function setNumeroAgence(int $numeroAgence): self
    {
        $this->numeroAgence = $numeroAgence;

        return $this;
    }

    public function getCleRib(): ?int
    {
        return $this->cleRib;
    }

    public function setCleRib(int $cleRib): self
    {
        $this->cleRib = $cleRib;

        return $this;
    }

    public function getDateOuverture(): ?\DateTimeInterface
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(\DateTimeInterface $dateOuverture): self
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getSolde(): ?int
    {
        return $this->solde;
    }

    public function setSolde(int $solde): self
    {
        $this->solde = $solde;

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

    /**
     * @return Collection|Courant[]
     */
    public function getCourants(): Collection
    {
        return $this->courants;
    }

    public function addCourant(Courant $courant): self
    {
        if (!$this->courants->contains($courant)) {
            $this->courants[] = $courant;
            $courant->setCompte($this);
        }

        return $this;
    }

    public function removeCourant(Courant $courant): self
    {
        if ($this->courants->contains($courant)) {
            $this->courants->removeElement($courant);
            // set the owning side to null (unless already changed)
            if ($courant->getCompte() === $this) {
                $courant->setCompte(null);
            }
        }

        return $this;
    }
}
