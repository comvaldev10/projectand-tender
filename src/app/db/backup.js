// -- Adminer 4.8.1 MySQL 5.5.5-10.4.26-MariaDB dump

// SET NAMES utf8;
// SET time_zone = '+00:00';
// SET foreign_key_checks = 0;
// SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

// CREATE DATABASE `comv_emirates` /*!40100 DEFAULT CHARACTER SET latin1 */;
// USE `comv_emirates`;

// SET NAMES utf8mb4;

// DROP TABLE IF EXISTS `about`;
// CREATE TABLE `about` (
//   `about_id` int(11) NOT NULL AUTO_INCREMENT,
//   `alt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `banner_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `banner_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `about_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `about_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_subscriber1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_subscriber2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_year1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_year2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_key_region1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `success_key_region2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `who_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `who_alt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `who_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `who_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mission_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mission_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mission_our` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mission_vision` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mission_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `access_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `access_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `access_button` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `access_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `why_you_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `why_you_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `why_you_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `why_you_alt_tag` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `why_you_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `ourclent_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `ourclent_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `ourclent_alt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `ourclent_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `ourclent_check` tinyint(1) DEFAULT 0,
//   `testo_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `testo_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `testo_alt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `testo_descrip` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `testo_check` tinyint(1) DEFAULT 0,
//   `testo2_check` tinyint(1) DEFAULT 0,
//   `testo2_input` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_descrip` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_button_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_button_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_bar` tinyint(1) DEFAULT 0,
//   `call_to_action_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lastest_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lastest_descrip` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_nopad_ci DEFAULT NULL,
//   `publish` tinyint(1) unsigned DEFAULT 0,
//   PRIMARY KEY (`about_id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;


// DROP TABLE IF EXISTS `access_level_of_sub_admin`;
// CREATE TABLE `access_level_of_sub_admin` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `access_level_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   `site_id` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=tis620;


// DROP TABLE IF EXISTS `bussiness_news`;
// CREATE TABLE `bussiness_news` (
//   `bussiness_news_id` int(11) NOT NULL AUTO_INCREMENT,
//   `bussiness_news_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_select_sector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_date` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_alt_tag` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_project` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_tender` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_companies` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `bussiness_news_status` tinyint(1) DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   `site_id` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`bussiness_news_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

// INSERT INTO `bussiness_news` (`bussiness_news_id`, `bussiness_news_title`, `bussiness_news_select_sector`, `bussiness_news_country`, `bussiness_news_date`, `bussiness_news_alt_tag`, `bussiness_news_description`, `bussiness_news_project`, `bussiness_news_tender`, `bussiness_news_companies`, `seo_title`, `seo_description`, `seo_keyword`, `seo_slug`, `bussiness_news_status`, `soft_delete`, `site_id`) VALUES
// (1,	'a',	'a11',	'a2',	'a3',	'a4',	'a50',	'a',	'a',	'a',	'a',	'a',	'a',	'a',	0,	NULL,	'1'),
// (2,	'a',	'a11',	'a2',	'a3',	'a4',	'a50',	'a',	'a',	'a',	'a',	'a',	'a',	'a',	0,	NULL,	'1'),
// (3,	'a',	'a',	'aa',	'aaa',	'aaaa',	'1a',	'a1',	'a2',	'a',	'ar',	'a',	'a',	'a',	1,	NULL,	'1')
// ON DUPLICATE KEY UPDATE `bussiness_news_id` = VALUES(`bussiness_news_id`), `bussiness_news_title` = VALUES(`bussiness_news_title`), `bussiness_news_select_sector` = VALUES(`bussiness_news_select_sector`), `bussiness_news_country` = VALUES(`bussiness_news_country`), `bussiness_news_date` = VALUES(`bussiness_news_date`), `bussiness_news_alt_tag` = VALUES(`bussiness_news_alt_tag`), `bussiness_news_description` = VALUES(`bussiness_news_description`), `bussiness_news_project` = VALUES(`bussiness_news_project`), `bussiness_news_tender` = VALUES(`bussiness_news_tender`), `bussiness_news_companies` = VALUES(`bussiness_news_companies`), `seo_title` = VALUES(`seo_title`), `seo_description` = VALUES(`seo_description`), `seo_keyword` = VALUES(`seo_keyword`), `seo_slug` = VALUES(`seo_slug`), `bussiness_news_status` = VALUES(`bussiness_news_status`), `soft_delete` = VALUES(`soft_delete`), `site_id` = VALUES(`site_id`);

// DROP TABLE IF EXISTS `company_role_schema`;
// CREATE TABLE `company_role_schema` (
//   `company_id` int(11) NOT NULL AUTO_INCREMENT,
//   `company_role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   `site_id` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`company_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=tis620;

// INSERT INTO `company_role_schema` (`company_id`, `company_role`, `soft_delete`, `site_id`) VALUES
// (1,	'Bussiness owner',	NULL,	NULL),
// (2,	'CEO/VP?DIRECTOR',	NULL,	NULL),
// (3,	'Manager Team Leader',	NULL,	NULL),
// (4,	'Team Member',	NULL,	NULL),
// (5,	'Other',	NULL,	NULL)
// ON DUPLICATE KEY UPDATE `company_id` = VALUES(`company_id`), `company_role` = VALUES(`company_role`), `soft_delete` = VALUES(`soft_delete`), `site_id` = VALUES(`site_id`);

// DROP TABLE IF EXISTS `custom_plan_request`;
// CREATE TABLE `custom_plan_request` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `request_plan_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `no_of_extra_project_sectors` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `no_of_extra_tender_sectors` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `request_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `admin_offered_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `response` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `user_payment_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `payment_mode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=tis620;


// DROP TABLE IF EXISTS `editproduct`;
// CREATE TABLE `editproduct` (
//   `editproduct_id` int(11) NOT NULL AUTO_INCREMENT,
//   `product_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_alt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_status` tinyint(1) DEFAULT NULL,
//   `product_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `publish` tinyint(1) DEFAULT NULL,
//   `sub_sub_sector_id` varchar(255) DEFAULT NULL,
//   `site_id` tinyint(1) DEFAULT NULL,
//   `sub_sub_sector_name` varchar(255) DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   PRIMARY KEY (`editproduct_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

// INSERT INTO `editproduct` (`editproduct_id`, `product_name`, `product_alt_tag`, `product_description`, `product_status`, `product_image`, `seo_title`, `seo_description`, `seo_keyword`, `seo_slug`, `publish`, `sub_sub_sector_id`, `site_id`, `sub_sub_sector_name`, `soft_delete`) VALUES
// (1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'1',	1,	'Gas Exploration & Production',	0),
// (2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'1',	2,	'Gas Exploration & Production',	0),
// (3,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	1,	'Oilfields Exploration & Development',	0),
// (4,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	2,	'Oilfields Exploration & Development',	0)
// ON DUPLICATE KEY UPDATE `editproduct_id` = VALUES(`editproduct_id`), `product_name` = VALUES(`product_name`), `product_alt_tag` = VALUES(`product_alt_tag`), `product_description` = VALUES(`product_description`), `product_status` = VALUES(`product_status`), `product_image` = VALUES(`product_image`), `seo_title` = VALUES(`seo_title`), `seo_description` = VALUES(`seo_description`), `seo_keyword` = VALUES(`seo_keyword`), `seo_slug` = VALUES(`seo_slug`), `publish` = VALUES(`publish`), `sub_sub_sector_id` = VALUES(`sub_sub_sector_id`), `site_id` = VALUES(`site_id`), `sub_sub_sector_name` = VALUES(`sub_sub_sector_name`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `edit_project_sector`;
// CREATE TABLE `edit_project_sector` (
//   `edit_project_sector_id` int(11) NOT NULL AUTO_INCREMENT,
//   `sector_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `alt_tag` varchar(255) DEFAULT NULL,
//   `listing_page_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `listing_page_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `banner_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `banner_sub_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `section_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `short_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `detailed_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `inner_page_sector_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `inner_page_sector_select` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `inner_page_detailed_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `graph` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `graph_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `industry_report` tinyint(1) DEFAULT NULL,
//   `lastest_news` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lastest_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_description` text DEFAULT NULL,
//   `call_to_action_button_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_button_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_bar` tinyint(1) DEFAULT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `graph_check` tinyint(1) DEFAULT NULL,
//   `inner_page_check` tinyint(1) DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   `publish` tinyint(1) DEFAULT NULL,
//   `sector_id` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`edit_project_sector_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=tis620;

// INSERT INTO `edit_project_sector` (`edit_project_sector_id`, `sector_name`, `alt_tag`, `listing_page_description`, `listing_page_image`, `banner_heading`, `banner_sub_heading`, `section_heading`, `short_description`, `detailed_description`, `inner_page_sector_name`, `inner_page_sector_select`, `inner_page_detailed_description`, `project_type1`, `project_type1_title`, `project_type1_description`, `project_type2`, `project_type2_title`, `project_type2_description`, `graph`, `graph_description`, `industry_report`, `lastest_news`, `lastest_description`, `seo_title`, `seo_description`, `seo_keyword`, `seo_slug`, `call_to_action_heading`, `call_to_action_description`, `call_to_action_button_name`, `call_to_action_button_link`, `call_to_action_bar`, `site_id`, `graph_check`, `inner_page_check`, `soft_delete`, `publish`, `sector_id`) VALUES
// (1,	'Oil & Gas',	' ',	' EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates. EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates latest business information on Projects,latest business information on Projects,latest business information on Projects,latest business information on Projects,.',	'1675161258368image4.jpg',	' ',	' ',	' ',	' ',	'<p><br></p>',	'Oil & Gas',	'[]',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	' ',	' ',	'Oil & Gas',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	'1',	0,	0,	0,	0,	'1'),
// (2,	'Oil & Gas',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	NULL,	NULL,	0,	NULL,	'1'),
// (3,	'Utilities & Infrastructure',	' ',	'EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates. EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates latest business information on Projects,latest business information on Projects,latest business information on Projects,latest business information on Projects,.',	'1675161920632image5.JPG',	' ',	' ',	' ',	' ',	'<p><br></p>',	'Utilities & Infrastructure',	'[]',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	' ',	' ',	' Utilities & Infrastructure',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	'1',	0,	0,	0,	0,	'2'),
// (4,	'Utilities & Infrastructure',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	NULL,	NULL,	0,	NULL,	'2'),
// (5,	'Industrial',	' ',	'EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates. EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates latest business information on Projects,latest business information on Projects,latest business information on Projects,latest business information on Projects,.',	'1675161942154image6.JPG',	' ',	' ',	' ',	' ',	'<p><br></p>',	'Industrial',	'[]',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	' ',	' ',	'Industrial',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	'1',	0,	0,	0,	0,	'3'),
// (6,	'Industrial',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	NULL,	NULL,	0,	NULL,	'3'),
// (7,	'Transportation',	' ',	'\nEmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates. EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates latest business information on Projects,latest business information on Projects,latest business information on Projects,latest business information on Projects,.',	'1675161965205image7.JPG',	' ',	' ',	' ',	' ',	'<p><br></p>',	'Transportation',	'[]',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	' ',	' ',	'Transportation',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	'1',	0,	0,	0,	0,	'4'),
// (8,	'Transportation',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	NULL,	NULL,	0,	NULL,	'4'),
// (9,	'Building & Construction',	' ',	'EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates. EmiratesTenders provides you with the latest business information on Projects, Tenders, Enquiries and Business Deals in the United Arab Emirates latest business information on Projects,latest business information on Projects,latest business information on Projects,latest business information on Projects,.',	'1675161995241image8.JPG',	' ',	' ',	' ',	' ',	'<p><br></p>',	'Building & Construction',	'[]',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	' ',	' ',	'Building & Construction',	' ',	' ',	' ',	' ',	' ',	' ',	' ',	0,	'1',	0,	0,	0,	0,	'5'),
// (10,	'Building & Construction',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	NULL,	NULL,	0,	NULL,	'5')
// ON DUPLICATE KEY UPDATE `edit_project_sector_id` = VALUES(`edit_project_sector_id`), `sector_name` = VALUES(`sector_name`), `alt_tag` = VALUES(`alt_tag`), `listing_page_description` = VALUES(`listing_page_description`), `listing_page_image` = VALUES(`listing_page_image`), `banner_heading` = VALUES(`banner_heading`), `banner_sub_heading` = VALUES(`banner_sub_heading`), `section_heading` = VALUES(`section_heading`), `short_description` = VALUES(`short_description`), `detailed_description` = VALUES(`detailed_description`), `inner_page_sector_name` = VALUES(`inner_page_sector_name`), `inner_page_sector_select` = VALUES(`inner_page_sector_select`), `inner_page_detailed_description` = VALUES(`inner_page_detailed_description`), `project_type1` = VALUES(`project_type1`), `project_type1_title` = VALUES(`project_type1_title`), `project_type1_description` = VALUES(`project_type1_description`), `project_type2` = VALUES(`project_type2`), `project_type2_title` = VALUES(`project_type2_title`), `project_type2_description` = VALUES(`project_type2_description`), `graph` = VALUES(`graph`), `graph_description` = VALUES(`graph_description`), `industry_report` = VALUES(`industry_report`), `lastest_news` = VALUES(`lastest_news`), `lastest_description` = VALUES(`lastest_description`), `seo_title` = VALUES(`seo_title`), `seo_description` = VALUES(`seo_description`), `seo_keyword` = VALUES(`seo_keyword`), `seo_slug` = VALUES(`seo_slug`), `call_to_action_heading` = VALUES(`call_to_action_heading`), `call_to_action_description` = VALUES(`call_to_action_description`), `call_to_action_button_name` = VALUES(`call_to_action_button_name`), `call_to_action_button_link` = VALUES(`call_to_action_button_link`), `call_to_action_bar` = VALUES(`call_to_action_bar`), `site_id` = VALUES(`site_id`), `graph_check` = VALUES(`graph_check`), `inner_page_check` = VALUES(`inner_page_check`), `soft_delete` = VALUES(`soft_delete`), `publish` = VALUES(`publish`), `sector_id` = VALUES(`sector_id`);

// DROP TABLE IF EXISTS `edit_project_sub_sector`;
// CREATE TABLE `edit_project_sub_sector` (
//   `edit_project_sub_sector_id` int(11) NOT NULL AUTO_INCREMENT,
//   `alt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `page_image` text DEFAULT NULL,
//   `banner_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `banner_sub_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `section_heading` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `short_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `detailed_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_sector_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_sector_select` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `product_detailed_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type1_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_type2_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lastest_sub_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_sub_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_button_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_button_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `call_to_action_bar` tinyint(1) DEFAULT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   `publish` tinyint(1) DEFAULT NULL,
//   `sub_sector_id` varchar(255) DEFAULT NULL,
//   `sector_id` varchar(45) DEFAULT NULL,
//   `sub_sector_name` varchar(45) DEFAULT NULL,
//   PRIMARY KEY (`edit_project_sub_sector_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

// INSERT INTO `edit_project_sub_sector` (`edit_project_sub_sector_id`, `alt_tag`, `page_image`, `banner_heading`, `banner_sub_heading`, `section_heading`, `short_description`, `detailed_description`, `product_sector_name`, `product_sector_select`, `product_detailed_description`, `project_type1`, `project_type1_title`, `project_type1_description`, `project_type2`, `project_type2_title`, `project_type2_description`, `lastest_sub_title`, `seo_title`, `seo_description`, `seo_keyword`, `seo_slug`, `call_to_action_sub_title`, `call_to_action_button_name`, `call_to_action_button_link`, `call_to_action_bar`, `site_id`, `soft_delete`, `publish`, `sub_sector_id`, `sector_id`, `sub_sector_name`) VALUES
// (1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'1',	0,	NULL,	'1',	'1',	'Upstream - Exploration & Production'),
// (2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	'2',	0,	NULL,	'1',	'1',	'Upstream - Exploration & Production')
// ON DUPLICATE KEY UPDATE `edit_project_sub_sector_id` = VALUES(`edit_project_sub_sector_id`), `alt_tag` = VALUES(`alt_tag`), `page_image` = VALUES(`page_image`), `banner_heading` = VALUES(`banner_heading`), `banner_sub_heading` = VALUES(`banner_sub_heading`), `section_heading` = VALUES(`section_heading`), `short_description` = VALUES(`short_description`), `detailed_description` = VALUES(`detailed_description`), `product_sector_name` = VALUES(`product_sector_name`), `product_sector_select` = VALUES(`product_sector_select`), `product_detailed_description` = VALUES(`product_detailed_description`), `project_type1` = VALUES(`project_type1`), `project_type1_title` = VALUES(`project_type1_title`), `project_type1_description` = VALUES(`project_type1_description`), `project_type2` = VALUES(`project_type2`), `project_type2_title` = VALUES(`project_type2_title`), `project_type2_description` = VALUES(`project_type2_description`), `lastest_sub_title` = VALUES(`lastest_sub_title`), `seo_title` = VALUES(`seo_title`), `seo_description` = VALUES(`seo_description`), `seo_keyword` = VALUES(`seo_keyword`), `seo_slug` = VALUES(`seo_slug`), `call_to_action_sub_title` = VALUES(`call_to_action_sub_title`), `call_to_action_button_name` = VALUES(`call_to_action_button_name`), `call_to_action_button_link` = VALUES(`call_to_action_button_link`), `call_to_action_bar` = VALUES(`call_to_action_bar`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`), `publish` = VALUES(`publish`), `sub_sector_id` = VALUES(`sub_sector_id`), `sector_id` = VALUES(`sector_id`), `sub_sector_name` = VALUES(`sub_sector_name`);

// DROP TABLE IF EXISTS `event`;
// CREATE TABLE `event` (
//   `event_id` int(11) NOT NULL AUTO_INCREMENT,
//   `event_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_select_sector` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_date` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_alt_tag` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_organiser` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_venue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mobile_no` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_website` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `event_image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `site_id` varchar(255) DEFAULT NULL,
//   `event_status` tinyint(1) DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   `event_companies` text DEFAULT NULL,
//   PRIMARY KEY (`event_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

// INSERT INTO `event` (`event_id`, `event_name`, `event_select_sector`, `event_country`, `event_date`, `event_alt_tag`, `event_organiser`, `event_venue`, `mobile_no`, `event_website`, `event_email`, `event_image`, `site_id`, `event_status`, `soft_delete`, `event_companies`) VALUES
// (2,	't2',	't3',	'y3',	'y',	'y',	'p',	'a',	'65656',	'utu',	'comvateam11@gmail.com',	'aaa',	'1',	0,	1,	'a')
// ON DUPLICATE KEY UPDATE `event_id` = VALUES(`event_id`), `event_name` = VALUES(`event_name`), `event_select_sector` = VALUES(`event_select_sector`), `event_country` = VALUES(`event_country`), `event_date` = VALUES(`event_date`), `event_alt_tag` = VALUES(`event_alt_tag`), `event_organiser` = VALUES(`event_organiser`), `event_venue` = VALUES(`event_venue`), `mobile_no` = VALUES(`mobile_no`), `event_website` = VALUES(`event_website`), `event_email` = VALUES(`event_email`), `event_image` = VALUES(`event_image`), `site_id` = VALUES(`site_id`), `event_status` = VALUES(`event_status`), `soft_delete` = VALUES(`soft_delete`), `event_companies` = VALUES(`event_companies`);

// DROP TABLE IF EXISTS `plan_purchase`;
// CREATE TABLE `plan_purchase` (
//   `plan_purchase_id` int(11) NOT NULL AUTO_INCREMENT,
//   `plan_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `site_id` int(11) NOT NULL,
//   `sequence` int(11) NOT NULL,
//   `status` tinyint(1) DEFAULT NULL,
//   `tenders_plan` tinyint(1) DEFAULT NULL,
//   `no_of_tenders` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `projects_plan` tinyint(1) DEFAULT NULL,
//   `no_of_projects` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `export_to_excel_plan` tinyint(1) DEFAULT NULL,
//   `plan_cost` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `addition_user_cost` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `discount_plan` tinyint(1) DEFAULT NULL,
//   `discount_percentage` varchar(255) DEFAULT NULL,
//   `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `feature_title3` varchar(255) DEFAULT NULL,
//   `feature_title1` varchar(255) DEFAULT NULL,
//   `feature_title2` varchar(255) DEFAULT NULL,
//   `feature_description1` text DEFAULT NULL,
//   `feature_description2` text DEFAULT NULL,
//   `feature_description3` text DEFAULT NULL,
//   `feature_compare1` text DEFAULT NULL,
//   `feature_compare2` text DEFAULT NULL,
//   `feature_compare3` text DEFAULT NULL,
//   `feature_compare4` text DEFAULT NULL,
//   `feature_compare5` text DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`plan_purchase_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=tis620;

// INSERT INTO `plan_purchase` (`plan_purchase_id`, `plan_name`, `site_id`, `sequence`, `status`, `tenders_plan`, `no_of_tenders`, `projects_plan`, `no_of_projects`, `export_to_excel_plan`, `plan_cost`, `addition_user_cost`, `discount_plan`, `discount_percentage`, `date`, `feature_title3`, `feature_title1`, `feature_title2`, `feature_description1`, `feature_description2`, `feature_description3`, `feature_compare1`, `feature_compare2`, `feature_compare3`, `feature_compare4`, `feature_compare5`, `soft_delete`) VALUES
// (1,	'Preminium Plan',	1,	1,	1,	1,	'5',	1,	'5',	1,	'1000',	'50',	0,	NULL,	'\"2023-0101\"',	'plan1',	'plan1',	'plan2',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	'oun. de??scrip??tion di-?skrip-sh?n. : an act of describing. specifically : discourse intended to give a mental image of something experienced. beautiful beyond description.',	NULL),
// (2,	'Project Based Plan',	1,	2,	1,	1,	'3',	1,	'3',	1,	'1500',	'30',	0,	'',	'2023-01-01',	'a',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	NULL),
// (3,	'Tender Based Plan',	1,	2,	1,	1,	'3',	1,	'3',	1,	'1500',	'30',	0,	'',	'2023-01-01',	'a',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	'abcde',	NULL)
// ON DUPLICATE KEY UPDATE `plan_purchase_id` = VALUES(`plan_purchase_id`), `plan_name` = VALUES(`plan_name`), `site_id` = VALUES(`site_id`), `sequence` = VALUES(`sequence`), `status` = VALUES(`status`), `tenders_plan` = VALUES(`tenders_plan`), `no_of_tenders` = VALUES(`no_of_tenders`), `projects_plan` = VALUES(`projects_plan`), `no_of_projects` = VALUES(`no_of_projects`), `export_to_excel_plan` = VALUES(`export_to_excel_plan`), `plan_cost` = VALUES(`plan_cost`), `addition_user_cost` = VALUES(`addition_user_cost`), `discount_plan` = VALUES(`discount_plan`), `discount_percentage` = VALUES(`discount_percentage`), `date` = VALUES(`date`), `feature_title3` = VALUES(`feature_title3`), `feature_title1` = VALUES(`feature_title1`), `feature_title2` = VALUES(`feature_title2`), `feature_description1` = VALUES(`feature_description1`), `feature_description2` = VALUES(`feature_description2`), `feature_description3` = VALUES(`feature_description3`), `feature_compare1` = VALUES(`feature_compare1`), `feature_compare2` = VALUES(`feature_compare2`), `feature_compare3` = VALUES(`feature_compare3`), `feature_compare4` = VALUES(`feature_compare4`), `feature_compare5` = VALUES(`feature_compare5`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `project_sector_schema`;
// CREATE TABLE `project_sector_schema` (
//   `project_id` int(11) NOT NULL AUTO_INCREMENT,
//   `project_sector` varchar(255) DEFAULT NULL,
//   `site_id` varchar(255) DEFAULT '0',
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`project_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=tis620;

// INSERT INTO `project_sector_schema` (`project_id`, `project_sector`, `site_id`, `soft_delete`) VALUES
// (1,	'Oil & Gas',	'0',	NULL),
// (2,	'Utilities & Infrastructure',	'0',	NULL),
// (3,	'Industrial',	'0',	NULL),
// (4,	'Transportation',	'0',	NULL),
// (5,	'Building & Construction',	'0',	NULL)
// ON DUPLICATE KEY UPDATE `project_id` = VALUES(`project_id`), `project_sector` = VALUES(`project_sector`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `role`;
// CREATE TABLE `role` (
//   `role_id` int(11) NOT NULL AUTO_INCREMENT,
//   `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`role_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=tis620;

// INSERT INTO `role` (`role_id`, `role`, `description`, `soft_delete`) VALUES
// (1,	'user',	'user can see project',	NULL),
// (2,	'admin',	'admin can manage user and sub-admin',	NULL),
// (3,	'sub_admin',	'sub_admin can manage user',	NULL)
// ON DUPLICATE KEY UPDATE `role_id` = VALUES(`role_id`), `role` = VALUES(`role`), `description` = VALUES(`description`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `sector_of_user_schema`;
// CREATE TABLE `sector_of_user_schema` (
//   `sector_of_user_id` int(11) NOT NULL AUTO_INCREMENT,
//   `user_id` int(11) NOT NULL,
//   `sector_id` int(11) NOT NULL,
//   `sub_sector_id` int(11) NOT NULL,
//   `sub_sub_sector_id` int(11) NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`sector_of_user_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=tis620;

// INSERT INTO `sector_of_user_schema` (`sector_of_user_id`, `user_id`, `sector_id`, `sub_sector_id`, `sub_sub_sector_id`, `soft_delete`) VALUES
// (2,	1,	1,	2,	6,	NULL),
// (3,	1,	1,	2,	7,	NULL),
// (4,	1,	1,	2,	8,	NULL),
// (5,	1,	1,	2,	9,	NULL),
// (6,	1,	1,	2,	10,	NULL),
// (7,	1,	1,	2,	11,	NULL),
// (9,	1,	1,	2,	12,	NULL),
// (10,	1,	1,	2,	13,	NULL),
// (15,	1,	2,	1,	1,	NULL),
// (18,	1,	1,	1,	4,	NULL),
// (22,	1,	1,	1,	3,	NULL),
// (25,	1,	1,	3,	6,	NULL),
// (26,	1,	1,	1,	5,	NULL)
// ON DUPLICATE KEY UPDATE `sector_of_user_id` = VALUES(`sector_of_user_id`), `user_id` = VALUES(`user_id`), `sector_id` = VALUES(`sector_id`), `sub_sector_id` = VALUES(`sub_sector_id`), `sub_sub_sector_id` = VALUES(`sub_sub_sector_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `site_details`;
// CREATE TABLE `site_details` (
//   `site_details_id` int(11) NOT NULL AUTO_INCREMENT,
//   `site_country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `site_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`site_details_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

// INSERT INTO `site_details` (`site_details_id`, `site_country`, `site_link`, `soft_delete`) VALUES
// (1,	'Qatar',	'www.google.com',	NULL),
// (2,	'saudi',	'google',	NULL)
// ON DUPLICATE KEY UPDATE `site_details_id` = VALUES(`site_details_id`), `site_country` = VALUES(`site_country`), `site_link` = VALUES(`site_link`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `sub_project_sector_schema`;
// CREATE TABLE `sub_project_sector_schema` (
//   `sub_project_id` int(11) NOT NULL AUTO_INCREMENT,
//   `sub_project_sector` varchar(255) NOT NULL,
//   `sector_id` int(11) NOT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   PRIMARY KEY (`sub_project_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=tis620;

// INSERT INTO `sub_project_sector_schema` (`sub_project_id`, `sub_project_sector`, `sector_id`, `site_id`, `soft_delete`) VALUES
// (1,	'Upstream - Exploration & Production',	1,	NULL,	0)
// ON DUPLICATE KEY UPDATE `sub_project_id` = VALUES(`sub_project_id`), `sub_project_sector` = VALUES(`sub_project_sector`), `sector_id` = VALUES(`sector_id`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `sub_sub_project_sector_schema`;
// CREATE TABLE `sub_sub_project_sector_schema` (
//   `sub_sub_project_id` int(11) NOT NULL AUTO_INCREMENT,
//   `sub_sub_project_sector` varchar(255) NOT NULL,
//   `sub_sector_id` int(11) NOT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT 0,
//   PRIMARY KEY (`sub_sub_project_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=tis620;

// INSERT INTO `sub_sub_project_sector_schema` (`sub_sub_project_id`, `sub_sub_project_sector`, `sub_sector_id`, `site_id`, `soft_delete`) VALUES
// (1,	'Gas Exploration & Production',	1,	NULL,	0),
// (2,	'Oilfields Exploration & Development',	1,	NULL,	0)
// ON DUPLICATE KEY UPDATE `sub_sub_project_id` = VALUES(`sub_sub_project_id`), `sub_sub_project_sector` = VALUES(`sub_sub_project_sector`), `sub_sector_id` = VALUES(`sub_sector_id`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `sub_tender_schema`;
// CREATE TABLE `sub_tender_schema` (
//   `sub_tender_id` int(11) NOT NULL AUTO_INCREMENT,
//   `sub_tender` varchar(255) NOT NULL,
//   `tender_id` int(11) NOT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`sub_tender_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=tis620;

// INSERT INTO `sub_tender_schema` (`sub_tender_id`, `sub_tender`, `tender_id`, `site_id`, `soft_delete`) VALUES
// (1,	'Airfield Lighting',	1,	NULL,	NULL),
// (2,	'Airport Ground Handling Equipment',	1,	NULL,	NULL),
// (3,	'Airport Supply & Services',	1,	NULL,	NULL),
// (4,	'Airport Traffic Control System & Equipment',	1,	NULL,	NULL),
// (5,	'Baggage Handling',	1,	NULL,	NULL),
// (6,	'Cargo Handling Equipment & Accessories',	1,	NULL,	NULL),
// (7,	'Navigation System & Equipment',	1,	NULL,	NULL),
// (8,	'Railway Equipment & Spare Parts',	2,	NULL,	NULL),
// (9,	'Trains',	2,	NULL,	NULL),
// (10,	'aa',	1,	NULL,	NULL)
// ON DUPLICATE KEY UPDATE `sub_tender_id` = VALUES(`sub_tender_id`), `sub_tender` = VALUES(`sub_tender`), `tender_id` = VALUES(`tender_id`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `tender_of_user_schema`;
// CREATE TABLE `tender_of_user_schema` (
//   `tender_of_user_id` int(11) NOT NULL AUTO_INCREMENT,
//   `user_id` int(11) NOT NULL,
//   `tender_id` int(11) NOT NULL,
//   `sub_tender_id` int(11) NOT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`tender_of_user_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=tis620;

// INSERT INTO `tender_of_user_schema` (`tender_of_user_id`, `user_id`, `tender_id`, `sub_tender_id`, `soft_delete`) VALUES
// (3,	1,	1,	3,	NULL),
// (4,	1,	2,	8,	NULL),
// (5,	1,	2,	9,	NULL),
// (8,	1,	1,	7,	NULL),
// (9,	1,	1,	2,	NULL),
// (10,	1,	1,	8,	NULL)
// ON DUPLICATE KEY UPDATE `tender_of_user_id` = VALUES(`tender_of_user_id`), `user_id` = VALUES(`user_id`), `tender_id` = VALUES(`tender_id`), `sub_tender_id` = VALUES(`sub_tender_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `tender_schema`;
// CREATE TABLE `tender_schema` (
//   `tender_id` int(11) NOT NULL AUTO_INCREMENT,
//   `tender` varchar(255) NOT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`tender_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=tis620;

// INSERT INTO `tender_schema` (`tender_id`, `tender`, `site_id`, `soft_delete`) VALUES
// (1,	'Airport Services',	NULL,	NULL),
// (2,	'Railway',	NULL,	NULL),
// (3,	'Agriculture & Irrigation',	NULL,	NULL),
// (4,	'aa',	NULL,	NULL)
// ON DUPLICATE KEY UPDATE `tender_id` = VALUES(`tender_id`), `tender` = VALUES(`tender`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `user`;
// CREATE TABLE `user` (
//   `user_id` int(11) NOT NULL AUTO_INCREMENT,
//   `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `email` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `confirm_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `role_id` int(11) DEFAULT 1,
//   `plan_id` int(11) DEFAULT NULL,
//   `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `user_company_role` int(11) DEFAULT NULL,
//   `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `pin_zip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `mobile_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `office_contact` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `vat_detail` tinyint(1) DEFAULT NULL,
//   `vat_date` date DEFAULT NULL,
//   `vat_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `vat_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `purchase_additional_login` tinyint(1) DEFAULT NULL,
//   `no_of_login_user` int(10) DEFAULT NULL,
//   `term_and_condition` tinyint(1) DEFAULT NULL,
//   `subscribed` tinyint(1) DEFAULT NULL,
//   `reg_date` date DEFAULT NULL,
//   `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `facebook_social_profile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `linkedin_social_profile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `approve_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `expiry_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `site_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_assigned_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_owner` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `stage_reached` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `payment_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `company_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `company_specialised` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `company_profile_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `is_trial_provided` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `trial_duration_from_to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_credit_allocated` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `tender_credit_allocated` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `tender_credit_used` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `project_credit_used` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `parent_user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `access_level` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `designation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `whatsapp_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `calendly_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `zoom_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `email_Signature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`user_id`),
//   KEY `user_company_role` (`user_company_role`),
//   CONSTRAINT `user_ibfk_1` FOREIGN KEY (`user_company_role`) REFERENCES `company_role_schema` (`company_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

// INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `confirm_password`, `role_id`, `plan_id`, `company_name`, `user_company_role`, `address`, `country`, `city`, `pin_zip`, `mobile_contact`, `office_contact`, `vat_detail`, `vat_date`, `vat_number`, `vat_image`, `purchase_additional_login`, `no_of_login_user`, `term_and_condition`, `subscribed`, `reg_date`, `price`, `facebook_social_profile`, `linkedin_social_profile`, `twitter`, `approve_date`, `expiry_date`, `site_id`, `lead_assigned_status`, `lead_owner`, `stage_reached`, `payment_id`, `company_type`, `company_specialised`, `company_profile_description`, `is_trial_provided`, `trial_duration_from_to`, `project_credit_allocated`, `tender_credit_allocated`, `tender_credit_used`, `project_credit_used`, `status`, `parent_user_id`, `access_level`, `designation`, `whatsapp_no`, `calendly_link`, `zoom_link`, `email_Signature`, `soft_delete`) VALUES
// (1,	'comvalteam9',	'comvalteam9@gmail.com',	'abcdef',	'abcdef',	1,	2,	'c',	1,	'i',	'k',	'j',	'677',	'677',	'677',	0,	'2023-02-01',	'1234',	'[\"1674135230673index.png\"]',	1,	12,	1,	0,	NULL,	'200',	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (2,	'comvalteam12',	'comvalteam12@gmail.com',	'abcdef2',	'abcdef2',	1,	1,	'C',	1,	'gt road1',	'UAE11',	'UAE12',	'2211',	'12345617',	'1234567',	0,	'0000-00-00',	'0',	'0',	0,	0,	1,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (3,	'comvalteam10',	'comvalteam10@gmail.com',	'abcdef3',	'abcdef3',	1,	2,	'abcde',	1,	'gt road1',	'UAE1',	'UAE2',	'221',	'1234567',	'1234567',	1,	'2023-01-01',	'12345',	'12345',	1,	7,	1,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (4,	'comvalteam11@gmail.com',	'comvalteam11@gmail.com',	'abcdef37',	'abcdef37',	1,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (5,	'admin',	'admin@gmail.com',	'admin',	'admin',	2,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (6,	'admin1',	'admin@gmail1.com',	'admin1',	'admin',	1,	1,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (8,	'jayate jaiswal3',	'comvalteam111@gmail.com',	'abcdef3',	'abcdef3',	1,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (9,	'jayate jaiswal3',	'comvalteam1111@gmail.com',	'abcdef3',	'abcdef3',	1,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL),
// (10,	'jayate jaiswal3',	'comvalteam11111@gmail.com',	'abcdef3',	'abcdef3',	1,	2,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL,	NULL)
// ON DUPLICATE KEY UPDATE `user_id` = VALUES(`user_id`), `name` = VALUES(`name`), `email` = VALUES(`email`), `password` = VALUES(`password`), `confirm_password` = VALUES(`confirm_password`), `role_id` = VALUES(`role_id`), `plan_id` = VALUES(`plan_id`), `company_name` = VALUES(`company_name`), `user_company_role` = VALUES(`user_company_role`), `address` = VALUES(`address`), `country` = VALUES(`country`), `city` = VALUES(`city`), `pin_zip` = VALUES(`pin_zip`), `mobile_contact` = VALUES(`mobile_contact`), `office_contact` = VALUES(`office_contact`), `vat_detail` = VALUES(`vat_detail`), `vat_date` = VALUES(`vat_date`), `vat_number` = VALUES(`vat_number`), `vat_image` = VALUES(`vat_image`), `purchase_additional_login` = VALUES(`purchase_additional_login`), `no_of_login_user` = VALUES(`no_of_login_user`), `term_and_condition` = VALUES(`term_and_condition`), `subscribed` = VALUES(`subscribed`), `reg_date` = VALUES(`reg_date`), `price` = VALUES(`price`), `facebook_social_profile` = VALUES(`facebook_social_profile`), `linkedin_social_profile` = VALUES(`linkedin_social_profile`), `twitter` = VALUES(`twitter`), `approve_date` = VALUES(`approve_date`), `expiry_date` = VALUES(`expiry_date`), `site_id` = VALUES(`site_id`), `lead_assigned_status` = VALUES(`lead_assigned_status`), `lead_owner` = VALUES(`lead_owner`), `stage_reached` = VALUES(`stage_reached`), `payment_id` = VALUES(`payment_id`), `company_type` = VALUES(`company_type`), `company_specialised` = VALUES(`company_specialised`), `company_profile_description` = VALUES(`company_profile_description`), `is_trial_provided` = VALUES(`is_trial_provided`), `trial_duration_from_to` = VALUES(`trial_duration_from_to`), `project_credit_allocated` = VALUES(`project_credit_allocated`), `tender_credit_allocated` = VALUES(`tender_credit_allocated`), `tender_credit_used` = VALUES(`tender_credit_used`), `project_credit_used` = VALUES(`project_credit_used`), `status` = VALUES(`status`), `parent_user_id` = VALUES(`parent_user_id`), `access_level` = VALUES(`access_level`), `designation` = VALUES(`designation`), `whatsapp_no` = VALUES(`whatsapp_no`), `calendly_link` = VALUES(`calendly_link`), `zoom_link` = VALUES(`zoom_link`), `email_Signature` = VALUES(`email_Signature`), `soft_delete` = VALUES(`soft_delete`);

// DROP TABLE IF EXISTS `what_we_do`;
// CREATE TABLE `what_we_do` (
//   `what_we_do_id` int(11) NOT NULL AUTO_INCREMENT,
//   `what_we_do_heading` text DEFAULT NULL,
//   `what_we_do_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_heading1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_heading2` text DEFAULT NULL,
//   `what_we_do_heading3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_heading4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_heading5` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_heading6` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_button_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_button_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `service_we_provide_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `service_we_provide_sub_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `service_we_provide_button_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `service_we_provide_button_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_heading1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_heading2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_heading3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_alt_tag` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_alt_tag1` text DEFAULT NULL,
//   `third_section_alt_tag2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `insights_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `insights_button_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `insights_button_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `insights_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_and_insights_projects` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_and_insights_tenders` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_and_insights_contractors` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `lead_and_insights_consultants` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `industries_we_serve_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `industries_we_serve_descripion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `sectors_we_serve_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `sectors_we_serve_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `sectors_we_serve_sector` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `latest_news_heading` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `latest_news_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `blank` text DEFAULT NULL,
//   `seo_title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_keyword` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `seo_slug` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_image1` text DEFAULT NULL,
//   `what_we_do_image2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_image3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_image4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_image5` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `what_we_do_image6` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_image1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_image2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_image3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_description1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_description2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `third_section_description3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `site_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//   `soft_delete` tinyint(1) DEFAULT NULL,
//   PRIMARY KEY (`what_we_do_id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=tis620;

// INSERT INTO `what_we_do` (`what_we_do_id`, `what_we_do_heading`, `what_we_do_description`, `what_we_do_heading1`, `what_we_do_heading2`, `what_we_do_heading3`, `what_we_do_heading4`, `what_we_do_heading5`, `what_we_do_heading6`, `what_we_do_button_name`, `what_we_do_button_link`, `service_we_provide_heading`, `service_we_provide_sub_heading`, `service_we_provide_button_name`, `service_we_provide_button_link`, `third_section_heading1`, `third_section_heading2`, `third_section_heading3`, `third_section_alt_tag`, `third_section_alt_tag1`, `third_section_alt_tag2`, `insights_heading`, `insights_button_name`, `insights_button_link`, `insights_description`, `lead_and_insights_projects`, `lead_and_insights_tenders`, `lead_and_insights_contractors`, `lead_and_insights_consultants`, `industries_we_serve_heading`, `industries_we_serve_descripion`, `sectors_we_serve_heading`, `sectors_we_serve_description`, `sectors_we_serve_sector`, `latest_news_heading`, `latest_news_description`, `blank`, `seo_title`, `seo_description`, `seo_keyword`, `seo_slug`, `what_we_do_image1`, `what_we_do_image2`, `what_we_do_image3`, `what_we_do_image4`, `what_we_do_image5`, `what_we_do_image6`, `third_section_image1`, `third_section_image2`, `third_section_image3`, `third_section_description1`, `third_section_description2`, `third_section_description3`, `site_id`, `soft_delete`) VALUES
// (6,	'a',	'b',	'e',	'f',	'g',	'h',	'i',	'j',	'c',	'd',	'k',	'l',	'm',	'n',	'o',	'o1',	'o3',	'p',	'q',	'r',	's',	't',	'u',	'50 daily use English words with meanings · 1. Absence – The lack or unavailability of something or someone. · 2. Approval – Having a positive',	'v',	'w',	'x',	'y',	'z',	'50 daily use English words with meanings · 1. Absence – The lack or unavailability of something or someone. · 2. Approval – Having a positive',	'ae',	'50 daily use English words with meanings · 1. Absence – The lack or unavailability of something or someone. · 2. Approval – Having a positive',	'a3',	'1111111',	'50 daily use English words with meanings · 1. Absence – The lack or unavailability of something or someone. · 2. Approval – Having a positive',	'a4',	'a123',	'50 daily use English words with meanings · 1. Absence – The lack or unavailability of something or someone. · 2. Approval – Having a positive',	'a7',	'a8',	'b1',	'b2',	'b3',	'b4',	'b5',	'b6',	'b7',	'b8',	'b9',	'd1',	'd2',	'd3',	NULL,	NULL)
// ON DUPLICATE KEY UPDATE `what_we_do_id` = VALUES(`what_we_do_id`), `what_we_do_heading` = VALUES(`what_we_do_heading`), `what_we_do_description` = VALUES(`what_we_do_description`), `what_we_do_heading1` = VALUES(`what_we_do_heading1`), `what_we_do_heading2` = VALUES(`what_we_do_heading2`), `what_we_do_heading3` = VALUES(`what_we_do_heading3`), `what_we_do_heading4` = VALUES(`what_we_do_heading4`), `what_we_do_heading5` = VALUES(`what_we_do_heading5`), `what_we_do_heading6` = VALUES(`what_we_do_heading6`), `what_we_do_button_name` = VALUES(`what_we_do_button_name`), `what_we_do_button_link` = VALUES(`what_we_do_button_link`), `service_we_provide_heading` = VALUES(`service_we_provide_heading`), `service_we_provide_sub_heading` = VALUES(`service_we_provide_sub_heading`), `service_we_provide_button_name` = VALUES(`service_we_provide_button_name`), `service_we_provide_button_link` = VALUES(`service_we_provide_button_link`), `third_section_heading1` = VALUES(`third_section_heading1`), `third_section_heading2` = VALUES(`third_section_heading2`), `third_section_heading3` = VALUES(`third_section_heading3`), `third_section_alt_tag` = VALUES(`third_section_alt_tag`), `third_section_alt_tag1` = VALUES(`third_section_alt_tag1`), `third_section_alt_tag2` = VALUES(`third_section_alt_tag2`), `insights_heading` = VALUES(`insights_heading`), `insights_button_name` = VALUES(`insights_button_name`), `insights_button_link` = VALUES(`insights_button_link`), `insights_description` = VALUES(`insights_description`), `lead_and_insights_projects` = VALUES(`lead_and_insights_projects`), `lead_and_insights_tenders` = VALUES(`lead_and_insights_tenders`), `lead_and_insights_contractors` = VALUES(`lead_and_insights_contractors`), `lead_and_insights_consultants` = VALUES(`lead_and_insights_consultants`), `industries_we_serve_heading` = VALUES(`industries_we_serve_heading`), `industries_we_serve_descripion` = VALUES(`industries_we_serve_descripion`), `sectors_we_serve_heading` = VALUES(`sectors_we_serve_heading`), `sectors_we_serve_description` = VALUES(`sectors_we_serve_description`), `sectors_we_serve_sector` = VALUES(`sectors_we_serve_sector`), `latest_news_heading` = VALUES(`latest_news_heading`), `latest_news_description` = VALUES(`latest_news_description`), `blank` = VALUES(`blank`), `seo_title` = VALUES(`seo_title`), `seo_description` = VALUES(`seo_description`), `seo_keyword` = VALUES(`seo_keyword`), `seo_slug` = VALUES(`seo_slug`), `what_we_do_image1` = VALUES(`what_we_do_image1`), `what_we_do_image2` = VALUES(`what_we_do_image2`), `what_we_do_image3` = VALUES(`what_we_do_image3`), `what_we_do_image4` = VALUES(`what_we_do_image4`), `what_we_do_image5` = VALUES(`what_we_do_image5`), `what_we_do_image6` = VALUES(`what_we_do_image6`), `third_section_image1` = VALUES(`third_section_image1`), `third_section_image2` = VALUES(`third_section_image2`), `third_section_image3` = VALUES(`third_section_image3`), `third_section_description1` = VALUES(`third_section_description1`), `third_section_description2` = VALUES(`third_section_description2`), `third_section_description3` = VALUES(`third_section_description3`), `site_id` = VALUES(`site_id`), `soft_delete` = VALUES(`soft_delete`);

// -- 2023-01-31 11:48:51
