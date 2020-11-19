/*
 Navicat Premium Data Transfer

 Source Server         : mis_proyectos_bd
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : company

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 25/05/2020 11:50:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for employee
-- ----------------------------
DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `salary` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employee
-- ----------------------------
INSERT INTO `employee` VALUES (1, 'Ryan Ray', 20000);
INSERT INTO `employee` VALUES (2, 'Joe McMillan', 40000);
INSERT INTO `employee` VALUES (3, 'Daniel', 900000);
INSERT INTO `employee` VALUES (4, 'Test', 700000);
INSERT INTO `employee` VALUES (5, 'Test', 700000);

-- ----------------------------
-- Procedure structure for employeeAddOrEdit
-- ----------------------------
DROP PROCEDURE IF EXISTS `employeeAddOrEdit`;
delimiter ;;
CREATE PROCEDURE `employeeAddOrEdit`(IN _id INT,
  IN _name VARCHAR(45),
  IN _salary INT)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO employee (name, salary)
    VALUES (_name, _salary);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE employee
    SET
    name = _name,
    salary = _salary
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
