const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const { browse, read } = require("../../../controllers/programsActions");

// Route to get a list of items
router.get("/", browse);
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
