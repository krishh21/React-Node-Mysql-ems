import mysql from 'mysql';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Omsai@123",
    database: "ems"
});

con.connect(function(err) {
    if (err) {
        console.error("❌ Connection error:", err.message);  // ← real error here
    } else {
        console.log("✅ Connected to MySQL");
    }
});

export default con;
