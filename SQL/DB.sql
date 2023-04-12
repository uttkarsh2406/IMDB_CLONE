create Database IMDB;
use  IMDB;

create table actor(
actor_id int auto_increment unique NOT NULL,
name CHAR(50),
gender ENUM('Male','Female'),
dob DATE,
bio CHAR(200)
);

create table movie(
movie_id int auto_increment unique NOT NULL,
name CHAR(50),
yor DATE,
plot VARCHAR(500),
poster BLOB
);

create table producer(
producer_id int auto_increment unique NOT NULL,
name CHAR(50),
gender ENUM('Male','Female'),
dob DATE,
bio CHAR(200)
);