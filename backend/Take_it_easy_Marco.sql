-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: Take_it_easy
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

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
-- Table structure for table `Marco`
--

DROP TABLE IF EXISTS `Marco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Marco` (
  `id` int NOT NULL,
  `city` varchar(80) NOT NULL,
  `text_history` varchar(500) NOT NULL,
  `quote` varchar(200) NOT NULL,
  `ext_URL` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Marco`
--

LOCK TABLES `Marco` WRITE;
/*!40000 ALTER TABLE `Marco` DISABLE KEYS */;
INSERT INTO `Marco` VALUES (1,'Venise','La ville de Venise s’étend sur une série de 119 îles qui émergent d’une vaste lagune située entre la terre ferme et la haute mer. Jusqu’à sa fondation, elle était habitée par quelques Illyriens et Vénètes qui vivaient sur des palafittes et subsistaient de la pêche et de l’extraction de sel. ','\"Venise digère la foule par l’intestin de ses ruelles et la recrache sur les place\"','https://www.venise.net/histoire','https://upload.wikimedia.org/wikipedia/commons/a/ad/Canaletto_Entrance_to_the_Grand_Canal_Venice.jpg'),(2,'Istanbul','Istanbul est divisée en deux parties par le détroit du Bosphore : l\'une asiatique et l\'autre européenne.','\"Si la terre était une nation, Istanbul en serait la capitale \"','https://www.istanbul.fr/histoire','https://i.pinimg.com/564x/4f/0b/65/4f0b659e2896f7f0bb61da4a78e29a2a.jpg'),(3,'Alexendri','Historiquement, la ville est connue pour son phare. Le phare d\'Alexandrie a été construit au 3ème siècle avant J-C., puis détruit par deux tremblements de terre au XIVème siècle. Aussi, ce fut pendant près de deux millénaires l\'une des sept merveilles du monde antique. D\'une hauteur de 130 mètres, il était situé sur l\'île de Pharos, d\'où vient le mot phare.','\"Le feu brusla, quant et l\'arcenal où estoient les vaisseaux, celle grande et tant renommée librairie d\'Alexandrie.\"','https://www.egypte.fr/alexandrie','https://study.com/cimages/multimages/16/pharos_alexandria_fischer_von_erlach4989286192968261820.jpg'),(4,'Baghdad','La fondation de Bagdad fut décidée par le second calife abbasside Maṇsūr, avec l\'utilisation d\'un ancien nom iranien signifiant « la Dieudonnée ». Les plans furent tracés par des ingénieurs en 758 ; les travaux commencèrent quatre ans plus tard, et la date de 765 marque l\'installation réelle du souverain. La dénomination officielle fut Madinat al-Salam, la « cité de la paix ».','\"Rien de plus élégant, de plus ingénieux, de plus moral que la littérature persane, et en général, tout ce qui est sorti de la plume des littérateurs de Bagdad et Bassora.\"','https://fr.wikipedia.org/wiki/Bagdad','https://i.pinimg.com/564x/91/17/bc/9117bcc0dd6e0e33404ba5507d7a6eef.jpg'),(5,'Pékin','Pékin a une histoire vieille de près de 3000 ans, et a presque toujours été la capitale du pays lors des 700 dernières années. Elle fut la capitale de six des plus grandes dynasties, dont les empires Yuan, Ming et Qing; les plus grands et les plus puissants des empires Chinois.','\"Dans les temps anciens, on disait que l’empereur était un fils du Ciel.\"','https://www.pekin.fr/histoire','https://media.mutualart.com/Images/2018_09/13/12/124047708/c05280d7-1c47-4960-8780-ccc37f32f3ed_570.Jpeg'),(6,'Nara',' Le parc de Nara est célèbre pour ses cerfs apprivoisés déambulant en toute liberté. À proximité, le temple Todaiji renferme la plus grande statue de Bouddha en bronze au monde. D\'importants chemins de pèlerinage traversent la région du mont Yoshino, classé au patrimoine mondial de l\'UNESCO et qui est également un lieu d\'observation de cerisiers en fleurs idéal à l\'arrivée du printemps.','\"A Nara les cerfs sont comme les hommes : ils secachent\"','https://www.visitnara.jp/','https://upload.wikimedia.org/wikipedia/commons/3/36/Hiroshige_Man_on_horseback_crossing_a_bridge.jpg');
/*!40000 ALTER TABLE `Marco` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 17:17:03
