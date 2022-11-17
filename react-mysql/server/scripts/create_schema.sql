CREATE DATABASE tutorial_project; 

CREATE TABLE `tutorial_project`, `game_reviews`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(250) NOT NULL,
    `review` TEXT(500) NOT NULL,
    PRIMARY KEY (`id`)
); 

