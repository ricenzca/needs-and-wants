-- psql -d sei_prj2 -U postgres -f tables-seed.sql

DROP TABLE users;
DROP TABLE expenses;
DROP TABLE savings;
DROP TABLE income;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT    
); 

CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(38,2),
    need_want TEXT,
    date DATE,
    comments TEXT,
    user_id INTEGER
);

-- CREATE TABLE IF NOT EXISTS savings (
--     id SERIAL PRIMARY KEY,
--     amount DECIMAL(38,2),
--     interest_rate DECIMAL(38,5),
--     date DATE,
--     comments TEXT,
--     user_id INTEGER
-- );

-- CREATE TABLE IF NOT EXISTS income (
--     id SERIAL PRIMARY KEY,
--     amount DECIMAL(38,2),
--     date DATE,
--     comments TEXT,
--     user_id INTEGER
-- );

INSERT INTO users (username, password) VALUES ('warren','b2d64c99693d4155d827dfac7fc8e3ae593f824f16a8de1aca249223cc9f2141');
INSERT INTO users (username, password) VALUES ('charlie','c200e493e42921d44f33331262fb43b8a99c0ad40492b1b7cc137f91205ebcd2');

INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (49.99, 'want', current_date, 'food: hai di lao', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (12.50, 'want', current_date, 'food: pat bing soo', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (7.5, 'want', current_date, 'food: green tea frap', 2);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (1.60, 'need', current_date, 'transport', 2);

-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (100, '0.05', current_date, 'savings account', 2);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '2.5', current_date, 'bond', 1);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '5', current_date, 'stock', 1);

-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'allowance', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (500, current_date, 'angbao', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (3000, current_date, 'salary', 1);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'rental', 1);