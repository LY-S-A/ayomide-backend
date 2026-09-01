const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },

        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 500,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Notes",
    notesSchema
);
