import Note from "../models/Notes.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error from getAllNotes controller:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log("Error from getNoteById controller:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const createNote = (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    newNote.save();

    res.status(201).json({ message: "Note created successfully", note: newNote });
  } catch (error) {
    console.log("Error from createNote controller:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote =  await Note.findByIdAndUpdate(id, { title, content });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.log("Error from updateNote controller:", error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    
  }
};

