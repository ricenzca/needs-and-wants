-- psql -d sei_prj2 -U postgres -f tables-seed.sql
SET datestyle = "ISO, DMY";
DROP TABLE expenses;
DROP TABLE users;
DROP TABLE expense_category;
DROP TABLE savings;
DROP TABLE income;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT    
); 

CREATE TABLE IF NOT EXISTS expense_category (
    category TEXT PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(38,2),
    need_want TEXT,
    date DATE,
    category TEXT references expense_category(category),
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

INSERT INTO expense_category (category) VALUES ('Uncategorized'),('Dining'), ('Shopping'), ('Groceries'), ('Transport'), ('Utilities'), ('Insurance'), ('Medical'), ('Telecommunications'), ('Taxes'), ('Holiday'), ('Special Occasions'), ('Investments'), ('Business'), ('Others');

INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '01-04-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '08-04-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '15-04-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '22-04-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '01-03-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '08-03-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '15-03-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '22-03-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '29-03-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '01-02-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '08-02-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '15-02-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '22-02-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '28-02-2019', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '01-01-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '08-01-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '15-01-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '22-01-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '29-01-2019', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '01-12-2018', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '08-12-2018', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '15-12-2018', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '22-12-2018', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (7, 'want', '28-12-2018', 'Dining', 'Coffee', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '01-11-2018', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '08-11-2018', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '15-11-2018', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '22-11-2018', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (5, 'want', '29-11-2018', 'Dining', 'Tea', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-06-2019', 'Dining', 'Thai restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-06-2019', 'Dining', 'Japanese restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-06-2019', 'Dining', 'Korean restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-06-2019', 'Dining', 'French restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-04-2019', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-04-2019', 'Dining', 'Thai restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-04-2019', 'Dining', 'Japanese restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-04-2019', 'Dining', 'Korean restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-04-2019', 'Dining', 'French restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-04-2019', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-03-2019', 'Dining', 'German restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-03-2019', 'Dining', 'Spanish restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-03-2019', 'Dining', 'Mexican restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-03-2019', 'Dining', 'Italian restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-03-2019', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-02-2019', 'Dining', 'Thai restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-02-2019', 'Dining', 'Japanese restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-02-2019', 'Dining', 'Korean restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-02-2019', 'Dining', 'French restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-02-2019', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-01-2019', 'Dining', 'German restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-01-2019', 'Dining', 'Spanish restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-01-2019', 'Dining', 'Mexican restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-01-2019', 'Dining', 'Italian restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-01-2019', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-12-2018', 'Dining', 'Thai restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-12-2018', 'Dining', 'Japanese restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-12-2018', 'Dining', 'Korean restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-12-2018', 'Dining', 'French restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-12-2018', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (31, 'want', '02-11-2018', 'Dining', 'German restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (32, 'want', '09-11-2018', 'Dining', 'Spanish restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (33, 'want', '16-11-2018', 'Dining', 'Mexican restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (34, 'want', '23-11-2018', 'Dining', 'Italian restaurant', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (100, 'want', '28-11-2018', 'Dining', 'Hotel buffet', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '01-06-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '08-06-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '15-06-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '22-06-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '29-06-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '01-05-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '08-05-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '15-05-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '22-05-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '29-05-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '01-04-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '08-04-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '15-04-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '22-04-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '29-04-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '01-03-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '08-03-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '15-03-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '22-03-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (41, 'need', '29-03-2019', 'Groceries', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-06-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-06-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-04-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-04-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-03-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-03-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-02-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-02-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-01-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-01-2019', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-12-2018', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-12-2018', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '01-11-2018', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '14-11-2018', 'Transport', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-06-2019', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-04-2019', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-03-2019', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-02-2019', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-01-2019', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-12-2018', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-11-2018', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-10-2018', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '10-09-2018', 'Utilities', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-06-2019', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-04-2019', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-03-2019', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-02-2019', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-01-2019', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-12-2018', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-11-2018', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-10-2018', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (60, 'need', '01-09-2018', 'Insurance', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-06-2019', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-04-2019', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-03-2019', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-02-2019', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-01-2019', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-12-2018', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-11-2018', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-10-2018', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (40, 'need', '27-09-2018', 'Telecommunications', 'mobile', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-04-2019', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-03-2019', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-02-2019', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-01-2019', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-12-2018', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-11-2018', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-10-2018', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (50, 'need', '01-09-2018', 'Telecommunications', 'broadband', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-06-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-05-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-04-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-03-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-02-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-01-2019', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-12-2018', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-11-2018', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-10-2018', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (100, 'want', '04-09-2018', 'Shopping', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '21-04-2019', 'Medical', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '21-01-2019', 'Medical', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '21-10-2018', 'Medical', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (150, 'need', '20-04-2019', 'Special Occasions', 'Andrew''s wedding', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (150, 'need', '20-02-2019', 'Special Occasions', 'Vanessa''s wedding', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (30, 'need', '21-04-2019', 'Special Occasions', 'Pima''s baby full month', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (30, 'need', '01-03-2019', 'Special Occasions', 'ET''s birthday gift', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (30, 'need', '19-04-2019', 'Special Occasions', 'Gabriel''s birthday gift', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (800, 'want', '31-03-2019', 'Holiday', 'Japan flight tickets', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (1200, 'want', '02-04-2019', 'Holiday', 'Accommodations', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (300, 'want', '14-10-2018', 'Holiday', 'Bangkok flight tickets', 1);
INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES (500, 'want', '16-10-2018', 'Holiday', 'Accommodations', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-04-2019', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-03-2019', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-02-2019', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-01-2019', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-12-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-11-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-10-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-09-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-08-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-07-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-06-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-05-2018', 'Taxes', 1);
INSERT INTO expenses (amount, need_want, date, category, user_id) VALUES (50, 'need', '04-04-2018', 'Taxes', 1);

-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (100, '0.05', current_date, 'savings account', 2);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '2.5', current_date, 'bond', 1);
-- INSERT INTO savings (amount, interest_rate, date, comments, user_id) VALUES (500, '5', current_date, 'stock', 1);

-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'allowance', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (500, current_date, 'angbao', 2);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (3000, current_date, 'salary', 1);
-- INSERT INTO income (amount, date, comments, user_id) VALUES (800, current_date, 'rental', 1);