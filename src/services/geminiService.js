import axios from 'axios';
import * as pdfjs from 'pdfjs-dist';

// Set the worker source for PDF.js
if (typeof window !== 'undefined') {
  // Only set worker in browser environment
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

// Gemini API service for document Q&A
const GEMINI_API_URL = process.env.GEMINI_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

/**
 * Analyzes document content with Gemini and processes user queries
 * @param {string} query - User's question about the document
 * @param {Array} documents - Array of document objects with content and metadata
 * @returns {Promise<string>} - AI response
 */
export const analyzeDocumentWithGemini = async (query, documents) => {
  try {
    if (!API_KEY) {
      console.error('API key is missing');
      return 'Error: AI service is not properly configured.';
    }

    // Format documents for the Gemini model
    const formattedDocs = documents.map(doc => ({
      text: doc.content || 'No content available',
      name: doc.name || 'Unnamed document'
    }));

    // Create prompt including document context
    const prompt = `
      I need you to help analyze these documents and answer questions about them.
      
      Documents:
      ${formattedDocs.map((doc, i) => `[Document ${i+1}: ${doc.name}]\n${doc.text}`).join('\n\n')}
      
      User Query: ${query}
      
      Please provide a comprehensive response based on the document content. If the documents don't contain information relevant to the query, acknowledge that and provide general information if possible.
    `;

    // Call Gemini API 
    const response = await axios.post(
      `${GEMINI_API_URL}/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: prompt }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 2048,
        }
      }
    );

    // Extract and return the response text
    if (response.data && 
        response.data.candidates && 
        response.data.candidates[0] && 
        response.data.candidates[0].content &&
        response.data.candidates[0].content.parts &&
        response.data.candidates[0].content.parts[0]) {
      return response.data.candidates[0].content.parts[0].text;
    } else {
      console.error('Unexpected Gemini API response structure:', response.data);
      return 'Error: Unable to process document with AI.';
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error.response?.data || error.message);
    return `Error analyzing document: ${error.message}`;
  }
};

/**
 * Extract text from a PDF file using PDF.js
 * @param {File} file - The PDF file
 * @returns {Promise<string>} - Extracted text content
 */
const extractPdfText = async (file) => {
  try {
    console.log('Extracting PDF text from:', file.name);
    
    // Convert file to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();
    
    // Load the PDF document
    const loadingTask = pdfjs.getDocument(new Uint8Array(arrayBuffer));
    const pdf = await loadingTask.promise;
    
    console.log(`PDF loaded with ${pdf.numPages} pages`);
    
    // Extract text from each page
    let fullText = `PDF Document: ${file.name}\n\n`;
    
    // Process all pages up to a reasonable limit (e.g., 50 pages)
    const maxPages = Math.min(pdf.numPages, 50);
    
    for (let i = 1; i <= maxPages; i++) {
      try {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        
        fullText += `--- Page ${i} ---\n${pageText}\n\n`;
      } catch (pageError) {
        console.error(`Error extracting content from page ${i}:`, pageError);
        fullText += `--- Page ${i} ---\n[Error extracting content: ${pageError.message}]\n\n`;
      }
    }
    
    if (pdf.numPages > maxPages) {
      fullText += `[Note: This document has ${pdf.numPages} pages, but only the first ${maxPages} were processed.]\n`;
    }
    
    console.log(`Successfully extracted text from PDF, length: ${fullText.length} characters`);
    return fullText;
  } catch (error) {
    console.error('PDF extraction error:', error);
    throw new Error(`PDF extraction failed: ${error.message}`);
  }
};

/**
 * Extract text content from a file
 * @param {File} file - The uploaded file
 * @returns {Promise<string>} - Text content of the file
 */
export const extractTextFromFile = async (file) => {
  return new Promise(async (resolve, reject) => {
    const timeout = setTimeout(() => {
      console.warn(`Extraction timeout for file: ${file.name}`);
      resolve(`[Document: ${file.name}]

Extraction timed out. Please try again or check the file format.`);
    }, 60000); // 60 seconds timeout

    try {
      console.log(`Starting extraction for ${file.name} (${file.type})`);
      
      // Handle text files
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
          clearTimeout(timeout);
          resolve(e.target.result);
        };
        reader.onerror = (e) => {
          clearTimeout(timeout);
          console.error('Failed to read text file:', e);
          reject(new Error('Failed to read text file'));
        };
        reader.readAsText(file);
      } 
      // Handle PDF files
      else if (file.type === 'application/pdf') {
        try {
          const pdfText = await extractPdfText(file);
          clearTimeout(timeout);
          resolve(pdfText);
        } catch (pdfError) {
          clearTimeout(timeout);
          console.error('PDF extraction error:', pdfError);
          resolve(`[PDF Document: ${file.name}]
          
Unable to extract text content: ${pdfError.message}

This is a PDF document with filename ${file.name} and size ${(file.size / 1024).toFixed(2)} KB.`);
        }
      } 
      // Handle Word documents (placeholder, would use mammoth.js in production)
      else if (file.type.includes('word') || file.type.includes('document')) {
        clearTimeout(timeout);
        resolve(`[Word Document: ${file.name}]
        
This is a Word document with filename ${file.name} and size ${(file.size / 1024).toFixed(2)} KB.

For demonstration purposes, this placeholder text will be analyzed by Gemini API.
In a production environment, actual text extraction from the Word document would be implemented.

The document would typically contain:
- Formatted text content
- Document structure
- Any tables or embedded elements

For real implementation, integrate mammoth.js or similar Word document extraction libraries.`);
      } 
      // Other file types
      else {
        clearTimeout(timeout);
        resolve(`[Document: ${file.name}]
        
This is a document of type "${file.type}" with filename ${file.name} and size ${(file.size / 1024).toFixed(2)} KB.

Content extraction support would need to be added specifically for this file type.`);
      }
    } catch (error) {
      clearTimeout(timeout);
      console.error('Error in extractTextFromFile:', error);
      reject(error);
    }
  });
};

export default {
  analyzeDocumentWithGemini,
  extractTextFromFile
}; 