-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Feb 19, 2021 alle 17:25
-- Versione del server: 10.4.10-MariaDB
-- Versione PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myalert`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `agent`
--

DROP TABLE IF EXISTS `agent`;
CREATE TABLE IF NOT EXISTS `agent` (
  `idAgent` int(11) NOT NULL AUTO_INCREMENT,
  `EndDate` datetime DEFAULT NULL,
  `HireDate` datetime DEFAULT NULL,
  `Lat` double DEFAULT NULL,
  `Lon` double DEFAULT NULL,
  `idManager_FK` int(11) NOT NULL,
  `idUser_FK` int(11) NOT NULL,
  PRIMARY KEY (`idAgent`),
  KEY `FKoi25ux8wjbv3a6k3xvm82veoa` (`idManager_FK`),
  KEY `FK7gapn2wsp5wwyo5xc0auju1uw` (`idUser_FK`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `agent`
--

INSERT INTO `agent` (`idAgent`, `EndDate`, `HireDate`, `Lat`, `Lon`, `idManager_FK`, `idUser_FK`) VALUES
(1, NULL, '2021-02-19 12:52:10', 40.439652699999996, 18.0361671, 1, 3),
(2, NULL, '2021-02-19 12:53:24', 40.439652699999996, 18.0361671, 1, 4),
(3, NULL, '2021-02-19 12:55:45', 40.439652699999996, 18.0361671, 1, 5);

-- --------------------------------------------------------

--
-- Struttura della tabella `alarm`
--

DROP TABLE IF EXISTS `alarm`;
CREATE TABLE IF NOT EXISTS `alarm` (
  `idAlarm` int(11) NOT NULL AUTO_INCREMENT,
  `AlarmDate` datetime DEFAULT NULL,
  `Description` longtext DEFAULT NULL,
  `Title` varchar(200) DEFAULT NULL,
  `idCitizen` int(11) NOT NULL,
  `idIntervention` int(11) NOT NULL,
  PRIMARY KEY (`idAlarm`),
  KEY `FK20dmp008pxoqa37fmg9vwu9cx` (`idCitizen`),
  KEY `FKmhdr4nw3pgy2hkeu6u6ertiya` (`idIntervention`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `alarm`
--

INSERT INTO `alarm` (`idAlarm`, `AlarmDate`, `Description`, `Title`, `idCitizen`, `idIntervention`) VALUES
(1, '2021-02-19 13:07:04', 'There is an accident here!', 'Car Crash', 2, 1),
(2, '2021-02-19 13:14:25', 'There are 2 cars destroyed here, fortunally no one is injured!', 'Car CRASH HERE', 3, 1),
(3, '2021-02-19 13:17:10', 'The house is on fire!\n', 'Hurry Up Fire here!', 6, 4),
(4, '2021-02-19 13:20:17', '4 people are killing each other in the park!! Hurry up! Send the police now!', 'Help!', 5, 3),
(5, '2021-02-19 15:41:42', 'They dumped toxic waste here!', 'Please clean here!', 4, 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `assign`
--

DROP TABLE IF EXISTS `assign`;
CREATE TABLE IF NOT EXISTS `assign` (
  `idAssign` int(11) NOT NULL AUTO_INCREMENT,
  `Concluded` bit(1) NOT NULL,
  `Confirm` bit(1) NOT NULL,
  `EndValidate` datetime DEFAULT NULL,
  `StartValidate` datetime DEFAULT NULL,
  `idAgent` int(11) NOT NULL,
  `idIntervention` int(11) NOT NULL,
  `idManager` int(11) NOT NULL,
  PRIMARY KEY (`idAssign`),
  KEY `FKfoewp0u3k23gxm0a99xw4ln60` (`idAgent`),
  KEY `FKo7apgx4w995o0ljppxehjc540` (`idIntervention`),
  KEY `FKj78igkn0e1qov5gq0df49qtlm` (`idManager`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `assign`
--

INSERT INTO `assign` (`idAssign`, `Concluded`, `Confirm`, `EndValidate`, `StartValidate`, `idAgent`, `idIntervention`, `idManager`) VALUES
(1, b'1', b'1', '2021-02-19 16:33:23', '2021-02-19 16:28:16', 2, 4, 1),
(3, b'1', b'1', '2021-02-19 16:53:58', '2021-02-19 16:52:21', 3, 1, 1),
(4, b'0', b'1', NULL, '2021-02-19 17:04:09', 1, 1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `citizen`
--

DROP TABLE IF EXISTS `citizen`;
CREATE TABLE IF NOT EXISTS `citizen` (
  `idCitizen` int(11) NOT NULL AUTO_INCREMENT,
  `Lat` double DEFAULT NULL,
  `Lon` double DEFAULT NULL,
  `idUser_FK` int(11) NOT NULL,
  PRIMARY KEY (`idCitizen`),
  KEY `FKtrup3kwhll0u82pe0coi3xceu` (`idUser_FK`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `citizen`
--

INSERT INTO `citizen` (`idCitizen`, `Lat`, `Lon`, `idUser_FK`) VALUES
(2, 40.439652699999996, 18.0361671, 6),
(3, 40.439652699999996, 18.0361671, 7),
(4, 40.439652699999996, 18.0361671, 8),
(5, 40.439652699999996, 18.0361671, 9),
(6, 40.439652699999996, 18.0361671, 10);

-- --------------------------------------------------------

--
-- Struttura della tabella `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `IdFire` varchar(200) DEFAULT NULL,
  `Lat` double DEFAULT NULL,
  `Lon` double DEFAULT NULL,
  `Url` longtext NOT NULL,
  `idIntervention` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idImage`),
  KEY `FKp50rwi40ay316fom9iil6lcos` (`idIntervention`),
  KEY `FKa9lca5rluysdcfseih6ru30f6` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `image`
--

INSERT INTO `image` (`idImage`, `IdFire`, `Lat`, `Lon`, `Url`, `idIntervention`, `idUser`) VALUES
(4, 'O8J5Oe8MISS46RFTe0wX', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2FO8J5Oe8MISS46RFTe0wX?alt=media&token=707af187-eca6-4893-87ab-9acf1a38368b', 4, 10),
(5, 'WKETQ7WPQDfIBN8waxuE', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2FWKETQ7WPQDfIBN8waxuE?alt=media&token=a96a3d87-a1af-4343-bb20-b05dc7e66ce6', 4, 4),
(6, '5KAJHPKjAvWJ7lZUhwFb', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2F5KAJHPKjAvWJ7lZUhwFb?alt=media&token=0232a100-b665-411b-95ce-47640103acd1', 3, 9),
(7, 'FQplsCKosHpmUwy4N2D1', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2FFQplsCKosHpmUwy4N2D1?alt=media&token=0301f620-2d7e-4c66-ae3a-b1ae44fde84b', 3, 5),
(8, 'fmrrui4nPqYBxeMH39u7', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2Ffmrrui4nPqYBxeMH39u7?alt=media&token=b2ce35d4-6e8c-410a-9947-6c3369a6ad51', 1, 6),
(9, 'sPXj4zeALJ18sogHf4rU', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2FsPXj4zeALJ18sogHf4rU?alt=media&token=77781317-75bd-4c29-9797-920f42a3dc83', 1, 7),
(10, 'aVrBCiN5WOfNFiQsfufu', 40.439652699999996, 18.0361671, 'https://firebasestorage.googleapis.com/v0/b/myalertlecce.appspot.com/o/images%2FaVrBCiN5WOfNFiQsfufu?alt=media&token=d3e0aef4-d5cd-47b8-b15c-734d219e0d10', 1, 3);

-- --------------------------------------------------------

--
-- Struttura della tabella `intervention`
--

DROP TABLE IF EXISTS `intervention`;
CREATE TABLE IF NOT EXISTS `intervention` (
  `idIntervention` int(11) NOT NULL AUTO_INCREMENT,
  `Address` varchar(100) NOT NULL,
  `Count` int(11) DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `FirstReport` varchar(255) DEFAULT NULL,
  `LastReport` longtext DEFAULT NULL,
  `Lat` double NOT NULL,
  `Lon` double NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `Status` varchar(45) NOT NULL,
  `idType` int(11) NOT NULL,
  PRIMARY KEY (`idIntervention`),
  KEY `FK3mj2fkepw9rl96d43iiwc2lcc` (`idType`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `intervention`
--

INSERT INTO `intervention` (`idIntervention`, `Address`, `Count`, `EndDate`, `FirstReport`, `LastReport`, `Lat`, `Lon`, `StartDate`, `Status`, `idType`) VALUES
(1, 'Via Campi, Squinzano, Lecce, Puglia, 73018, Italia, ', 0, '2021-02-19 17:06:20', 'Rescue arrived!!', NULL, 40.4321215552219, 18.039978284461515, '2021-02-19 17:04:09', 'assigned', 1),
(2, 'Via Giuseppe Mazzini, Squinzano, Lecce, Puglia, 73018, Italia, 21', 1, NULL, NULL, NULL, 40.440046361691145, 18.043339895325587, NULL, 'signaled', 5),
(3, 'Via Vittorio Veneto, Squinzano, Lecce, Puglia, 73018, Italia, 33', 0, '2021-02-19 16:53:26', 'Brawl successfully dissolved!', 'A big fight broke out between boys. A quarrel born for unclear reasons. The police intervened successfully.', 40.43802265179133, 18.040505302613415, '2021-02-19 16:52:21', 'closed', 4),
(4, 'Agip, 202, Via Lecce, Squinzano, Lecce, Puglia, 73018, Italia, ', 0, '2021-02-19 16:29:31', 'The Fire was succesfully extinguished!', 'At 5:29 PM a fire was successfully put out in a house in Via Lecce, Squinzano.\nThere were no serious injuries and the people involved were taken to hospital for examination.', 40.430060283672276, 18.05109053021817, '2021-02-19 16:28:16', 'closed', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `manager`
--

DROP TABLE IF EXISTS `manager`;
CREATE TABLE IF NOT EXISTS `manager` (
  `idManager` int(11) NOT NULL AUTO_INCREMENT,
  `idUser_FK` int(11) NOT NULL,
  PRIMARY KEY (`idManager`),
  KEY `FKmrbo7ktryg0mfwthw4mla31p3` (`idUser_FK`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `manager`
--

INSERT INTO `manager` (`idManager`, `idUser_FK`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `idType` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `idManager` int(11) NOT NULL,
  PRIMARY KEY (`idType`),
  UNIQUE KEY `UK_3w5yvu8h77hubep3aue6ryp6e` (`Name`),
  UNIQUE KEY `type_Name_IX` (`Name`),
  KEY `FKt1msy0ccddvxb2m0ju1esgkt5` (`idManager`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `type`
--

INSERT INTO `type` (`idType`, `Name`, `idManager`) VALUES
(1, 'Car Crash', 1),
(2, 'Fire', 1),
(3, 'Flood', 1),
(4, 'Brawl', 1),
(5, 'Illegal Dump', 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `Address` varchar(50) NOT NULL,
  `BirthDate` datetime NOT NULL,
  `City` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Sex` varchar(1) NOT NULL,
  `State` varchar(20) NOT NULL,
  `Surname` varchar(20) NOT NULL,
  `Token` longtext DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `UK_ibcfppmacbm81husxf339yq0e` (`Email`),
  UNIQUE KEY `user_Email_IX` (`Email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`idUser`, `Address`, `BirthDate`, `City`, `Email`, `Name`, `Sex`, `State`, `Surname`, `Token`) VALUES
(1, 'Via Crispi 127/B', '1996-12-02 00:00:00', 'Squinzano', 'manager@myalert.com', 'Luca', 'M', 'Italy', 'Mainetti', NULL),
(3, 'Via Crispi 127/B', '1996-12-02 00:00:00', 'Squinzano', 'vinspa96@gmail.com', 'Vincenzo', 'M', 'Italy', 'Spagnolo', NULL),
(4, 'Via Pasquale Ferraro, 60', '1991-06-25 00:00:00', 'Diso', 's.corvagliabooking@gmail.com', 'Salvatore', 'M', 'Italy', 'Corvaglia', NULL),
(5, 'Via Gennaro Abate, 31', '1995-02-20 00:00:00', 'Lecce', 'giusepperossi@myalert.com', 'Giuseppe', 'M', 'Italy', 'Rossi', NULL),
(6, 'Via Duca degli Abruzzi, 88', '1996-02-19 13:57:00', 'Squinzano', 'davidecalabria@myalert.com', 'Davide', 'M', 'Italy', 'Calabria', NULL),
(7, 'Via piazza Vittoria, 44', '1991-01-01 14:00:00', 'Squinzano', 'giacomocerfeda@myalert.com', 'Giacomo', 'M', 'Italy', 'Cerfeda', NULL),
(8, 'Via Kennedy, 21', '1994-02-19 14:01:00', 'Squinzano', 'alessandrosalieri@myalert.it', 'Alessandro', 'M', 'Italy', 'Salieri', NULL),
(9, 'Via Raffaello Sanzio, 30', '1978-02-19 14:03:00', 'Squinzano', 'francescagennaro@myalert.com', 'Francesca', 'F', 'Italy', 'Gennaro', NULL),
(10, 'Via Brindisi, 10', '1986-08-12 14:04:00', 'Squinzano', 'federicarispoli@myalert.com', 'Federica', 'F', 'Italy', 'Rispoli', NULL);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `agent`
--
ALTER TABLE `agent`
  ADD CONSTRAINT `FK7gapn2wsp5wwyo5xc0auju1uw` FOREIGN KEY (`idUser_FK`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `FKoi25ux8wjbv3a6k3xvm82veoa` FOREIGN KEY (`idManager_FK`) REFERENCES `manager` (`idManager`);

--
-- Limiti per la tabella `alarm`
--
ALTER TABLE `alarm`
  ADD CONSTRAINT `FK20dmp008pxoqa37fmg9vwu9cx` FOREIGN KEY (`idCitizen`) REFERENCES `citizen` (`idCitizen`),
  ADD CONSTRAINT `FKmhdr4nw3pgy2hkeu6u6ertiya` FOREIGN KEY (`idIntervention`) REFERENCES `intervention` (`idIntervention`);

--
-- Limiti per la tabella `assign`
--
ALTER TABLE `assign`
  ADD CONSTRAINT `FKfoewp0u3k23gxm0a99xw4ln60` FOREIGN KEY (`idAgent`) REFERENCES `agent` (`idAgent`),
  ADD CONSTRAINT `FKj78igkn0e1qov5gq0df49qtlm` FOREIGN KEY (`idManager`) REFERENCES `manager` (`idManager`),
  ADD CONSTRAINT `FKo7apgx4w995o0ljppxehjc540` FOREIGN KEY (`idIntervention`) REFERENCES `intervention` (`idIntervention`);

--
-- Limiti per la tabella `citizen`
--
ALTER TABLE `citizen`
  ADD CONSTRAINT `FKtrup3kwhll0u82pe0coi3xceu` FOREIGN KEY (`idUser_FK`) REFERENCES `user` (`idUser`);

--
-- Limiti per la tabella `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `FKa9lca5rluysdcfseih6ru30f6` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`),
  ADD CONSTRAINT `FKp50rwi40ay316fom9iil6lcos` FOREIGN KEY (`idIntervention`) REFERENCES `intervention` (`idIntervention`);

--
-- Limiti per la tabella `intervention`
--
ALTER TABLE `intervention`
  ADD CONSTRAINT `FK3mj2fkepw9rl96d43iiwc2lcc` FOREIGN KEY (`idType`) REFERENCES `type` (`idType`);

--
-- Limiti per la tabella `manager`
--
ALTER TABLE `manager`
  ADD CONSTRAINT `FKmrbo7ktryg0mfwthw4mla31p3` FOREIGN KEY (`idUser_FK`) REFERENCES `user` (`idUser`);

--
-- Limiti per la tabella `type`
--
ALTER TABLE `type`
  ADD CONSTRAINT `FKt1msy0ccddvxb2m0ju1esgkt5` FOREIGN KEY (`idManager`) REFERENCES `manager` (`idManager`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
