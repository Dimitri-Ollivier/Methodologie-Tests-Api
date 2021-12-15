const pool = require("../../db");
const queries = require('./queries');

const getPictures = (req, res) => {
    pool.query(queries.getPictures, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const getPictureById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getPictureById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const addStudent = (req, res) => {
    const { name, picture } = req.body;
}

module.exports = {
    getPictures,
    getPictureById,
    addStudent,
};