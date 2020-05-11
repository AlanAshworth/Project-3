const router = require("express").Router();
const configController = require("../../controllers/configController");

// Matches with "/api/config"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// router.route("/", (req, res) => {
//   res.json({
//     success: true,
//     currentPort: PORT,
//   });
// });

router.route("/").get(configController.getTest);

module.exports = router;
