-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-18 04:52:46
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kangnier`
--

-- --------------------------------------------------------

--
-- 表的结构 `cate`
--

CREATE TABLE IF NOT EXISTS `cate` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `catename` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `cate`
--

INSERT INTO `cate` (`id`, `catename`, `pid`, `url`) VALUES
(1, '康尼尔', 1, '');

-- --------------------------------------------------------

--
-- 表的结构 `company`
--

CREATE TABLE IF NOT EXISTS `company` (
  `con_id` int(12) NOT NULL AUTO_INCREMENT,
  `city` varchar(20) NOT NULL,
  `section` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `state` int(12) NOT NULL,
  PRIMARY KEY (`con_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `company`
--

INSERT INTO `company` (`con_id`, `city`, `section`, `name`, `email`, `phone`, `state`) VALUES
(1, '北京', '北京市朝阳区SOHO现代城5号1802室', '', 'Carnel@126.com', '010-65664088/65664068 400-666-3288', 10),
(2, '江苏', '南京', '', '', '', 0),
(3, '德州', '武城', '', '', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `mes_id` int(12) NOT NULL AUTO_INCREMENT,
  `mes_name` varchar(255) NOT NULL,
  `mes_phone` int(12) NOT NULL,
  `mes_email` varchar(255) NOT NULL,
  `mes_info` text NOT NULL,
  PRIMARY KEY (`mes_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`mes_id`, `mes_name`, `mes_phone`, `mes_email`, `mes_info`) VALUES
(7, '', 0, '', 'dfsa'),
(8, '', 0, '', 'sfad');

-- --------------------------------------------------------

--
-- 表的结构 `navlist`
--

CREATE TABLE IF NOT EXISTS `navlist` (
  `nav_id` int(12) NOT NULL AUTO_INCREMENT,
  `nav_name` varchar(255) NOT NULL,
  `nav_pic` varchar(255) NOT NULL,
  `state` int(12) NOT NULL,
  PRIMARY KEY (`nav_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `navlist`
--

INSERT INTO `navlist` (`nav_id`, `nav_name`, `nav_pic`, `state`) VALUES
(1, '品牌介绍', '/public/img/banner1.png', 0),
(2, '新闻中心', '/public/img/banner2.png', 0),
(3, '招商加盟', '/public/img/banner3.png', 0),
(4, '拓客宝典', '/public/img/banner3.png', 0),
(5, '减肥百科', '/public/img/banner3.png', 0),
(6, '商学院', '/public/img/banner4.png', 0),
(7, '联系我们', '/public/img/banner4.png', 0);

-- --------------------------------------------------------

--
-- 表的结构 `news_detail`
--

CREATE TABLE IF NOT EXISTS `news_detail` (
  `info_id` int(12) NOT NULL AUTO_INCREMENT,
  `etitle` varchar(255) NOT NULL,
  `ctitle` varchar(255) NOT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `econ` longtext,
  `ccon` longtext,
  `state` int(12) NOT NULL,
  `sli_id` int(12) NOT NULL,
  PRIMARY KEY (`info_id`),
  KEY `sli_id` (`sli_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- 转存表中的数据 `news_detail`
--

INSERT INTO `news_detail` (`info_id`, `etitle`, `ctitle`, `pic`, `econ`, `ccon`, `state`, `sli_id`) VALUES
(1, '第一条英文标题', '第一条中文标题', '123456', '第一条英文内容', '第一条中文内容', 0, 2),
(3, '第三条英文标题', '第三条中文标题', '123', '第三条英文内容', '第三条中文内容', 1, 2),
(4, '第四条英文标题', '第四条中文标题', '123', '第四条英文内容', '第四条中文内容', 0, 2),
(9, '', '', '', '', '', 0, 2),
(10, '第10', '', '', '', '', 0, 2),
(11, '', '', '', '', '', 0, 2),
(12, '', '', '', '', '', 0, 4),
(13, '', '', '', '', '', 0, 5),
(16, '', '', '', '', '', 0, 3),
(17, '', '', '', '', '', 0, 3),
(18, '', '', '', '', '', 0, 3),
(19, '', '', '', '', '', 0, 4),
(20, '', '', '', '', '', 0, 4),
(21, '', '', '', '', '', 0, 5),
(22, '', '', '', '', '', 0, 5),
(23, '', '', '', '', '', 0, 2);

-- --------------------------------------------------------

--
-- 表的结构 `page`
--

CREATE TABLE IF NOT EXISTS `page` (
  `p_id` int(12) NOT NULL AUTO_INCREMENT,
  `p_name` varchar(255) NOT NULL,
  `p_con` varchar(255) NOT NULL,
  `nav_id` int(12) NOT NULL,
  PRIMARY KEY (`p_id`),
  KEY `nav_id` (`nav_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `page`
--

INSERT INTO `page` (`p_id`, `p_name`, `p_con`, `nav_id`) VALUES
(7, '董事长介绍', 'a阿道夫 撒地方是', 1),
(8, '品牌荣誉', '/第三方发斯蒂芬', 1),
(9, '团队风采', '/第三方发斯蒂芬', 1),
(10, '企业文化', '/第三方发斯蒂芬', 1),
(11, '加盟流程', '/第三方发斯蒂芬', 3),
(12, '加盟方案', '/第三方发斯蒂芬', 3);

-- --------------------------------------------------------

--
-- 表的结构 `slimming`
--

CREATE TABLE IF NOT EXISTS `slimming` (
  `sli_id` int(12) NOT NULL AUTO_INCREMENT,
  `sliname` varchar(255) NOT NULL,
  `nav_id` int(12) NOT NULL,
  PRIMARY KEY (`sli_id`),
  KEY `nav_id` (`nav_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `slimming`
--

INSERT INTO `slimming` (`sli_id`, `sliname`, `nav_id`) VALUES
(2, '减肥效果', 5),
(3, '中国好身材', 5),
(4, '最新活动', 5),
(5, '减肥助手', 5),
(6, '拓客宝典', 4),
(7, '视频中心', 4);

-- --------------------------------------------------------

--
-- 表的结构 `user_info`
--

CREATE TABLE IF NOT EXISTS `user_info` (
  `user_id` int(12) NOT NULL AUTO_INCREMENT,
  `user_account` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_pic` varchar(255) NOT NULL,
  `hash` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user_info`
--

INSERT INTO `user_info` (`user_id`, `user_account`, `user_name`, `user_password`, `user_phone`, `user_pic`, `hash`) VALUES
(1, 'admin', '管理员', '123456', '123456', '123456', 'a66abb5684c45962d887564f08346e8d');

--
-- 限制导出的表
--

--
-- 限制表 `news_detail`
--
ALTER TABLE `news_detail`
  ADD CONSTRAINT `news_detail_ibfk_1` FOREIGN KEY (`sli_id`) REFERENCES `slimming` (`sli_id`);

--
-- 限制表 `page`
--
ALTER TABLE `page`
  ADD CONSTRAINT `page_ibfk_1` FOREIGN KEY (`nav_id`) REFERENCES `navlist` (`nav_id`);

--
-- 限制表 `slimming`
--
ALTER TABLE `slimming`
  ADD CONSTRAINT `slimming_ibfk_1` FOREIGN KEY (`nav_id`) REFERENCES `navlist` (`nav_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
