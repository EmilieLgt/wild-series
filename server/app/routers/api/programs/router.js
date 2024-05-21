const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const { browse } = require("../../../controllers/programsActions");

// Route to get a list of items
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
