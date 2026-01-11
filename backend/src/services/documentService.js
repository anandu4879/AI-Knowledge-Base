import fs from "fs";
import pdf from "pdf-parse-fork"; // This fork fixes the ESM export issues

export const extractTextFromPDF = async (filePath) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  return data.text;
};