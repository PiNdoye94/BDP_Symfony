<?php

namespace App\Repository;

use App\Entity\Courant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Courant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Courant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Courant[]    findAll()
 * @method Courant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CourantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Courant::class);
    }

    // /**
    //  * @return Courant[] Returns an array of Courant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Courant
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
