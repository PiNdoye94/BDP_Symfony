<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200819112330 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, email VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compte (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, numero_compte INT NOT NULL, numero_agence INT NOT NULL, cle_rib INT NOT NULL, date_ouverture DATE NOT NULL, solde INT NOT NULL, INDEX IDX_CFF6526019EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE courant (id INT AUTO_INCREMENT NOT NULL, compte_id INT NOT NULL, nom_employeur VARCHAR(255) NOT NULL, adresse_employeur VARCHAR(255) NOT NULL, raison_sociale VARCHAR(255) NOT NULL, INDEX IDX_CB97613AF2C56620 (compte_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE salarie (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, prenom VARCHAR(255) NOT NULL, profession VARCHAR(255) NOT NULL, salaire INT NOT NULL, nom_entreprise VARCHAR(255) NOT NULL, adresse_entreprise VARCHAR(255) NOT NULL, id_employeur INT NOT NULL, carte_identite VARCHAR(255) NOT NULL, validite_cin DATE NOT NULL, INDEX IDX_828E3A1A19EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE compte ADD CONSTRAINT FK_CFF6526019EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE courant ADD CONSTRAINT FK_CB97613AF2C56620 FOREIGN KEY (compte_id) REFERENCES compte (id)');
        $this->addSql('ALTER TABLE salarie ADD CONSTRAINT FK_828E3A1A19EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE compte DROP FOREIGN KEY FK_CFF6526019EB6921');
        $this->addSql('ALTER TABLE salarie DROP FOREIGN KEY FK_828E3A1A19EB6921');
        $this->addSql('ALTER TABLE courant DROP FOREIGN KEY FK_CB97613AF2C56620');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE compte');
        $this->addSql('DROP TABLE courant');
        $this->addSql('DROP TABLE salarie');
    }
}
