const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./DBConnection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/createUser', async (req, res) => {
  try {
    const { username, password } = req.body;
    const sql = 'INSERT INTO User (username, password) VALUES (?, ?)';
    await db.query(sql, [username, password]);
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/createBudget', async (req, res) => {
  try {
    const { category_id, amount, date } = req.body;
    const sql = 'INSERT INTO Budget (category_id, amount, date) VALUES (?, ?, ?)';
    await db.query(sql, [category_id, amount, date]);
    res.status(200).json({ message: 'Budget created successfully' });
  } catch (error) {
    console.error('Error creating budget:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/createCategory', async (req, res) => {
  try {
    const { cname, uid } = req.body;
    const sql = 'INSERT INTO Category (cname, uid) VALUES (?, ?)';
    await db.query(sql, [cname, uid]);
    res.status(200).json({ message: 'Category created successfully' });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/createTransaction', async (req, res) => {
  try {
    const { uid, cid, date, amount, description } = req.body;
    const sql = 'INSERT INTO Transaction (uid, cid, date, amount, description) VALUES (?, ?, ?, ?, ?)';
    await db.query(sql, [uid, cid, date, amount, description]);
    res.status(200).json({ message: 'Transaction created successfully' });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
