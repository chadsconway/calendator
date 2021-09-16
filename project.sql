-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2021 at 12:20 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `calendator`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `linkid` varchar(36) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `est_startdate` date DEFAULT NULL,
  `est_enddate` date DEFAULT NULL,
  `est_hours` int(11) DEFAULT NULL,
  `actual_startdate` date DEFAULT NULL,
  `actual_enddate` date DEFAULT NULL,
  `actual_hours` int(11) DEFAULT NULL,
  `est_income` int(11) DEFAULT NULL,
  `actual_income` int(11) DEFAULT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `tasks` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`tasks`)),
  `timesheets` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`timesheets`)),
  `punchcards` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`punchcards`)),
  `documents` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`documents`)),
  `bid_entered` tinyint(1) DEFAULT NULL,
  `bid_won` tinyint(1) DEFAULT NULL,
  `flags` bit(16) DEFAULT NULL,
  `x_1` mediumtext DEFAULT NULL,
  `x_2` mediumtext DEFAULT NULL,
  `x_3` mediumtext DEFAULT NULL,
  `x_4` mediumtext DEFAULT NULL,
  `x_5` mediumtext DEFAULT NULL,
  `x_6` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`linkid`, `title`, `description`, `est_startdate`, `est_enddate`, `est_hours`, `actual_startdate`, `actual_enddate`, `actual_hours`, `est_income`, `actual_income`, `features`, `tasks`, `timesheets`, `punchcards`, `documents`, `bid_entered`, `bid_won`, `flags`, `x_1`, `x_2`, `x_3`, `x_4`, `x_5`, `x_6`) VALUES
('c6e947db-f434-42c4-bc50-831f89fea31d', 'project title', 'This is a description of the project', '2020-01-01', '2020-01-10', 100, '2020-02-01', '2020-02-10', 120, 2000, 2000, '[\"fad01aac-756e-4f8a-b68c-0c055a5f902a\"]', '[\"aa97ad52-9d20-4efb-aa17-0b685258aa75\"]', '[\"7068ab49-a126-4ed9-9ae5-1b62a44c1728\"]', '[\"82b05e80-e55b-4d27-8f80-abe1170019f2\"]', '{\"proposal\": \"Proposal #0303\"}', 1, 1, b'1111111111111111', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`linkid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
