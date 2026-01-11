import Document from "../models/Document.js";
import { extractTextFromPDF } from "../services/documentService.js";

export const uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const text = await extractTextFromPDF(req.file.path);

    const document = await Document.create({
      user: req.user._id,
      filename: req.file.filename,
      originalName: req.file.originalname,
      text,
    });
55
    res.status(201).json({
      message: "Document uploaded successfully",
      documentId: document._id,
    });
  } catch (error) {
    next(error);
  }
};
