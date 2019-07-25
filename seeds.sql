DROP DATABASE IF EXISTS sequelize_passport;
CREATE DATABASE sequelize_passport;


insert into Users(username, password, createdAt, updatedAt)
values ("dragon", "password", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");

USE sequelize_passport;

insert into Categories(type, createdAt, updatedAt, UserId)
values("Tradition","2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 2),
("Adventure","2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 2);
-- ("Aerial","2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1),
-- ("Photojournalistic","2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1),
-- ("Fine Art","2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477", 1);







-- insert into Users(businessName, firstName, lastName, city, state, pricing, travel, experience, website, phone, email, username, password, createdAt, updatedAt)
-- values ("Prestige Worldwide","Brennan", "Huff","Altadeena", "California", "$$$$", false, 1, "www.prestigeworldwide.com","1234567890", "prestigeworldwide@gmail.com", "callmenighthawk", "Password", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");





-- ("Dunder Mifflin Pix", "$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Stringer Bell Photography", "$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Entourage Headshots", "$$$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Rubber Hand Photography", "$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Photos by Dany", "$$$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Zoolander Model Shots", "$$$$$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Bada Bing Photos", "$$", true, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Flying V Photography", "$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Broken Lizard Productions", "$$$", false, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");



-- insert into Locations(city, state, createdAt, updatedAt)
-- values (, "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Scranton", "Pennsylvania", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Baltimore", "Maryland", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Los Angeles", "California", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Scranton", "Pennsylvania", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Winterfell", "Westeros", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("New York City", "New York", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("North Caldwell", "New Jersey", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Minneapolis", "Minnesota", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Spurbury", "Vermont", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");


-- insert into Photos(firstName, lastName, photo, experience, createdAt, updatedAt)
-- values ( "brennan.jpg", 1,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Michael", "Scott", "michael.jpg", 15,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Stringer", "Bell", "string.jpg", 10,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Vinny", "Chase", "vinny.jpg", 3,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Roy", "Munson", "munson.jpg", 10,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Dany", "Targaryen", "dany.jpg", 2,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Derek", "Zoolander", "zoolander.jpg", 20,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Tony", "Soprano", "tony.jpg", 4,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Gordon", "Bombay", "gordo.jpg", 6,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Rod", "Farva", "farva.jpg", 3,"2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");


-- insert into Contacts(website, phone, email, createdAt, updatedAt)
-- values ("www.prestigeworldwide.com", "1234567890", "prestigeworldwide@gmail.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("DunderPix.com", "1234567890", "mscott@dunder.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("SBellPhotography", "1234567890", "sbell@sbcglobal.net", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("entourageheadshot.com", "1234567890", "entourage@headshot.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("YouGotMunsoned.com", "1234567890", "munson@mail.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("dragonlady.com", "1234567890", "igotthatfire@dragonlady.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("zoolander.com", "1234567890", "derek@zoolander.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("badabing.com", "1234567890", "tony@badabing.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("flyingv.com", "1234567890", "gordonbombay@flyingv.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("BrokenLizard.com", "1234567890", "farva@brokenlizard.com", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");

-- insert into Categories(type, createdAt, updatedAt)
-- values("Adventure", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Photojournalistic", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Aerial", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Fine Art", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Traditional", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Traditional", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Fine Art", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Aerial", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Adventure", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477"),
-- ("Photojournalistic", "2019-07-24T19:25:21.477", "2019-07-24T19:25:21.477");



