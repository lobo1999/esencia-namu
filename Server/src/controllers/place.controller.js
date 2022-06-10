import { restart } from "nodemon";
import { getConnection } from "../database/connection"

export const getPlaces = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM Place');
    res.json(result.recordset);
}

export const createNewPlace = (req, res) => {
    restart.json('new place')
}


