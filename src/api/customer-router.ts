import express from 'express';
import mysql, {Pool} from "promise-mysql";

export const router = express.Router();
let datasource: Pool;

(async function initPool() {
    datasource = await mysql.createPool({
        host: 'localhost',
        port: 3306,
        database: 'dep10_pos',
        user: 'root',
        password: 'mysql'
    });
})();

/* get Customers */
router.get('/', async (req, res) => {
    let query = "%";
    if (req.query.q) {
        query = `%${req.query.q}%`
    }
    const resultSet = await datasource.query(`SELECT * FROM customer WHERE id LIKE ? OR name LIKE ? OR address LIKE ? OR contact LIKE ?`,
        new Array(4).fill(query));
    res.json(resultSet);
});