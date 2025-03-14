import { extractTextFromFile } from './geminiService';

// This script would be used in a Node.js environment to test PDF extraction
// In a browser environment, you would use this in response to a file input change

/**
 * Test function to simulate PDF extraction from a file input
 * In a real application, you would get the file from an input element
 * @param {File} file - The file object from an input element
 */
async function testPdfExtraction(file) {
  try {
    console.log(`Starting PDF extraction test for: ${file.name}`);
    
    // Extract text from the PDF
    const extractedText = await extractTextFromFile(file);
    
    console.log("Extraction successful!");
    console.log(`Extracted ${extractedText.length} characters of text.`);
    console.log("First 500 characters of extracted content:");
    console.log(extractedText.substring(0, 500) + "...");
    
    return extractedText;
  } catch (error) {
    console.error("PDF extraction test failed:", error);
    throw error;
  }
}

export { testPdfExtraction }; 