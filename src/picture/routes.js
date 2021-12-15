const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get("/", controller.getPictures);
router.get("/:id", controller.getPictureById);
router.post("/", controller.addStudent);

module.exports = router;
