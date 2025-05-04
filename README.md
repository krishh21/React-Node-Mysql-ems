## 🚀 Getting Started

### 📁 Project Structure

- `client/` – React frontend
- `server/` – Node.js backend with MySQL

### 📦 Installation

Make sure you have **Node.js**, **npm**, and **MySQL** installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/krishh21/React-Node-Mysql-ems.git
   cd React-Node-Mysql-ems

        cd client
        npm install
        cd ../server
        npm install


Running the Application
🖥 Frontend (React)

        cd client
        npm start


Backend (Node.js + Express)

     cd server
     npm run start
     # or (if using nodemon)
     npx nodemon index.js


-- Create database
CREATE DATABASE  ems;
USE ems;

-- Admin table
CREATE TABLE  admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insert default admin (optional)
INSERT INTO admin (email, password) VALUES ('admin@gmail.com', 'admin');

-- Category table
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Employee table
 CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address TEXT,
  salary DECIMAL(10, 2),
  image VARCHAR(255),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);


"C:\Users\M S I\Downloads\React ems.png"






