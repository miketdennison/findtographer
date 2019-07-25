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
