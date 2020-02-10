-- users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'Alice@mx.com', 'password');

-- polls table seeds here (Example)
INSERT INTO polls (user_id, question, date_created) VALUES (1, 'what movie do you like the most?', Now());

-- options table seeds here (Example)
INSERT INTO options (poll_id, option, rank) VALUES (1, 'Star Wars', 1);
INSERT INTO options (poll_id, option, rank) VALUES (1, 'Captin Marvel', 2);
INSERT INTO options (poll_id, option, rank) VALUES (1, 'Once Upon a Time in Hollywood', 3);
INSERT INTO options (poll_id, option, rank) VALUES (1, 'Jurassic Park', 4);
INSERT INTO options (poll_id, option, rank) VALUES (1, 'It', 5);

-- voters table seeds here (Example)
INSERT INTO voters (poll_id, email) VALUES (1, 'ahmed@yahoo.com');
INSERT INTO voters (poll_id, email) VALUES (1, 'Qusai@yahoo.com');
INSERT INTO voters (poll_id, email) VALUES (1, 'Carolina@yahoo.com');