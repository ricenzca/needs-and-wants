-- psql -d sei_prj2 -U postgres -f tables-seed.sql

DROP TABLE expenses;
DROP TABLE users;
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
    user_id INTEGER references users(id)
);


-- SELECT date_trunc('month', date ) AS expense_month, sum(amount) AS monthly_sum
-- FROM expenses
-- GROUP BY expense_month;

-- SELECT to_char(date_trunc('month', date), 'YY-Mon') AS expense_month, sum(amount) AS monthly_sum
-- FROM expenses
-- GROUP BY date_trunc('month',date);

-- SELECT to_char(date_trunc('month', date), 'YY-Mon') AS expense_month, sum(amount) AS monthly_sum
-- FROM expenses WHERE user_id=1 
-- GROUP BY date_trunc('month',date);


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

INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (10, 'want', '01-02-2018', 'dessert', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (20, 'need', '01-03-2018', 'transport', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (30, 'want', '01-04-2018', 'food', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (40, 'need', '01-05-2018', 'transport', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (50, 'want', '01-06-2018', 'electronics', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (60, 'need', '01-07-2018', 'clothes', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (70, 'want', '01-08-2018', 'food', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (80, 'need', '01-09-2018', 'drinks', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (90, 'want', '01-10-2018', 'electronics', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (100, 'need', '01-11-2018', 'clothes', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (110, 'want', '01-12-2018', 'food', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (120, 'need', '01-01-2019', 'drinks', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (130, 'want', '01-02-2019', 'electronics', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (140, 'need', '01-03-2019', 'clothes', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (150, 'want', '01-04-2019', 'food', 1);
INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES (150, 'want', '01-03-2019', 'food', 1);


-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (100, '0.05', current_date, 'savings account', 2);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '2.5', current_date, 'bond', 1);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '5', current_date, 'stock', 1);

-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'allowance', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (500, current_date, 'angbao', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (3000, current_date, 'salary', 1);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'rental', 1);