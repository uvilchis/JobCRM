-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
		
CREATE TABLE `Users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR NULL DEFAULT NULL,
  `token` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Companies'
-- 
-- ---

DROP TABLE IF EXISTS `Companies`;
		
CREATE TABLE `Companies` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `URL` VARCHAR NULL DEFAULT NULL,
  `logo` BLOB NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Contacts'
-- 
-- ---

DROP TABLE IF EXISTS `Contacts`;
		
CREATE TABLE `Contacts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `source` VARCHAR NULL DEFAULT NULL,
  `emailAddress` VARCHAR NULL DEFAULT NULL,
  `position` VARCHAR NULL DEFAULT NULL,
  `email` VARCHAR NULL DEFAULT NULL,
  `phoneNumber` VARCHAR NULL DEFAULT NULL,
  `notes` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Artifacts'
-- 
-- ---

DROP TABLE IF EXISTS `Artifacts`;
		
CREATE TABLE `Artifacts` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Records` INTEGER NULL DEFAULT NULL,
  `type` VARCHAR NULL DEFAULT NULL,
  `artifact` BLOB NULL DEFAULT NULL,
  `artifactTitle` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Records'
-- 
-- ---

DROP TABLE IF EXISTS `Records`;
		
CREATE TABLE `Records` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Users` INTEGER NULL DEFAULT NULL,
  `location` INTEGER NULL DEFAULT NULL,
  `id_Companies` INTEGER NULL DEFAULT NULL,
  `coverLetter` BINARY NULL DEFAULT NULL,
  `resume` BINARY NULL DEFAULT NULL,
  `firstInterview` BINARY NULL DEFAULT NULL,
  `secondInterview` BINARY NULL DEFAULT NULL,
  `offer` BINARY NULL DEFAULT NULL,
  `rejected` BINARY NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'recordsContactMap'
-- 
-- ---

DROP TABLE IF EXISTS `recordsContactMap`;
		
CREATE TABLE `recordsContactMap` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Contacts` INTEGER NULL DEFAULT NULL,
  `id_Records` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Artifacts` ADD FOREIGN KEY (id_Records) REFERENCES `Records` (`id`);
ALTER TABLE `Records` ADD FOREIGN KEY (id_Users) REFERENCES `Users` (`id`);
ALTER TABLE `Records` ADD FOREIGN KEY (id_Companies) REFERENCES `Companies` (`id`);
ALTER TABLE `recordsContactMap` ADD FOREIGN KEY (id_Contacts) REFERENCES `Contacts` (`id`);
ALTER TABLE `recordsContactMap` ADD FOREIGN KEY (id_Records) REFERENCES `Records` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Companies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Contacts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Artifacts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Records` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `recordsContactMap` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Users` (`id`,`username`,`token`) VALUES
-- ('','','');
-- INSERT INTO `Companies` (`id`,`name`,`URL`,`logo`) VALUES
-- ('','','','');
-- INSERT INTO `Contacts` (`id`,`source`,`emailAddress`,`position`,`email`,`phoneNumber`,`notes`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Artifacts` (`id`,`id_Records`,`type`,`artifact`,`artifactTitle`) VALUES
-- ('','','','','');
-- INSERT INTO `Records` (`id`,`id_Users`,`location`,`id_Companies`,`coverLetter`,`resume`,`firstInterview`,`secondInterview`,`offer`,`rejected`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `recordsContactMap` (`id`,`id_Contacts`,`id_Records`) VALUES
-- ('','','');