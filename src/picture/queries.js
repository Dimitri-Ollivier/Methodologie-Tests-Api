const getPictures = "SELECT * FROM pictures";
const getPictureById = "SELECT * FROM pictures WHERE id = $1";

module.exports = {
    getPictures,
    getPictureById,
};