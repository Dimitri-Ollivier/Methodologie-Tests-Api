const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "pictures",
    password: "140501",
    port: 5432,
});

module.exports = pool;