

USE cs230; 



CREATE TABLE IF NOT EXISTS ReadingList (
id           INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
CDate   DATE,
Name      VARCHAR(40) NOT NULL,
URL       TEXT  NOT NULL,
description    TEXT NOT NULL

);


    
INSERT INTO ReadingList(id,CDate,Name,URL,description) VALUES (NULL,"2017-04-23","Harry Potter","pottermore.com","This is about a wizard from under a stairs and the magical school he attends");
    


