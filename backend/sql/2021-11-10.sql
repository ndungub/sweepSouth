-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: catalog_comedy
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `blacklist_tokens`
--

DROP TABLE IF EXISTS `blacklist_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blacklist_tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL,
  `blacklisted_on` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `token_2` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blacklist_tokens`
--

LOCK TABLES `blacklist_tokens` WRITE;
/*!40000 ALTER TABLE `blacklist_tokens` DISABLE KEYS */;
INSERT INTO `blacklist_tokens` VALUES (1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ5NjgyMDAsImlhdCI6MTYyNDk2NzYwMCwic3ViIjo2fQ.hb18goRFZ42iNAB2dCjgmfACz1kkpDeaLwNMmZpWoKo','2021-06-29 14:53:27'),(2,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMjcyMDAsImlhdCI6MTYyNTEyNjYwMCwic3ViIjo2fQ.yjTOh6GAFPLYjccX6joVv3kms2zV_HK2r9TYWVe_gPE','2021-07-01 11:03:25'),(3,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMjc1MjQsImlhdCI6MTYyNTEyNjkyNCwic3ViIjo2fQ.7P0XiZJKK-bTClVqtg4U1LMmJZjbzMa2x1Ifsf-0aAc','2021-07-01 11:09:06'),(4,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMjc5OTIsImlhdCI6MTYyNTEyNzM5Miwic3ViIjo2fQ.tG5nFvvLqhdEcPI5Zp-3nxOIPCm81iMjP8teDjXTOl8','2021-07-01 11:16:41'),(5,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMjgwNTEsImlhdCI6MTYyNTEyNzQ1MSwic3ViIjo2fQ.V7KuTJsdFagKh8WopX7zzY01N1TiJ4-gz1gBv73rpa8','2021-07-01 11:17:35'),(6,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMzAwNzQsImlhdCI6MTYyNTEyOTQ3NCwic3ViIjo2fQ.uY7xay2EsYASlnvfHECZKgLD3MAfIDdVcLwBF1cTZ9c','2021-07-01 11:52:14'),(7,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMzY1NDUsImlhdCI6MTYyNTEzNTk0NSwic3ViIjo2fQ.pnGo09IZ4W8ZuaL1huUQtK8N-qylQ4NYrcLygA7nbvY','2021-07-01 13:39:40'),(8,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxMzY2MjMsImlhdCI6MTYyNTEzNjAyMywic3ViIjo2fQ.rH4_f837ew6fzqsMOyvRTkFNqh9K6oVoj2W7PR8mhnk','2021-07-01 13:41:10'),(9,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUxNDExNDgsImlhdCI6MTYyNTE0MDU0OCwic3ViIjo2fQ.IQVZRKG6H0zW7YXyoTbMzOVgTt7dmUhKEnttvZ6M2sE','2021-07-01 14:56:51'),(10,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUyOTg0MTMsImlhdCI6MTYyNTI5NzgxMywic3ViIjo2fQ.bbIcT1nfYvBCzhmdMuRdle6AEdZEcLYtDqlCywXuDkw','2021-07-03 10:38:37'),(11,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUzMDE1NTQsImlhdCI6MTYyNTMwMDM1NCwic3ViIjo2fQ.4mHI7-DyfFbfbxAN1we7kLt9Th-ShoLfescU5yrss4A','2021-07-03 11:23:21'),(12,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjUzMTE0ODMsImlhdCI6MTYyNTMxMDI4Mywic3ViIjo2fQ.AeGU-SngzDx3EsZOK0Ay4BGTiVCICpCTvt1k6-gejQY','2021-07-03 14:19:26'),(13,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NTI5NjAsImlhdCI6MTYyNTc1MTc2MCwic3ViIjo2fQ.0WA9v11WlkTo8VOlzcvAUYyb8LoEnekWZP1A14nhH34','2021-07-08 16:46:09'),(14,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NTMxNzUsImlhdCI6MTYyNTc1MTk3NSwic3ViIjo2fQ.1nB02CV8t3AC8K0HmFZ_eNxk3Z45cTrOql7eFNaY_WE','2021-07-08 16:47:56'),(15,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjQzNDYsImlhdCI6MTYyNTc2MzE0Niwic3ViIjo2fQ.kaslHIopylAhe74IrHg61TSjWwPW-FDkbwAi2bjqNSA','2021-07-08 19:53:13'),(16,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjQ0MDEsImlhdCI6MTYyNTc2MzIwMSwic3ViIjo2fQ.VAmrI4pIg2v0qnn3aocYkW2zSuqjE2Tf4rqjf4dzm6g','2021-07-08 19:53:41'),(17,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjQ5MzEsImlhdCI6MTYyNTc2MzczMSwic3ViIjo2fQ.m39ePn9-qO27mBe0rRU9BkDkFoPRuc9peOi0zU8drGo','2021-07-08 20:03:18'),(18,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjUwMDMsImlhdCI6MTYyNTc2MzgwMywic3ViIjo2fQ.2qcMaT8q_VybvokR_-tdWN6aoXhypPF-vcLhG2QlrmM','2021-07-08 20:04:24'),(19,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjY0NTcsImlhdCI6MTYyNTc2NTI1Nywic3ViIjo2fQ.T9E5ftbAPryerxKShlFhpHpsletNKjeaILKQzWd8yFg','2021-07-08 20:38:37'),(20,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NjcxMjksImlhdCI6MTYyNTc2NTkyOSwic3ViIjo2fQ.C05WjbwwTHiwx6VSMxjXWwCNlHwvNSqeeLvZDdO455o','2021-07-08 20:46:19'),(21,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3Njc1ODcsImlhdCI6MTYyNTc2NjM4Nywic3ViIjo2fQ.8FpzNmLrQHRWvsNUkAUa5tcjncQGQ2HH_ZezBTMPP1A','2021-07-08 20:50:06'),(22,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3Njc4MTIsImlhdCI6MTYyNTc2NjYxMiwic3ViIjo2fQ.H9vNlGBckWz0zSdAuQZe4Bgj_Cpg0aRtqV8jLNPBCAM','2021-07-08 21:07:14'),(23,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3Njg4NDAsImlhdCI6MTYyNTc2NzY0MCwic3ViIjo2fQ.i0n5mkleAo-uyxVI_HASggV9IIPLlh-ixrC1h25Uufc','2021-07-08 21:16:41'),(24,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3Njk0MDcsImlhdCI6MTYyNTc2ODIwNywic3ViIjo2fQ.sWLEt5PRYVFUMrJTPsAgS3vW8XWjE-fqW5_cLmedeEw','2021-07-08 21:26:43'),(25,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NzAwMTAsImlhdCI6MTYyNTc2ODgxMCwic3ViIjo2fQ.wykjhK4Zmx4NOMlarTrOD9d62RJaevtUO4Jo_rQgCvU','2021-07-08 21:28:02'),(26,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NzAwODgsImlhdCI6MTYyNTc2ODg4OCwic3ViIjo2fQ.f27JlQlFDpZCdYiUuifixHHn0JDTvexLhEV0jLr8ELA','2021-07-08 21:29:43'),(27,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NzAxOTQsImlhdCI6MTYyNTc2ODk5NCwic3ViIjo2fQ.yPldS1-8-3vZTbnp_NKUTAw55bOHv4uE_SfYiYqk1NY','2021-07-08 21:34:35'),(28,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NzA1NTAsImlhdCI6MTYyNTc2OTM1MCwic3ViIjo2fQ.sMbZ_hvsB31bHvfwmN2EExWz6lga4SdiGF4XluSS3K4','2021-07-08 21:42:03'),(29,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjU3NzA5MjksImlhdCI6MTYyNTc2OTcyOSwic3ViIjo2fQ.26XFq-ykUS7OHOcT_LPo2A58w1kbWFlCvF8_sLGkSco','2021-07-08 21:43:08'),(30,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTIxNzYsImlhdCI6MTYyNjcxMDk3Niwic3ViIjo2fQ.pS1PwbSpCRD4Dr7vri2Z78LqLq8KWy41LtskZXgqrWY','2021-07-19 19:28:42'),(31,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTMzMjgsImlhdCI6MTYyNjcxMjEyOCwic3ViIjo2fQ.Kw3YBQXXyLMQOEOZxxaF-B_rKgqmjthgAbNGcH9TTNo','2021-07-19 19:39:52'),(32,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTM5OTcsImlhdCI6MTYyNjcxMjc5Nywic3ViIjo2fQ.2c3BDGyaT8cw1ahA__RCnQDrW8asQgRvE1ZT52Z2Pvo','2021-07-19 19:50:48'),(33,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTQ2NTMsImlhdCI6MTYyNjcxMzQ1Mywic3ViIjo2fQ.gWEnMGutMxEKh8-xgjHST7mtOLbytG9dmoFgV340rIU','2021-07-19 19:58:12'),(34,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTUwOTgsImlhdCI6MTYyNjcxMzg5OCwic3ViIjo2fQ.3hXcluJ28FfPmhC8g2z5QcdQCQIKBI3-U-2yjs-pzTE','2021-07-19 20:09:34'),(35,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTU3NzksImlhdCI6MTYyNjcxNDU3OSwic3ViIjo2fQ.TvNQjEhSuf5tIFPjJcXtHvfduMo_x1PuY4Oq_SW8nEE','2021-07-19 20:15:22'),(36,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTYxMjcsImlhdCI6MTYyNjcxNDkyNywic3ViIjo2fQ.8hM32gzYynIW3FWslro07qCOO_DhNpod79NAewSKcIg','2021-07-19 20:20:22'),(37,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTk1MTgsImlhdCI6MTYyNjcxODMxOCwic3ViIjo2fQ.1Zdbbark0P8bQhq0n8b9fzOAZz5ayUaFYizbPsM4LnU','2021-07-19 21:14:04'),(38,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MTk2NDksImlhdCI6MTYyNjcxODQ0OSwic3ViIjo2fQ.XZeEUB_nS42eGB6lf870BUa2s8pmjeU3t-NlGT4rqXg','2021-07-19 21:20:21'),(39,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjAwMjksImlhdCI6MTYyNjcxODgyOSwic3ViIjo2fQ.eIYAJWm649HH2HHf-XSW5r7EbPvPTiqosU4NtgM1so4','2021-07-19 21:24:27'),(40,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjAyNzgsImlhdCI6MTYyNjcxOTA3OCwic3ViIjo2fQ.8t9stpx1S-BFzyWJE86CFVCAznrdN-k5c8E7Ujv5QVs','2021-07-19 21:28:45'),(41,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjA1MzYsImlhdCI6MTYyNjcxOTMzNiwic3ViIjo2fQ.PE3gLhtI-KoFT1Ksh9FCFyAsTi1_C9LMKsMD6r1i124','2021-07-19 21:42:23'),(42,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjEzNDgsImlhdCI6MTYyNjcyMDE0OCwic3ViIjo2fQ.humu4IZi_flfv2uFZm9dDunJQOVhGRzmqidSfG1PMC8','2021-07-19 21:42:41'),(43,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjEzNjYsImlhdCI6MTYyNjcyMDE2Niwic3ViIjo2fQ.zbOD6qwiKr_TssVZko85s_NCKN1G4g8SJMDF26trO_0','2021-07-19 21:43:35'),(44,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjE0MjEsImlhdCI6MTYyNjcyMDIyMSwic3ViIjo2fQ.1msQ3-VPIKdRYIcCLnCIJzsv9PbonD6gK6Y7tkCIvuw','2021-07-19 21:44:03'),(45,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjY3MjE0NTEsImlhdCI6MTYyNjcyMDI1MSwic3ViIjo2fQ.7WYovPsHHTRzysdNQzkrF1DZ9uybvQqOpLwJ0kR6V_Q','2021-07-19 21:46:36'),(46,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyMDUxMzcsImlhdCI6MTYyOTIwMzkzNywic3ViIjo2fQ.mGH8YOH3nPxLFJRejs5Evf0xSj_dOKy33e6kZvjjK6k','2021-08-17 15:43:25'),(47,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyMTIyNjMsImlhdCI6MTYyOTIxMTA2Mywic3ViIjo2fQ.ck-2-kGm6QVMUbqXhTeM5MPU9-0vy3eavH-HZVPw_SY','2021-08-17 17:42:39'),(48,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyMTI1NjQsImlhdCI6MTYyOTIxMTM2NCwic3ViIjo2fQ.tCX8yAvtKq-OM--nDCwtz-3tzJBc-0AkPJrJSvcxuKk','2021-08-17 17:57:24'),(49,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkyMTM0NTEsImlhdCI6MTYyOTIxMjI1MSwic3ViIjo2fQ.O8n6JLNAuaAOBa60Dmz8uwrPTtqEE5ndpq9o7dk6R8o','2021-08-17 18:07:52'),(50,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkzMTMwNTksImlhdCI6MTYyOTMxMTg1OSwic3ViIjo2fQ.4xtFhO4rlQfSxyz4RGY0Q-ELC9Iz8rBH53xURn-QJ1w','2021-08-18 21:41:23'),(51,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkzMTMyODgsImlhdCI6MTYyOTMxMjA4OCwic3ViIjo2fQ.G9iwjnRO6D6KFv74qIAlPaT1ur8WNcz5A29sAN6QR0U','2021-08-18 21:44:15'),(52,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjkzOTQyNTEsImlhdCI6MTYyOTM5MzA1MSwic3ViIjo2fQ.TbZ8cKB6wzXAA6P_1sTvffB8nx_fOQQ2ficVc7Kk90k','2021-08-19 20:29:48'),(53,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NjUwODcsImlhdCI6MTYyOTQ2Mzg4Nywic3ViIjo2fQ.gtzTEvPvV4Ti9pMx9AksajUYTx7wWXYlAROK2eTqT_4','2021-08-20 15:53:50'),(54,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NzEwNzAsImlhdCI6MTYyOTQ2OTg3MCwic3ViIjo2fQ.nrJsrFxah94uBBLlIsFzobblgiJfaODRcqJEtjzTKbc','2021-08-20 17:46:17'),(55,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NzQ3OTcsImlhdCI6MTYyOTQ3MzU5Nywic3ViIjo2fQ.9flmBvwVA0nJgbuyY9F6Tq-QzLM7rC3xFC5aKEhVTuc','2021-08-20 18:42:36'),(56,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NzUzNjgsImlhdCI6MTYyOTQ3NDE2OCwic3ViIjo2fQ.ZNHbe5yDrJo8kjqbP69_7emAxiwlWqWUA3ES8VlzjBg','2021-08-20 18:53:55'),(57,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NzYwNDIsImlhdCI6MTYyOTQ3NDg0Miwic3ViIjo2fQ.Evs5BEq78mwyUXF2fsHdn36SoSaKC2DAN-2PVvZgbt8','2021-08-20 18:59:15'),(58,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk0NzYzNjIsImlhdCI6MTYyOTQ3NTE2Miwic3ViIjo2fQ.A02yjDVC23x2a8y4fJVLHUGOkVQvuVq0WUUhyU9XGMI','2021-08-20 19:13:07'),(59,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3MzA0NTYsImlhdCI6MTYyOTcyOTI1Niwic3ViIjo2fQ.6_EkbhLu5On7nsrrI_hOkfvK-er_AxEmT1hWxL5qyVY','2021-08-23 17:43:57'),(60,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3MzEwNDgsImlhdCI6MTYyOTcyOTg0OCwic3ViIjo2fQ.vDb4nCoscBmcL4ddd8JJ8WgoUwUXuKTxgvTb3nrdhUw','2021-08-23 17:47:38'),(61,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3MzMyMDMsImlhdCI6MTYyOTczMjAwMywic3ViIjo2fQ.qTnUKBteBYiI-wF3nF7V17ZKxtyd7V1MiplG4tTYKyk','2021-08-23 18:38:44'),(62,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3MzQzMzQsImlhdCI6MTYyOTczMzEzNCwic3ViIjo2fQ.-jzV6ixYunW21sQasGEIAFlw0gvNqfhYkvRZG9c4LXk','2021-08-23 18:47:58'),(63,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3MzkzNDQsImlhdCI6MTYyOTczODE0NCwic3ViIjo2fQ.2KESpfbvanOR1rMldi1vGQMe8r5XnxgrOb-PYiYXJSY','2021-08-23 20:12:34'),(64,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3Mzk5NjMsImlhdCI6MTYyOTczODc2Mywic3ViIjo2fQ.Ien4Y9yWDLeUN4ylVpqIUfn2biCO6VmRsuMIClAZMrE','2021-08-23 20:15:00'),(65,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3NDAxMDYsImlhdCI6MTYyOTczODkwNiwic3ViIjo2fQ.Qi3Gzh5u_MS5FBgNw0VFQiired9pLc3-MPtPb9gx0tE','2021-08-23 20:33:14'),(66,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3NDExOTksImlhdCI6MTYyOTczOTk5OSwic3ViIjo2fQ.0BZpNlrFWrqMkmYJGsTZTh2Hby3YrJ-AhGKo3wbkNMc','2021-08-23 20:36:54'),(67,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3NDE0MTksImlhdCI6MTYyOTc0MDIxOSwic3ViIjo2fQ.GbW8cUPl6J3GiBf9hyewbj-wLT7LIwVmQ91IP4ijqyI','2021-08-23 20:45:35'),(68,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk3OTQ1OTcsImlhdCI6MTYyOTc5MzM5Nywic3ViIjo2fQ.ZiOL6aylyVqwR6ucVqA7f81QGnFF8iO5YTsGlx6loWc','2021-08-24 11:37:50'),(69,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4MDM5NTQsImlhdCI6MTYyOTgwMjc1NCwic3ViIjo2fQ.-a1aN7ehE7f5oV4UICekggNJ98TXWQKGFMKdf5GpHRA','2021-08-24 14:04:44'),(70,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4MzUyMjksImlhdCI6MTYyOTgzNDAyOSwic3ViIjo2fQ.0oXV3l1fCFlYK1APor20Ut_IcmetKBr3tNNxfBxZJc8','2021-08-24 22:54:18'),(71,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4ODc0OTUsImlhdCI6MTYyOTg4NjI5NSwic3ViIjo2fQ.YXHnThWMe5ea_3pKPzUP-i06NxXsaaUGARsqkZurWXc','2021-08-25 13:19:36'),(72,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4ODc5ODIsImlhdCI6MTYyOTg4Njc4Miwic3ViIjo2fQ.rKthdsYIey7FhbsON29pUS8k3THNYzL5v_eixU2zdiI','2021-08-25 13:23:53'),(73,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4ODgyODIsImlhdCI6MTYyOTg4NzA4Miwic3ViIjo2fQ.y4B54PnB1zUIRmMWQPkxASECM1sLXNWNYgqK5ilzIUs','2021-08-25 13:36:35'),(74,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4OTQ5NDMsImlhdCI6MTYyOTg5Mzc0Mywic3ViIjo2fQ.KDGAb_VgANMgKsXETv2AS_O56QXpPdiMUOAt6QfFGfg','2021-08-25 15:23:11'),(75,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4OTUzOTYsImlhdCI6MTYyOTg5NDE5Niwic3ViIjo2fQ.8FYUTxudFS2pwtaym1pCgaE2uTb_aFCkhqDdbmrE3Do','2021-08-25 15:33:49'),(76,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4OTYwMzQsImlhdCI6MTYyOTg5NDgzNCwic3ViIjo2fQ.E7snYd-GnbMU8JqturppJ8e_tuRYWvaq2ue52EH7oiw','2021-08-25 15:35:38'),(77,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mjk4OTYzNDIsImlhdCI6MTYyOTg5NTE0Miwic3ViIjo2fQ.D97TUFofJPFZVwTGtjYeCLhe4qWcLHdKYnOrM-v9Vsg','2021-08-25 15:49:36'),(78,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA1ODIwNDMsImlhdCI6MTYzMDU4MDg0Mywic3ViIjo2fQ.i1lz8h0YlXCtjNdqijyDTchIcrI7VhHbAglOoT0a-GE','2021-09-02 14:25:27'),(79,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA1ODUwMTUsImlhdCI6MTYzMDU4MzgxNSwic3ViIjo2fQ.wOkLy-6mDNd86RH1jrOrXjiMkeBZEaDVk_JomcB23vw','2021-09-02 15:07:45'),(80,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA1ODc2MjUsImlhdCI6MTYzMDU4NjQyNSwic3ViIjo2fQ.m8BOarF-ktsTnGtdI2XynoUI6kt4DpwYM6SIkdgrJ8E','2021-09-02 15:50:37'),(81,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA1ODgyNTEsImlhdCI6MTYzMDU4NzA1MSwic3ViIjo2fQ.-VJgXCbYJSMku6caM5U3Wp6EaTF9dKV7Mu00_Z44xFo','2021-09-02 15:53:14'),(82,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2MjE5MjksImlhdCI6MTYzMDYyMDcyOSwic3ViIjo2fQ.2uS8es6CSMnXaCWxSfnu6YZ_u2eNRqBlzk4_QYOtDvA','2021-09-03 01:20:30'),(83,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2MjI0NDAsImlhdCI6MTYzMDYyMTI0MCwic3ViIjo2fQ._lPdoKo4tHNdxk29-rlq9zMnBuiqq00XxhvkrP-HsgI','2021-09-03 01:26:16'),(84,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2NjgzNDksImlhdCI6MTYzMDY2NzE0OSwic3ViIjo2fQ.jGbU2vsy5yTUgNmufUeUDWc-3JT6DpyQa66Pa-CVWZE','2021-09-03 14:23:54'),(85,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2Njk0NDAsImlhdCI6MTYzMDY2ODI0MCwic3ViIjo2fQ.5GAeD401w7hRyyb11KGagpGxa7BpM4tGzz-s-CrYqNI','2021-09-03 14:37:07'),(86,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2NzAyMzUsImlhdCI6MTYzMDY2OTAzNSwic3ViIjo2fQ.8cT_LyRi489MjGA0UEJtdsfnyUfoqTA0z0HFC_X-z10','2021-09-03 14:48:20'),(87,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2NzE3ODEsImlhdCI6MTYzMDY3MDU4MSwic3ViIjo2fQ.VYjT5plDpKAX1aTXD_g7wXppsV05suULjlLrZpNtscw','2021-09-03 15:06:25'),(88,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2NzU1MzgsImlhdCI6MTYzMDY3NDMzOCwic3ViIjo2fQ.008KWAILOgnui4xiL_n-I-pMva2DeRH_NJYFBAAzAG4','2021-09-03 16:17:29'),(89,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA2NzYyNTUsImlhdCI6MTYzMDY3NTA1NSwic3ViIjo2fQ.nQQ7WrFNAnf3MEsD70lL6ervFQgnIwjxvLoZYi7dtFA','2021-09-03 16:27:10'),(90,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA4Mzg3MDUsImlhdCI6MTYzMDgzNzUwNSwic3ViIjo2fQ.vp-WKh4CtfRf3M8ECDS0Ls8-I5tP-hQ0UBh0CouiexI','2021-09-05 13:38:08'),(91,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA4NDE0MjIsImlhdCI6MTYzMDg0MDIyMiwic3ViIjo2fQ.5zxvfmRyiaaT59xbBoAsCx7iw-GAwI85Dba3Z4BEL8o','2021-09-05 14:16:35'),(92,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA4NDE4MDIsImlhdCI6MTYzMDg0MDYwMiwic3ViIjo2fQ.SqtbHgggAf93eq-yJTZ0ImSJeJ4rHCs5xsxOn83RT2o','2021-09-05 14:18:34'),(93,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzA4NDE5MjIsImlhdCI6MTYzMDg0MDcyMiwic3ViIjo2fQ.lZyo-bo44z0Z3lJcOCMq53_ROsk6JyJ1ZL3UTsDzwd4','2021-09-05 14:22:15'),(94,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEwOTUzNzUsImlhdCI6MTYzMTA5NDE3NSwic3ViIjo2fQ.lFsS2yqqBo_unj90oHsqieQDM6tNAQQeSy7q3Od-1So','2021-09-08 12:50:30'),(95,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjUyMTMsImlhdCI6MTYzMTI2NDAxMywic3ViIjo2fQ.AIA-r9IZwuqeywLYO0qgbWq-Ave6v9vPEzJcxop-jjM','2021-09-10 11:57:08'),(96,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjU0MzIsImlhdCI6MTYzMTI2NDIzMiwic3ViIjo2fQ.agV28jIt4I1_LiNf7N_rkCrzRpQY0HWl9AJQeFbjdVU','2021-09-10 12:07:32'),(97,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjYwNTYsImlhdCI6MTYzMTI2NDg1Niwic3ViIjo2fQ.POR1Rak-QLmrlsC8NgzHVCRpVMblFOJvxjgYZl4X3CI','2021-09-10 12:13:00'),(98,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjYzODQsImlhdCI6MTYzMTI2NTE4NCwic3ViIjo2fQ.MgXrnrxnaDE-L-WjoecLC7SK7jaKim0pPZDXHLi_btA','2021-09-10 12:17:13'),(99,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjY2MzcsImlhdCI6MTYzMTI2NTQzNywic3ViIjo2fQ.e8IuFDydc97zqPvIk-nnVUBWODz7-NAcPlxfl5lZi_A','2021-09-10 12:17:24'),(100,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjY2NDcsImlhdCI6MTYzMTI2NTQ0Nywic3ViIjo2fQ.TW9l9IhtQQq5mgOgA4SdQpCmVfK6gykOOX9Mt4M396E','2021-09-10 12:20:04'),(101,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjY4MDgsImlhdCI6MTYzMTI2NTYwOCwic3ViIjo2fQ.H3tJl1pNXIeZgkiedUAzEiJsibj-5VOvddjTB-mvZ5g','2021-09-10 12:21:14'),(102,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjY4NzgsImlhdCI6MTYzMTI2NTY3OCwic3ViIjo2fQ.Ewd8onAd9tNLliJUBQG4LfrCqRyr7NX14bMI39Z79kM','2021-09-10 12:34:42'),(103,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjc2ODYsImlhdCI6MTYzMTI2NjQ4Niwic3ViIjo2fQ.uEmyBBacngsuWwH1XZ4WQ_T-QsV-SL7OOhJHFRoxJNM','2021-09-10 12:35:27'),(104,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjc3MzAsImlhdCI6MTYzMTI2NjUzMCwic3ViIjo2fQ.hbLR10eRQj9Lp1pOxQ41nYlgKAuOveDgodbQqL9ic14','2021-09-10 12:35:38'),(105,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjc3NDEsImlhdCI6MTYzMTI2NjU0MSwic3ViIjo2fQ.ZlWIoATnhIcVUGmT6difn5m18vSqTbQX5LxEMrnihhs','2021-09-10 12:36:15'),(106,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjc3NzksImlhdCI6MTYzMTI2NjU3OSwic3ViIjo2fQ.-DJM9ogFm-qTLPFOTd6bg9y0h6Q67l2NJdDiyIwVPPM','2021-09-10 12:37:20'),(107,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjc4NDMsImlhdCI6MTYzMTI2NjY0Mywic3ViIjo2fQ.wI8MQcM-gbUNIbgloHWozkzT2QCUFVdCYQCQeDwW64k','2021-09-10 12:51:46'),(108,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjg3MTAsImlhdCI6MTYzMTI2NzUxMCwic3ViIjo2fQ.vPECW8WN28RYO3HsYiU8q5awHeKjoBe_IpY-hKAPa-c','2021-09-10 12:56:08'),(109,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjg5NzEsImlhdCI6MTYzMTI2Nzc3MSwic3ViIjo2fQ.Iifd6hoskkkgfspFLBhatrv5Vi2HLokup1wkP-HuJHU','2021-09-10 13:02:23'),(110,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjkzNDgsImlhdCI6MTYzMTI2ODE0OCwic3ViIjo2fQ.OnvQDBNFM3ZFvYBzR8m6bhJ2rRvDtYto8geAHbYqvbE','2021-09-10 13:06:01'),(111,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNjk1NjQsImlhdCI6MTYzMTI2ODM2NCwic3ViIjo2fQ.h3rxWBPDX0FVHyymHaPaZbk0ImXb_aXpmvtyb-l7_gY','2021-09-10 13:07:38'),(112,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNzA5MTAsImlhdCI6MTYzMTI2OTcxMCwic3ViIjo2fQ._ipQ4dQfJ2jI4XLq7XquaLn-KL7zF5h_9nZYmcXCni0','2021-09-10 13:35:00'),(113,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyNzEzMDQsImlhdCI6MTYzMTI3MDEwNCwic3ViIjo2fQ.jN5S5f6PD9VZpP_96sVNfk8aeJKo0uD5-LVk0cI9LsI','2021-09-10 13:42:29'),(114,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzEyODY4MTAsImlhdCI6MTYzMTI4NTYxMCwic3ViIjo2fQ.2x22oBKFdYoIa7mbZ0NjwQWXG2uOoWFlju8QWVNOFhE','2021-09-10 17:55:22'),(115,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzE2MTg2ODAsImlhdCI6MTYzMTYxNzQ4MCwic3ViIjo2fQ.KJHDRsxtNsHFfh7AuQYkIM9igBU69HijWCKqqHW47so','2021-09-14 14:20:28'),(116,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzE2MTk2MzIsImlhdCI6MTYzMTYxODQzMiwic3ViIjo2fQ.CzWhbEglBvdP0UXA_-vTBzgfpqmm4Ti0VvkhXlg9jLw','2021-09-14 14:29:01'),(117,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzE2MjAxNDUsImlhdCI6MTYzMTYxODk0NSwic3ViIjo2fQ.KaJFro05Nwozj7W0-e2ETvYt_Lko2lkpRmHJsbNQVFs','2021-09-14 14:30:17'),(118,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzE2NTIxMzgsImlhdCI6MTYzMTY1MDkzOCwic3ViIjo2fQ.fg_4X_Rf2zz6D31x5K5E0k1BYwxGB5pAF1xa8-D8XmI','2021-09-14 23:37:33'),(119,'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzIzMDQ2MzQsImlhdCI6MTYzMjMwMzQzNCwic3ViIjo2fQ.quRw6GW1eP5reVQY6HzL7XKj_Nn05JlrwGf4V4UiUGQ','2021-09-22 12:49:47');
/*!40000 ALTER TABLE `blacklist_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_branches`
--

DROP TABLE IF EXISTS `tb_branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_branches` (
  `branchid` int(11) NOT NULL AUTO_INCREMENT,
  `branchname` varchar(60) DEFAULT NULL,
  `code` varchar(20) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `address` varchar(200) DEFAULT NULL,
  `phoneno` varchar(20) DEFAULT NULL,
  `createdby` int(11) NOT NULL,
  `editedby` int(11) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedon` datetime DEFAULT NULL,
  PRIMARY KEY (`branchid`),
  KEY `ix_tb_branches_createdby` (`createdby`),
  KEY `ix_tb_branches_editedby` (`editedby`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_branches`
--

LOCK TABLES `tb_branches` WRITE;
/*!40000 ALTER TABLE `tb_branches` DISABLE KEYS */;
INSERT INTO `tb_branches` VALUES (1,'Head Office','HO',1,'124 NAIROBI','254721881745',1,NULL,'2021-07-08 18:57:15',NULL),(2,'Nakuru','NK',1,'123, Nakuru','254722260357',1,NULL,'2021-07-08 18:57:15',NULL),(3,'Nairobi','NB',1,'Astol 123','254721881745',6,NULL,'2021-07-08 18:57:15',NULL),(4,'BONFACE1','BONFACE',1,'assad','BONFACE',6,NULL,'2021-07-08 18:57:15',NULL);
/*!40000 ALTER TABLE `tb_branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_def`
--

DROP TABLE IF EXISTS `tb_def`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_def` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `skey` varchar(200) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedon` datetime DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `isvisible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_def`
--

LOCK TABLES `tb_def` WRITE;
/*!40000 ALTER TABLE `tb_def` DISABLE KEYS */;
INSERT INTO `tb_def` VALUES (1,'ID Type','idtype','2021-07-08 19:17:37',NULL,1,0),(2,'Subscription Type','subscription','2021-07-08 20:03:12',NULL,1,0),(3,'Access Type','accesstype','2021-07-09 11:31:36',NULL,1,0);
/*!40000 ALTER TABLE `tb_def` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_misc`
--

DROP TABLE IF EXISTS `tb_misc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_misc` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  `parentid` int(11) NOT NULL,
  `skey` varchar(200) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedon` datetime DEFAULT NULL,
  `settings` json DEFAULT NULL,
  `isactive` tinyint(1) NOT NULL DEFAULT '1',
  `isvisible` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  KEY `parentid` (`parentid`),
  CONSTRAINT `tb_misc_ibfk_1` FOREIGN KEY (`parentid`) REFERENCES `tb_def` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_misc`
--

LOCK TABLES `tb_misc` WRITE;
/*!40000 ALTER TABLE `tb_misc` DISABLE KEYS */;
INSERT INTO `tb_misc` VALUES (1,'National ID',1,'nationalid','2021-07-08 19:18:19',NULL,NULL,1,1),(2,'Passport',1,'passport','2021-07-08 19:18:34',NULL,NULL,1,1),(3,'Monthly',2,'monthly','2021-07-08 20:46:02',NULL,NULL,1,1),(4,'Weekly',2,'weekly','2021-07-08 20:46:02',NULL,NULL,1,1),(5,'Daily',2,'daily','2021-07-08 20:46:02',NULL,NULL,1,1),(6,'Military ID',1,'militaryid','2021-07-08 21:43:03',NULL,NULL,1,1),(7,'MOBILENO',3,'mobileno','2021-07-09 11:32:39',NULL,NULL,1,1),(8,'EMAIL',3,'email','2021-07-09 11:32:39',NULL,NULL,1,1);
/*!40000 ALTER TABLE `tb_misc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_profile`
--

DROP TABLE IF EXISTS `tb_profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_profile` (
  `profileid` int(11) NOT NULL AUTO_INCREMENT,
  `profilename` varchar(60) DEFAULT NULL,
  `createdby` int(11) NOT NULL,
  `editedby` int(11) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedon` datetime DEFAULT NULL,
  `profiledesc` varchar(200) DEFAULT NULL,
  `profilestatus` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`profileid`),
  UNIQUE KEY `profilename` (`profilename`),
  UNIQUE KEY `profilename_2` (`profilename`),
  KEY `ix_tb_profile_createdby` (`createdby`),
  KEY `ix_tb_profile_editedby` (`editedby`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_profile`
--

LOCK TABLES `tb_profile` WRITE;
/*!40000 ALTER TABLE `tb_profile` DISABLE KEYS */;
INSERT INTO `tb_profile` VALUES (6,'Boniface',1,NULL,'2021-07-08 19:02:01',NULL,NULL,0),(7,'Administrators',1,NULL,'2021-07-08 19:02:01',NULL,NULL,0);
/*!40000 ALTER TABLE `tb_profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_users`
--

DROP TABLE IF EXISTS `tb_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(60) NOT NULL,
  `username` varchar(60) NOT NULL,
  `fullname` varchar(60) NOT NULL,
  `pwd` varchar(128) DEFAULT NULL,
  `mobileno` varchar(60) NOT NULL,
  `profileid` int(11) NOT NULL,
  `idtype` varchar(60) NOT NULL,
  `idno` varchar(60) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `loginattempt` int(11) NOT NULL DEFAULT '0',
  `lastpwdchange` datetime DEFAULT NULL,
  `access_type` enum('MOBILENO','EMAIL') NOT NULL DEFAULT 'MOBILENO',
  `countrydetails` json DEFAULT NULL,
  `isauthorized` int(11) NOT NULL DEFAULT '0',
  `branchid` int(11) NOT NULL,
  `accessbranch` varchar(100) DEFAULT NULL,
  `createdon` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `editedon` datetime DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `ix_tb_users_email` (`email`),
  UNIQUE KEY `ix_tb_users_idno` (`idno`),
  UNIQUE KEY `ix_tb_users_mobileno` (`mobileno`),
  UNIQUE KEY `ix_tb_users_username` (`username`),
  KEY `profileid` (`profileid`),
  KEY `ix_tb_users_fullname` (`fullname`),
  KEY `ix_tb_users_branchid` (`branchid`),
  CONSTRAINT `tb_users_ibfk_1` FOREIGN KEY (`profileid`) REFERENCES `tb_profile` (`profileid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_users`
--

LOCK TABLES `tb_users` WRITE;
/*!40000 ALTER TABLE `tb_users` DISABLE KEYS */;
INSERT INTO `tb_users` VALUES (6,'BONFACE','boniface','BONFACE','$2b$12$SIrZ53HkWW.B9pnR8R4aC.58XfRJ3sZVRfGLEdgahKgpf/Zr2/tei','BONFACE',7,'1','BONFACE',1,1,'2021-06-17 18:53:05','MOBILENO',NULL,1,1,'1,2','2021-07-08 19:06:58',NULL),(7,'ndungub@gmail.com','boniface.ndungu','Boniface Ndungub',NULL,'254721881746',6,'2','23123123',1,0,NULL,'MOBILENO',NULL,0,1,'2','2021-07-08 19:06:58',NULL);
/*!40000 ALTER TABLE `tb_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'catalog_comedy'
--

--
-- Dumping routines for database 'catalog_comedy'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-10 16:18:00