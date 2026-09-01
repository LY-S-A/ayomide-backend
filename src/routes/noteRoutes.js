const express = require("express");

const {
    getNotes,
    createNote,
} = require("../controllers/noteController");

const router = express.Router();


/*
========================================
GET ALL NOTES
GET /api/notes
========================================
*/

router.get(
    "/",
    getNotes
);


/*
========================================
CREATE NOTE
POST /api/notes
========================================
*/

router.post(
    "/",
    createNote
);


module.exports = router;
