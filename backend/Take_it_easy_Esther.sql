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
-- Table structure for table `Esther`
--

DROP TABLE IF EXISTS `Esther`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Esther` (
  `id` int NOT NULL,
  `city` varchar(200) NOT NULL,
  `text_history` varchar(500) NOT NULL,
  `quote` text NOT NULL,
  `ext_URL` varchar(200) NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Esther`
--

LOCK TABLES `Esther` WRITE;
/*!40000 ALTER TABLE `Esther` DISABLE KEYS */;
INSERT INTO `Esther` VALUES (1,'Jérusalem','Peu de villes dans le monde peuvent se vanter d avoir une histoire comparable à celle de Jérusalem. La Ville Sainte a été le berceau de trois grandes religions, elle a attiré le regard des souverains et des empereurs au cours des siècles et son héritage passionnant a survécu au passage du temps.','\"Jérusalem, l Eternelle, capitale du roi David et du jeune Etat d Israël, posée sur les collines de Judée portait en elle seule un message spirituel. Son nom signifiait : PAIX.\"','https://www.jerusalem.fr/histoire','https://histoire-image.org/sites/default/files/2021-11/prise-jerusalem-croises-1099.jpg'),(2,'Damas','En arabe, la cité s appelle دمشق الشام (Dimachq al-Chām), bien que ceci soit souvent abrégé en Dimachq ou al-Chām par les habitants de Damas, de Syrie et des pays arabes voisins. L étymologie du mot ancien « Damascus » est incertaine, mais elle est souvent considérée comme étant présémitique.','\"Damas est en sucre, mais la patrie est plus douce.\"','https://fr.wikipedia.org/wiki/Damas','https://www.peintures-tableaux.com/pic/Oil%20Painting%20Masterpieces%20on%20Canvas/Gustav%20Bauernfeind_German_1848-1904/7-The-Gate-of-the-Great-Umayyad-Mosque-Damascus-Gustav-Bauernfeind-Orientalist.jpg'),(3,'Alep','Située à l emplacement de l antique Bérée (en grec ancien : Βέροια / Béroia ; en latin : Berœa), Alep est une ancienne métropole, l une des plus vieilles villes du monde à avoir été constamment habitée, étant habitée depuis le VIe millénaire av. J.-C. Son importance historique est attribuée à son emplacement stratégique en tant que centre de commerce à mi-chemin entre la mer Méditerranée et la Mésopotamie (l Irak moderne), puis à sa situation sur la route de la soie.','\"Alep, avec sa pierre blanche, ses pistaches, sa confiture de rose, sa musique et sa cuisine d’un grand raffinement, Alep avec ses musulmans, ses chrétiens, ses juifs (qui ne l’ont quitté qu’après la naissance d’Israël), ses athées et agnostiques, ses Arméniens, ses Kurdes, ses Circassiens est en train de s’éteindre.\"','https://fr.wikipedia.org/wiki/Alep','https://i.pinimg.com/564x/27/a3/4d/27a34d3f5eabf136d648bab41406975e.jpg'),(4,'Homs','D après le comte du Mesnil du Buisson, « le monticule artificiel » de la citadelle de Homs « est certainement le piédestal d une ville de haute époque : les coupes de terrain y font reconnaitre une stratification d édifices en briques crues, parfois incendiés ; cette accumulation de ruines, qui s est prolongée sur le dessus jusqu à l époque romaine et à l époque arabe, remonte au moins au IIe millénaire avant notre ère.','« la ville aux pierres noires »','https://fr.wikipedia.org/wiki/Homs','https://upload.wikimedia.org/wikipedia/commons/6/6a/Cassas_Miger_Ch%C3%A2teau_et_portion_de_la_ville_de_Hemss%2C_jadis_%C3%89m%C3%A8se.jpg'),(5,'Baalbeck','L’histoire de Baalbek remonte au moins à la fin du IIIe millénaire av. J.-C. Baalbek était une ville phénicienne florissante où était célébré le culte de Baal chez les Phéniciens et les Cananéens. Cette divinité orientale, dieu de la foudre qui donnait aussi des pluies bienfaisantes, formait avec Astarté, sa parèdre féminine, le couple divin le plus populaire dans la zone phénico-cananéenne.','\"C était en effet la merveille du désert, la fabuleuse Baalbek, qui sortait toute éclatante de son sépulcre inconnu, pour nous raconter des âges dont l histoire a perdu la mémoire.\"','https://fr.wikipedia.org/wiki/Baalbek','https://www.cosmovisions.com/images/Baalbek.jpg'),(6,'Palmyre ','Oasis du désert de Syrie au nord-est de Damas, Palmyre abrite les ruines monumentales d une grande ville qui fut l un des plus importants foyers culturels du monde antique. Au carrefour de plusieurs civilisations, l art et l architecture de Palmyre unirent aux Ier et IIe siècles les techniques gréco-romaines aux traditions locales et aux influences de la Perse.','\"Mon lit est parfumé d aloès et de myrrhe; - L odorant cinnamome et la nard de Palmyre - Ont chez moi de l Egypte embaumé les tapis.\"','https://whc.unesco.org/fr/list/23/','https://i.pinimg.com/564x/0e/e2/1f/0ee21f69d20e8c695dff5075e42e2966.jpg');
/*!40000 ALTER TABLE `Esther` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25  3:45:30
