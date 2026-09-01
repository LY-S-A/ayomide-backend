const Notes = require("../models/Note");


/*
========================================
GET ALL NOTES
========================================
*/

const getNotes = async (req, res) => {
    try {

        const notes = await Notes.find()
            .sort({ createdAt: -1 })
            .lean();

        res.status(200).json({
            success: true,
            notes,
        });

    } catch (error) {

        console.error(
            "Get notes error:",
            error
        );

        res.status(500).json({
            success: false,
            message: "Failed to load notes.",
        });
    }
};


/*
========================================
CREATE NOTE
========================================
*/

const createNote = async (req, res) => {
    try {

        const name =
            req.body.name?.trim();

        const message =
            req.body.message?.trim();


        /*
        ================================
        VALIDATION
        ================================
        */

        if (!name || !message) {

            return res.status(400).json({
                success: false,
                message:
                    "Name and message are required.",
            });

        }


        if (name.length > 50) {

            return res.status(400).json({
                success: false,
                message:
                    "Name cannot exceed 50 characters.",
            });

        }


        if (message.length > 500) {

            return res.status(400).json({
                success: false,
                message:
                    "Message cannot exceed 500 characters.",
            });

        }


        /*
        ================================
        CREATE NOTE
        ================================
        */

        const note = await Notes.create({
            name,
            message,
        });


        res.status(201).json({
            success: true,
            message:
                "Note added successfully.",
            note,
        });

    } catch (error) {

        console.error(
            "Create note error:",
            error
        );

        res.status(500).json({
            success: false,
            message:
                "Failed to add note.",
        });
    }
};


module.exports = {
    getNotes,
    createNote,
};
