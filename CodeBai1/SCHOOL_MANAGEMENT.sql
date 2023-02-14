-- Adminer 4.8.1 MySQL 8.0.32 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `SCHOOL`;
CREATE TABLE `SCHOOL` (
  `school_id` int NOT NULL AUTO_INCREMENT,
  `school_name` varchar(255) DEFAULT NULL,
  `level_school` varchar(255) DEFAULT NULL,
  `principal` varchar(255) DEFAULT NULL,
  `number_of_school_year` int DEFAULT NULL,
  PRIMARY KEY (`school_id`),
  UNIQUE KEY `principal` (`principal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `SCHOOL` (`school_id`, `school_name`, `level_school`, `principal`, `number_of_school_year`) VALUES
(1,	'Tiều học An Binh',	'1',	'Nguyễn văn A',	5),
(2,	'THPT Trần Phú',	'3',	'Nguyễn Văn C',	3),
(3,	'Tiểu học Đức Lâm',	'1',	'Nguyễn văn B',	5),
(4,	'THCS Lê Văn Thiêm',	'2',	'Nguyễn Văn D',	4),
(5,	'THCS Đức Lâm',	'2',	'Nguyễn Văn E',	4);

DROP TABLE IF EXISTS `school_students`;
CREATE TABLE `school_students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255) DEFAULT NULL,
  `class` int DEFAULT NULL,
  `school_year` int DEFAULT NULL,
  `school_id` int DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  KEY `school_id` (`school_id`),
  CONSTRAINT `school_students_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `SCHOOL` (`school_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `school_students` (`student_id`, `student_name`, `class`, `school_year`, `school_id`) VALUES
(1,	'Phạm Đức Ái',	12,	3,	2),
(2,	'Thành Cát Tư Hãn',	4,	3,	1),
(3,	'Tôn Tẫn',	7,	3,	4);

DROP TABLE IF EXISTS `school_teachers`;
CREATE TABLE `school_teachers` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `teacher_name` varchar(20) DEFAULT NULL,
  `subject` varchar(15) DEFAULT NULL,
  `school_id` int DEFAULT NULL,
  PRIMARY KEY (`teacher_id`),
  KEY `school_id` (`school_id`),
  CONSTRAINT `school_teachers_ibfk_1` FOREIGN KEY (`school_id`) REFERENCES `SCHOOL` (`school_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `school_teachers` (`teacher_id`, `teacher_name`, `subject`, `school_id`) VALUES
(1,	'Phan Đăng Nhân',	'Toán',	2),
(2,	'Trịnh Hoàng Hơn',	'Ngữ Văn',	2),
(3,	'Hoàng Hải Long',	'Tiếng Anh',	2);

DROP TABLE IF EXISTS `student_scores`;
CREATE TABLE `student_scores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject_title` varchar(20) DEFAULT NULL,
  `test_score_15` int DEFAULT NULL,
  `test_score_45` int DEFAULT NULL,
  `test_score_semester` int DEFAULT NULL,
  `teacher_id` int DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `teacher_id` (`teacher_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `student_scores_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `school_teachers` (`teacher_id`),
  CONSTRAINT `student_scores_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `school_students` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `student_scores` (`id`, `subject_title`, `test_score_15`, `test_score_45`, `test_score_semester`, `teacher_id`, `student_id`) VALUES
(1,	'Toán ',	5,	7,	6,	1,	1),
(2,	'Ngữ Văn',	6,	7,	8,	2,	1),
(3,	'Tiếng Anh',	1,	4,	7,	3,	1),
(4,	'Toán ',	8,	8,	7,	1,	2),
(5,	'Ngữ Văn',	9,	4,	7,	2,	2),
(6,	'Tiếng Anh',	6,	3,	7,	3,	2),
(7,	'Toán ',	9,	9,	8,	1,	3),
(8,	'Ngữ Văn',	9,	10,	8,	2,	3),
(9,	'Tiếng Anh',	10,	7,	9,	3,	3);

-- 2023-02-14 07:33:12
