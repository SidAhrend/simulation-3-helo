create table helo_users(
id serial primary key,
username varchar(20),
password varchar(250),
profile_pic text);

create table helo_posts(
id serial primary key,
title varchar(45),
img text,
content text,
author_id int references helo_users(id));