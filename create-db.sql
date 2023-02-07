
DROP DATABASE IF EXISTS `web`;
CREATE DATABASE `web`;
USE `web`;


CREATE TABLE `EVENTS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(2000) NOT NULL,
  `date` VARCHAR(2000) NOT NULL,
  `hours` VARCHAR(2000) NOT NULL,
  `association` VARCHAR(2000) NOT NULL,
  `description` VARCHAR(2000) NOT NULL,
  `link` VARCHAR(2000) NOT NULL,
  `cityId` INT NOT NULL,
  `over18` BIT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `LOCATIONS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(2000) NULL,
  `city` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `CONTACT_FORMS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(2000) NULL,
  `last_name` VARCHAR(2000) NULL,
  `type` VARCHAR(2000) NULL,
  `email` VARCHAR(2000) NULL,
  `content` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `USERS` (
  `email` VARCHAR(100) NOT NULL,
  `age` INT NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`email`));
ALTER TABLE `USERS` ADD UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE;

INSERT CONTACT_FORMS (first_name, last_name, type, email, content) VALUES ('Avi', 'Gershon', 'volunteer', 'avi@a.com', 'example form');

INSERT LOCATIONS (country, city) VALUES ('Chile', 'Santiago');
INSERT LOCATIONS (country, city) VALUES ('Israel', 'Tel Aviv');
INSERT LOCATIONS (country, city) VALUES ('Israel', 'Ashdod');
INSERT LOCATIONS (country, city) VALUES ('Australia', 'Sydney');
INSERT LOCATIONS (country, city) VALUES ('Ontario', 'Canada');
INSERT LOCATIONS (country, city) VALUES ('USA', 'New York');


INSERT USERS (email,age,password) VALUES ("noya@gmail.com",20,"123456789");
INSERT USERS (email,age,password) VALUES ("Rafael@walla.co.il", 33, "155ABhD" );
INSERT USERS (email,age,password) VALUES ("Dora@gmail.com", 39, "1112223333" );
INSERT USERS (email,age,password) VALUES ("anny@gmail.com", 16,  "12300000" );
INSERT USERS (email,age,password) VALUES ("amir@gmail.com", 33,  "123ABCD" );

INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "02/10/2023", "17:00-18:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 3, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "22/10/2023", "13:00-16:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 3, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Food Distribution", "02/10/2023", "17:00-18:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 1, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Food Distribution", "12/03/2023", "10:00-18:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 1, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "02/10/2023", "17:00-18:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 3, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "02/04/2023", "19:00-20:30", "Let the Animals Live", "Let the animals live is looking for volunteers to come and take dogs for a walk. We would love to hear from you!", "https://www.letlive.org.il/", 3, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Renovation of buildings", "03/10/2023", "12:00-15:30", "Aldeas Infantiles SOS Chile", "There are families and children who are exposed to difficult housing conditions and poverty.We are looking for volunteers to come and help us with painting the walls, cleaning and moving furniture in several houses. We will be happy for you to fill in your phone number on our website and we will get back to you with more details!", "https://www.aldeasinfantilessos.cl/", 1, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Renovation of buildings", "03/02/2023", "13:00-15:30", "Aldeas Infantiles SOS Chile", "There are families and children who are exposed to difficult housing conditions and poverty.We are looking for volunteers to come and help us with painting the walls, cleaning and moving furniture in several houses. We will be happy for you to fill in your phone number on our website and we will get back to you with more details!", "https://www.aldeasinfantilessos.cl/", 1, true);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "30/12/2022", "17:00-18:30", "Brooklyn Bridge Park", "We are looking for volunteers to help us clean beaches. We will be happy for you to fill in details on our website and we will get back to you with all the details", "https://brooklynbridgepark.org/support/volunteer?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYLw704Fpo-3UE_br-34rDwn1IaF_AvHbkxm58Yl9cLbydrbiVYVy1RoCvRUQAvD_BwE", 6, false);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Other", "30/03/2023", "16:00-19:30", "Brooklyn Bridge Park", "We are looking for volunteers to help us clean beaches. We will be happy for you to fill in details on our website and we will get back to you with all the details", "https://brooklynbridgepark.org/support/volunteer?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYLw704Fpo-3UE_br-34rDwn1IaF_AvHbkxm58Yl9cLbydrbiVYVy1RoCvRUQAvD_BwE", 6, false);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("Help for elderly people", "30/12/2022", "10:00-12:00", "good spirit", "Volunteers aged 18 and over are needed to assist in the activities of the rights extraction center operating on site. The volunteering includes: helping those who apply to the center in filling out forms, and in dealing with government bureaucracy, debts and injustice.", "https://www.ruachtova.org.il/projects/?single_project_id=101512&project=%D7%A1%D7%99%D7%95%D7%A2+%D7%91%D7%9E%D7%A8%D7%9B%D7%96+%D7%9E%D7%99%D7%A6%D7%95%D7%99+%D7%96%D7%9B%D7%95%D7%99%D7%95%D7%AA+%D7%A9%D7%99%D7%A7%D7%9E%D7%94+%D7%A8%D7%9E%D7%AA+%D7%92%D7%9F", 3, false);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("A listening ear", "30/12/2022", "17:00-18:30", "Recovery teddy bears", "Our association meets many patients in moments of difficulty and gives them hugs full of love, ones that give them strength to continue forward and fight. At this event we are looking for volunteers to come to our studio and be a listening ear for our patients.We would love to hear from you! You can leave details in the attached link :)", "https://healingteddies.org.il/volunteer/?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYCc65AB2HM-n5ihm7Blf4eAxfksYOh3WCuZXwpmX52CTOamTEkyK0RoCdBMQAvD_BwE/", 2, false);
INSERT EVENTS (type, date, hours, association, description, link, cityId, over18) VALUES ("A listening ear", "30/12/2023", "12:00-13:30", "Recovery teddy bears", "Our association meets many patients in moments of difficulty and gives them hugs full of love, ones that give them strength to continue forward and fight. At this event we are looking for volunteers to come to our studio and be a listening ear for our patients.We would love to hear from you! You can leave details in the attached link :)", "https://healingteddies.org.il/volunteer/?gclid=CjwKCAiAv9ucBhBXEiwA6N8nYCc65AB2HM-n5ihm7Blf4eAxfksYOh3WCuZXwpmX52CTOamTEkyK0RoCdBMQAvD_BwE/", 2, false);

  
  
  
