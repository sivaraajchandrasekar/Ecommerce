const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

app.use(bodyparser.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL server....");
        createDatabaseAndTables();
    }
});

const createDatabaseAndTables = () => {
    db.query('CREATE DATABASE IF NOT EXISTS ecommerce', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Database 'ecommerce' created or already exists");
            db.query('USE ecommerce');
            db.query(`CREATE TABLE IF NOT EXISTS e_details (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255),
                password VARCHAR(255)
            )`, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Table 'e_details' created or already exists");
                }
            });

            db.query(`CREATE TABLE IF NOT EXISTS order_details (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255),
                payment VARCHAR(50),
                email VARCHAR(255),
                street VARCHAR(255),
                area VARCHAR(255),
                pincode VARCHAR(10),
                phoneno VARCHAR(15)
            )`, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Table 'order_details' created or already exists");
                }
            });
        }
    });
};
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const newUser = { username, password: hashedPassword };
    db.query('INSERT INTO e_details(username, password) values (?,?)', [username, hashedPassword], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error registering user');
        }
        console.log('User registered');
        res.status(201).send(req.body);
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM e_details WHERE username = ?', [username], async (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('Error logging in');
        }
        if (result.length === 0) {
            return res.status(401).send({ error: 'Invalid username or password' });
        }
        const validPassword = await bcrypt.compare(password, result[0].password);
        if (!validPassword) {
            return res.status(401).send({ error: 'Invalid username or password' });
        }
        const accessToken = jwt.sign({ username: username }, process.env.ACCESS_SECRET_TOKEN);
        res.status(200).send(result);
    });
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;


app.post("/placeorder", async (req, res) => {
    const { name, payment, email, street, area, pincode, phoneno } = req.body;
    db.query('INSERT INTO order_details (name, payment, email, street, area, pincode, phoneno) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, payment, email, street, area, pincode, phoneno], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Error registering user');
            }
            console.log('Order registered');
            res.status(201).json({ message: "Order stored successfully" });
        });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});