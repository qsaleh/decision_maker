-- users table seeds here (Example)
INSERT INTO users (name, email, password) VALUES ('Alice', 'Alice@mx.com', 'password');
INSERT INTO users (name, email, password) VALUES ('Kira', 'Kira@mx.com', 'password');

-- polls table seeds here (Example)
INSERT INTO polls (question) VALUES ('what movie do you like the most?');

-- options table seeds here (Example)
INSERT INTO options (option, rank) VALUES ('Star Wars', 1);
INSERT INTO options (option, rank) VALUES ('Captin Marvel', 2);
INSERT INTO options (option, rank) VALUES ('Once Upon a Time in Hollywood', 3);
INSERT INTO options (option, rank) VALUES ('Jurassic Park', 4);
INSERT INTO options (option, rank) VALUES ('It', 5);

-- voters table seeds here (Example)
INSERT INTO polls (email) VALUES ('ahmed@yahoo.com');
INSERT INTO polls (email) VALUES ('Qusai@yahoo.com');
INSERT INTO polls (email) VALUES ('Carolina@yahoo.com');