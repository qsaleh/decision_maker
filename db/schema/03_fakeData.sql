-- Drop and recreate users table (Example)
-- Drop and recreate polls table (Example)
-- Drop and recreate options table (Example)
-- Drop and recreate voters table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS polls CASCADE;
DROP TABLE IF EXISTS options CASCADE;
DROP TABLE IF EXISTS voters CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE polls (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  question VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  date_created TIMESTAMP NOT NULL
);

CREATE TABLE voters (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE options (
  id SERIAL PRIMARY KEY NOT NULL,
  poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  option VARCHAR(255) NOT NULL,
  rank INTEGER
);
