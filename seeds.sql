-- DROP DATABASE IF EXISTS sequelize_passport;
-- CREATE DATABASE sequelize_passport;
USE sequelize_passport;




-- insert into Businesses(businessName, pricing, travel, createdAt, updatedAt)
-- values ("Prestige Worldwide", "$$$$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Dunder Mifflin Pix", "$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Stringer Bell Photography", "$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Entourage Headshots", "$$$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Rubber Hand Photography", "$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Photos by Dany", "$$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Zoolander Model Shots", "$$$$$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Bada Bing Photos", "$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Flying V Photography", "$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Broken Lizard Productions", "$$$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");



-- insert into Locations(city, state, createdAt, updatedAt, BusinessId)
-- values ("Altadeena", "California", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1),
-- ("Scranton", "Pennsylvania", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 2),
-- ("Baltimore", "Maryland", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 3),
-- ("Los Angeles", "California", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 4),
-- ("Scranton", "Pennsylvania", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 5),
-- ("Winterfell", "Westeros", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 6),
-- ("New York City", "New York", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 7),
-- ("North Caldwell", "New Jersey", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 8),
-- ("Minneapolis", "Minnesota", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 9),
-- ("Spurbury", "Vermont", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 10);


insert into Photos(firstName, lastName, photo, experience, createdAt, updatedAt, BusinessId)
values ("Brennan", "Huff", "brennan.jpg", 1,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1),
("Michael", "Scott", "michael.jpg", 15,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 2),
("Stringer", "Bell", "string.jpg", 10,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 3),
("Vinny", "Chase", "vinny.jpg", 3,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 4),
("Roy", "Munson", "munson.jpg", 10,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 5),
("Dany", "Targaryen", "dany.jpg", 2,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 6),
("Derek", "Zoolander", "zoolander.jpg", 20,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 7),
("Tony", "Soprano", "tony.jpg", 4,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 8),
("Gordon", "Bombay", "gordo.jpg", 6,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 9),
("Rod", "Farva", "farva.jpg", 3,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 10);


insert into Contacts(website, phone, email, createdAt, updatedAt, BusinessId)
values ("www.prestigeworldwide.com", "1234567890", "prestigeworldwide@gmail.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1),
("DunderPix.com", "mscott@dunder.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 2),
("SBellPhotography", "sbell@sbcglobal.net", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 3),
("entourageheadshot.com", "entourage@headshot.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 4),
("YouGotMunsoned.com", "munson@mail.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 5),
("dragonlady.com", "igotthatfire@dragonlady.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 6),
("zoolander.com", "derek@zoolander.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 7),
("badabing.com", "tony@badabing.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 8),
("flyingv.com", "gordonbombay@flyingv.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 9),
("BrokenLizard.com", "farva@brokenlizard.com", "1234567890", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 10);

insert into Categories(type, createdAt, updatedAt, BusinessId)
values("Adventure", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",1),
("Photojournalistic", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",2),
("Aerial", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",3),
("Fine Art", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",4),
("Traditional", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",5),
("Traditional", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",6),
("Fine Art", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",7),
("Aerial", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",8),
("Adventure", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",9),
("Photojournalistic", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477",10);








