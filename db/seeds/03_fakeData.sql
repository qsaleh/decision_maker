-- users table seeds here (Example)
INSERT INTO users (email, password) VALUES ('Alice@mx.com', 'password');

-- polls table seeds here (Example)
INSERT INTO polls (user_id, question, description, date_created) 
VALUES (1, 'what movie do you like the most?', 'rank your movie preference', Now());

-- voters table seeds here (Example)
INSERT INTO voters (email) VALUES ('ahmed@yahoo.com');
INSERT INTO voters (email) VALUES ('Qusai@yahoo.com');
INSERT INTO voters (email) VALUES ('Carolina@yahoo.com');

-- options table seeds here (Example)
INSERT INTO options (poll_id, voter_id, option, rank) VALUES (1, 1, 'Star Wars', 1);
INSERT INTO options (poll_id, voter_id, option, rank) VALUES (1, 1, 'Captin Marvel', 2);
INSERT INTO options (poll_id, voter_id, option, rank) VALUES (1, 1, 'Once Upon a Time in Hollywood', 3);
INSERT INTO options (poll_id, voter_id, option, rank) VALUES (1, 1, 'Jurassic Park', 4);
INSERT INTO options (poll_id, voter_id, option, rank) VALUES (1, 1, 'It', 5);
