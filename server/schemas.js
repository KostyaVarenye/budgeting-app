const db = require('./DBConnection');

// User schema
const createUserTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS User (
        uid INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `;
    await db.query(sql);
    console.log('User table created successfully');
  } catch (error) {
    console.error('Error creating User table:', error);
  }
};

// Budget schema
const createBudgetTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS Budget (
        bid INT PRIMARY KEY AUTO_INCREMENT,
        category_id INT NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        date DATE NOT NULL,
        FOREIGN KEY (category_id) REFERENCES Category (cid)
      )
    `;
    await db.query(sql);
    console.log('Budget table created successfully');
  } catch (error) {
    console.error('Error creating Budget table:', error);
  }
};

// Category schema
const createCategoryTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS Category (
        cid INT PRIMARY KEY AUTO_INCREMENT,
        cname VARCHAR(255) NOT NULL,
        uid INT NOT NULL,
        FOREIGN KEY (uid) REFERENCES User (uid)
      )
    `;
    await db.query(sql);
    console.log('Category table created successfully');
  } catch (error) {
    console.error('Error creating Category table:', error);
  }
};

// Transaction schema
const createTransactionTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS Transaction (
        tid INT PRIMARY KEY AUTO_INCREMENT,
        uid INT NOT NULL,
        cid INT NOT NULL,
        date DATE NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        description VARCHAR(255),
        FOREIGN KEY (uid) REFERENCES User (uid),
        FOREIGN KEY (cid) REFERENCES Category (cid)
      )
    `;
    await db.query(sql);
    console.log('Transaction table created successfully');
  } catch (error) {
    console.error('Error creating Transaction table:', error);
  }
};

// Call the functions to create the tables
createUserTable();
createBudgetTable();
createCategoryTable();
createTransactionTable();
