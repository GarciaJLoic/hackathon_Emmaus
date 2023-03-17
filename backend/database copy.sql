
CREATE DATABASE  IF NOT EXISTS `hackaton3` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hackaton3`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: hackaton3
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `configmini`
--

DROP TABLE IF EXISTS `configmini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configmini` (
  `id` int NOT NULL AUTO_INCREMENT,
  `android` int NOT NULL,
  `ram` int NOT NULL,
  `stockage` int NOT NULL,
  `ecran` varchar(45) NOT NULL,
  `reseau` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configmini`
--

LOCK TABLES `configmini` WRITE;
/*!40000 ALTER TABLE `configmini` DISABLE KEYS */;
INSERT INTO `configmini` VALUES (1,8,2,16,'4','4G');
/*!40000 ALTER TABLE `configmini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etat`
--

DROP TABLE IF EXISTS `etat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `etat` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etat`
--

LOCK TABLES `etat` WRITE;
/*!40000 ALTER TABLE `etat` DISABLE KEYS */;
INSERT INTO `etat` VALUES (1,'DEEE'),(2,'REPARABLE'),(3,'BLOQUE'),(4,'RECONDITIONABLE'),(5,'RECONDITIONNE');
/*!40000 ALTER TABLE `etat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phone`
--

DROP TABLE IF EXISTS `phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `remarque` varchar(150) NOT NULL,
  `maj` varchar(255) DEFAULT NULL,
  `donateur` varchar(255) NOT NULL,
  `idEmmaeusConnect` varchar(255) NOT NULL,
  `typeDeMateriel` varchar(255) NOT NULL,
  `categorie` varchar(45) NOT NULL,
  `statut` varchar(45) NOT NULL,
  `constructeur` varchar(45) NOT NULL,
  `infoBattery` varchar(45) DEFAULT NULL,
  `dateDeVente` date DEFAULT NULL,
  `observation` varchar(255) DEFAULT NULL,
  `gradeEsthetique` varchar(45) DEFAULT NULL,
  `serieEmei` varchar(255) DEFAULT NULL,
  `processeur` int NOT NULL,
  `os` varchar(255) DEFAULT NULL,
  `storage` int NOT NULL,
  `tailleEcran` varchar(45) NOT NULL,
  `resolution` decimal(2,0) DEFAULT NULL,
  `chargeur` varchar(45) DEFAULT NULL,
  `operateur` varchar(255) DEFAULT NULL,
  `couleur` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phone`
--

LOCK TABLES `phone` WRITE;
/*!40000 ALTER TABLE `phone` DISABLE KEYS */;
/*!40000 ALTER TABLE `phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phonecategory`
--

DROP TABLE IF EXISTS `phonecategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phonecategory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomCategorie` varchar(45) NOT NULL,
  `valTotaleMin` int NOT NULL,
  `valTotaleMax` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phonecategory`
--

LOCK TABLES `phonecategory` WRITE;
/*!40000 ALTER TABLE `phonecategory` DISABLE KEYS */;
INSERT INTO `phonecategory` VALUES (5,'1-HC',0,90),(6,'2-C',90,165),(7,'3-B',165,255),(8,'4-A',255,375),(9,'5-Premium',375,1000);
/*!40000 ALTER TABLE `phonecategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ponderation`
--

DROP TABLE IF EXISTS `ponderation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ponderation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `valeurPonderation` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ponderation`
--

LOCK TABLES `ponderation` WRITE;
/*!40000 ALTER TABLE `ponderation` DISABLE KEYS */;
INSERT INTO `ponderation` VALUES (1,-100),(2,-50),(3,-10),(4,-5),(5,0),(6,5),(7,10);
/*!40000 ALTER TABLE `ponderation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `acces` int NOT NULL DEFAULT '1',
  `hashedPassword` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'The Godmother','jacki',1,'$argon2id$v=19$m=65536,t=5,p=1$vMtj7Jt0rHAUd3wgJSxKmA$QI7Qx5mskffCop3yCCP7Jw7Rvb5QiuLPWHVx4pwCgbA'),(2,'The Godmother','jacki',1,'$argon2id$v=19$m=65536,t=5,p=1$NGQnSwlgkewvkh+Wp8d1lQ$VAZBPBqC57ytT9XUmJAC4hSMW7UdDhLdVLIbIksivaw');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valeur_a`
--

DROP TABLE IF EXISTS `valeur_a`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valeur_a` (
  `id` int NOT NULL AUTO_INCREMENT,
  `antutuMin` int NOT NULL,
  `antutuMax` int NOT NULL,
  `valeur_a` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valeur_a`
--

LOCK TABLES `valeur_a` WRITE;
/*!40000 ALTER TABLE `valeur_a` DISABLE KEYS */;
INSERT INTO `valeur_a` VALUES (1,0,50000,40),(2,50000,100000,44),(3,150000,200000,49);
/*!40000 ALTER TABLE `valeur_a` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valeur_m`
--

DROP TABLE IF EXISTS `valeur_m`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valeur_m` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mem` int NOT NULL,
  `valeur_m` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valeur_m`
--

LOCK TABLES `valeur_m` WRITE;
/*!40000 ALTER TABLE `valeur_m` DISABLE KEYS */;
INSERT INTO `valeur_m` VALUES (1,1,30),(2,2,40),(3,3,54);
/*!40000 ALTER TABLE `valeur_m` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valeur_s`
--

DROP TABLE IF EXISTS `valeur_s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valeur_s` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stockage` int NOT NULL,
  `valeur_s` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valeur_s`
--

LOCK TABLES `valeur_s` WRITE;
/*!40000 ALTER TABLE `valeur_s` DISABLE KEYS */;
INSERT INTO `valeur_s` VALUES (1,16,31),(2,32,45),(3,64,66);
/*!40000 ALTER TABLE `valeur_s` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-15 18:05:17

