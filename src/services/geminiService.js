import axios from 'axios';
import * as pdfjs from 'pdfjs-dist';

// Set the worker source for PDF.js
if (typeof window !== 'undefined') {
  // Only set worker in browser environment
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

// Gemini API service for document Q&A
const GEMINI_API_URL = "https://generativelanguage.googleapis.com";
const API_KEY = "AIzaSyBLO8TxdXEUrrT9J15zHaWUMn9KaiBIQnA";
const MODEL = "gemini-1.5-flash"; // This model is confirmed working

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

    // Handle case with no documents - treat as a general legal question
    if (!documents || !Array.isArray(documents) || documents.length === 0) {
      console.log('No documents provided, treating as general legal query');
      
      // Check if this is a greeting or casual conversation
      const lowercaseQuery = query.toLowerCase().trim();
      const isGreeting = lowercaseQuery.includes('hello') || 
                        lowercaseQuery.includes('hi') || 
                        lowercaseQuery.includes('hy') || 
                        lowercaseQuery.includes('hey') || 
                        lowercaseQuery.includes('greetings') ||
                        lowercaseQuery.startsWith('good morning') || 
                        lowercaseQuery.startsWith('good afternoon') || 
                        lowercaseQuery.startsWith('good evening') ||
                        lowercaseQuery === 'thanks' ||
                        lowercaseQuery.includes('thank you') ||
                        lowercaseQuery.includes('goodbye') ||
                        lowercaseQuery.includes('bye');
      
      const isFarewell = lowercaseQuery.includes('goodbye') || 
                       lowercaseQuery.includes('bye') || 
                       lowercaseQuery.includes('see you') ||
                       lowercaseQuery.includes('farewell') ||
                       lowercaseQuery.includes('thank you');
      
      // Create appropriate prompt for the query type
      let prompt;
      
      if (isGreeting) {
        prompt = `
          The user has sent a greeting message: "${query}".
          Please respond with a professional, warm, and helpful greeting as Wakeel Legal Assistant.
          Keep the response brief, friendly, and offer to help with legal matters.
        `;
      } else if (isFarewell) {
        prompt = `
          The user has sent a farewell message: "${query}".
          Please respond with a professional, warm, and helpful goodbye message as Wakeel Legal Assistant.
          Keep the response brief and friendly.
        `;
      } else {
        // General legal question
        prompt = `
          You are Wakeel Legal Assistant, a professional AI assistant specialized in legal matters.
          
          User Query: ${query}
          
          Please provide a helpful and accurate response to this legal question. If this is not a legal question,
          explain that you're a legal assistant and offer to help with legal matters. Your response should be:
          
          1. Professional and informative
          2. Based on general legal knowledge
          3. Clearly indicating that this is general information, not specific legal advice
          4. Encouraging the user to consult with a qualified attorney for specific legal advice
          
          Make your response concise but comprehensive for this query.
        `;
      }
      
      console.log(`Calling Gemini API with model: ${MODEL} for general query`);
      
      const response = await axios.post(
        `${GEMINI_API_URL}/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
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
            maxOutputTokens: 2048
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 30000 // 30 seconds timeout for the API call
        }
      );
      
      console.log("Gemini API response received", response.status);
      
      // Handle different response formats
      if (response.data) {
        // Handle v1beta API response format
        if (response.data.candidates && response.data.candidates.length > 0) {
          const candidate = response.data.candidates[0];
          
          if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
            return candidate.content.parts[0].text || "No content returned from AI model.";
          }
        }
        
        // Alternative response format
        if (response.data.text) {
          return response.data.text;
        }
        
        console.error('Unexpected Gemini API response structure:', JSON.stringify(response.data));
        return 'I apologize, but I encountered an issue processing your request. Please try again.';
      } else {
        console.error('Empty response from Gemini API');
        return 'I apologize, but I encountered an issue processing your request. Please try again later.';
      }
    }

    // Format documents for the Gemini model and validate content
    const formattedDocs = documents.map(doc => {
      // Ensure we have content to analyze
      if (!doc.content || typeof doc.content !== 'string' || doc.content.trim().length === 0) {
        console.warn(`Document "${doc.name}" has no valid content`);
        return {
          text: `[Document: ${doc.name || 'Unnamed document'}]\n\nThis document appears to have no extractable content or the content extraction failed.`,
          name: doc.name || 'Unnamed document'
        };
      }

      // If content is too large, truncate it to avoid token limits
      let processedContent = doc.content;
      // Reduced content length to improve processing speed and reliability
      const MAX_CONTENT_LENGTH = 30000; // Reduced from 100,000 to 30,000 for better reliability
      if (processedContent.length > MAX_CONTENT_LENGTH) {
        console.warn(`Document "${doc.name}" content truncated from ${processedContent.length} to ${MAX_CONTENT_LENGTH} characters`);
        processedContent = processedContent.substring(0, MAX_CONTENT_LENGTH) + 
          `\n\n[Note: This document was truncated as it exceeds the maximum allowed size. Only the first ${MAX_CONTENT_LENGTH} characters are shown.]`;
      }

      return {
        text: processedContent,
        name: doc.name || 'Unnamed document'
      };
    });

    // Create prompt including document context
    const prompt = `
      I need you to help analyze these legal documents and answer questions about them.
      
      Documents:
      ${formattedDocs.map((doc, i) => `[Document ${i+1}: ${doc.name}]\n${doc.text}`).join('\n\n')}
      
      User Query: ${query}
      
      Please provide a comprehensive legal analysis response based on the document content. If the documents don't contain information relevant to the query, acknowledge that and provide general legal information if possible.
      
      Important: Never state that you cannot access the document or that the document content is unavailable. The document content has been provided to you in this prompt. Analyze the content that is available to you, even if it appears to be incomplete or truncated.
    `;

    console.log(`Calling Gemini API with model: ${MODEL} and ${formattedDocs.length} documents`);
    // Log the first 100 characters of each document for debugging
    formattedDocs.forEach((doc, i) => {
      console.log(`Document ${i+1} (${doc.name}): ${doc.text.substring(0, 100)}...`);
    });

    const response = await axios.post(
      `${GEMINI_API_URL}/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
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
          maxOutputTokens: 2048
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 seconds timeout for the API call
      }
    );

    console.log("Gemini API response received", response.status);
    
    // Handle different response formats
    if (response.data) {
      console.log("Response data structure:", Object.keys(response.data));
      
      // Handle v1beta API response format
      if (response.data.candidates && response.data.candidates.length > 0) {
        const candidate = response.data.candidates[0];
        
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          return candidate.content.parts[0].text || "No content returned from AI model.";
        }
      }
      
      // Alternative response format
      if (response.data.text) {
        return response.data.text;
      }
      
      // If we get here, we couldn't extract the text from the response
      console.error('Unexpected Gemini API response structure:', JSON.stringify(response.data));
      return 'Error: Unable to process document with AI. Unexpected response format.';
    } else {
      console.error('Empty response from Gemini API');
      return 'Error: Empty response from AI service.';
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error.response?.data || error.message);
    
    // Check for timeout errors
    if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
      return 'Error: The document analysis timed out. The document may be too complex or large for processing. Please try a smaller document or a more specific query.';
    }
    
    // Check for rate limiting
    if (error.response?.status === 429 || (error.response?.data?.error?.code === 429)) {
      return 'Error: API rate limit exceeded. Please try again in a few minutes.';
    }
    
    // Check for API key errors
    if (error.response?.status === 401 || error.response?.status === 403) {
      return 'Error: API authentication failed. Please check your API key configuration.';
    }
    
    // General error
    const errorDetails = error.response?.data?.error?.message || error.message || "Unknown error";
    return `Error analyzing document: ${errorDetails}`;
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
    
    // Add more detailed logging
    console.log(`File size: ${(file.size / 1024).toFixed(2)}KB, starting PDF parsing`);
    
    // Create a controlled extraction function with proper error handling
    const extractWithTimeout = async () => {
      try {
        // Load the PDF document
        const loadingTask = pdfjs.getDocument(new Uint8Array(arrayBuffer));
        
        // Add event listeners for better debugging
        loadingTask.onProgress = (progress) => {
          console.log(`PDF loading progress: ${Math.round((progress.loaded / progress.total) * 100)}%`);
        };
        
        // Set a reasonable timeout
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => {
            try {
              loadingTask.destroy();
            } catch (destroyError) {
              console.warn('Error destroying PDF loading task:', destroyError);
            }
            reject(new Error('PDF loading timeout - document may be too large or complex'));
          }, 20000);
        });
        
        // Race between loading and timeout
        const pdf = await Promise.race([loadingTask.promise, timeoutPromise]);
        console.log(`PDF loaded successfully with ${pdf.numPages} pages`);
        
        // Extract text from each page with a simpler approach
        let fullText = `PDF Document: ${file.name}\n\n`;
        
        // Process fewer pages for better reliability
        const maxPages = Math.min(pdf.numPages, 20);
        let extractedContentLength = 0;
        let failedPages = 0;
        
        for (let i = 1; i <= maxPages; i++) {
          try {
            console.log(`Extracting text from page ${i}/${maxPages}...`);
            
            // Get the page with a shorter timeout
            const pageTimeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error(`Page ${i} extraction timed out`)), 3000);
            });
            
            const page = await Promise.race([pdf.getPage(i), pageTimeoutPromise]);
            
            // Get text content with timeout
            const textTimeoutPromise = new Promise((_, reject) => {
              setTimeout(() => reject(new Error(`Text content extraction timed out for page ${i}`)), 3000);
            });
            
            const textContent = await Promise.race([page.getTextContent(), textTimeoutPromise]);
            
            // Extract text
            const pageText = textContent.items.map(item => item.str).join(' ');
            
            // Only add non-empty content
            if (pageText.trim().length > 0) {
              extractedContentLength += pageText.length;
              fullText += `--- Page ${i} ---\n${pageText}\n\n`;
            } else {
              fullText += `--- Page ${i} ---\n[This page appears to be empty or contains only images]\n\n`;
              failedPages++;
            }
            
            // If we've already got plenty of content, we can stop
            if (extractedContentLength > 15000 && i >= 5) {
              fullText += `[Note: Document processing stopped at page ${i} as sufficient content was extracted.]\n`;
              break;
            }
          } catch (pageError) {
            console.error(`Error extracting content from page ${i}:`, pageError);
            fullText += `--- Page ${i} ---\n[Error extracting content: ${pageError.message || 'Unknown page extraction error'}]\n\n`;
            failedPages++;
            
            // If too many consecutive pages fail, stop processing
            if (failedPages > 3 && failedPages === i) {
              fullText += `[Note: Document processing stopped due to multiple consecutive extraction failures.]\n`;
              break;
            }
          }
        }
        
        // Add summary information
        if (pdf.numPages > maxPages) {
          fullText += `[Note: This document has ${pdf.numPages} pages, but only processed ${maxPages} pages maximum.]\n`;
        }
        
        if (failedPages > 0) {
          fullText += `[Note: Could not extract content from ${failedPages} out of ${maxPages} processed pages.]\n`;
        }
        
        if (extractedContentLength === 0) {
          fullText += `\n[Warning: No text content could be extracted from this PDF. It may contain only images or be protected.]\n`;
        } else {
          fullText += `\n[Successfully extracted ${extractedContentLength} characters of text content from the document.]\n`;
        }
        
        return fullText;
      } catch (innerError) {
        console.error('Error in PDF extraction process:', innerError);
        throw innerError;
      }
    };
    
    // Execute the extraction with overall timeout
    const result = await Promise.race([
      extractWithTimeout(),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Overall PDF extraction process timed out')), 25000))
    ]);
    
    return result;
  } catch (error) {
    // Enhance error logging with more context
    console.error('PDF extraction error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      file: file ? { name: file.name, type: file.type, size: file.size } : 'No file info'
    });
    
    // Provide a more descriptive error message
    throw new Error(`PDF extraction failed: ${error.message || 'Unknown error during PDF processing'}`);
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

Extraction timed out after 30 seconds. The file may be too large or complex.
- Filename: ${file.name}
- File type: ${file.type || 'unknown'}
- File size: ${(file.size / 1024).toFixed(2)} KB

Please try again with a smaller or simpler file, or try converting it to a more accessible format.`);
    }, 30000); // Reduced from 60 to 30 seconds timeout

    try {
      console.log(`Starting extraction for ${file.name} (${file.type})`);
      
      // Validate the file object
      if (!file) {
        clearTimeout(timeout);
        reject(new Error('Invalid file object provided'));
        return;
      }
      
      // Check file size first
      const MAX_FILE_SIZE_MB = 10; // Maximum file size in MB
      const fileSizeMB = file.size / (1024 * 1024);
      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        clearTimeout(timeout);
        resolve(`[Large Document: ${file.name}]
        
This document is ${fileSizeMB.toFixed(2)}MB, which exceeds our recommended limit of ${MAX_FILE_SIZE_MB}MB.
Processing very large files can cause timeouts or performance issues.

- Filename: ${file.name}
- File type: ${file.type || 'unknown'}
- File size: ${fileSizeMB.toFixed(2)} MB

Suggestions:
1. Try splitting the document into smaller parts
2. Convert it to a more efficient format
3. Compress the document to reduce its size`);
        return;
      }
      
      // Handle text files
      if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (e) => {
          clearTimeout(timeout);
          const content = e.target.result || '';
          if (content.trim().length === 0) {
            resolve(`[Empty Text File: ${file.name}]

This text file appears to be empty or contains only whitespace.
- Filename: ${file.name}
- File size: ${(file.size / 1024).toFixed(2)} KB`);
          } else {
            resolve(content);
          }
        };
        reader.onerror = (e) => {
          clearTimeout(timeout);
          console.error('Failed to read text file:', e);
          reject(new Error(`Failed to read text file: ${e.message || 'Unknown error'}`));
        };
        reader.readAsText(file);
      } 
      // Handle PDF files
      else if (file.type === 'application/pdf') {
        try {
          const pdfText = await extractPdfText(file);
          clearTimeout(timeout);
          
          // Check if meaningful content was extracted
          const contentLength = pdfText.length;
          if (contentLength < 100) {
            resolve(`[PDF Document: ${file.name}]
          
This PDF document appears to contain very little text content (${contentLength} characters).
It may consist primarily of scanned images or non-extractable content.

- Filename: ${file.name}
- File size: ${(file.size / 1024).toFixed(2)} KB
- Pages: Unknown (extraction failed)

To analyze this document properly, you might need to:
1. Use OCR software to extract text from images
2. Convert the PDF to a text-based format
3. Ensure the PDF is not encrypted or password-protected`);
          } else {
            resolve(pdfText);
          }
        } catch (pdfError) {
          clearTimeout(timeout);
          console.error('PDF extraction error:', pdfError);
          
          // Check for specific error types
          if (pdfError.message.includes('timeout')) {
            resolve(`[PDF Document: ${file.name}]
            
PDF processing timed out. This document is too complex or large for real-time analysis.

- Filename: ${file.name}
- File size: ${(file.size / 1024).toFixed(2)} KB

Suggestions:
1. Try a smaller PDF document
2. Convert this PDF to a simpler format
3. Try extracting and analyzing specific pages rather than the entire document`);
          } else {
            resolve(`[PDF Document: ${file.name}]
            
Unable to extract text content: ${pdfError.message}

This is a PDF document with filename ${file.name} and size ${(file.size / 1024).toFixed(2)} KB.

The system encountered an error while processing this PDF:
- Error type: ${pdfError.name || 'Unknown'}
- Error message: ${pdfError.message || 'No error details available'}

This could be due to:
1. The PDF may be encrypted or password-protected
2. The PDF format may be non-standard or corrupted
3. The PDF may contain only scanned images without text layers`);
          }
        }
      } 
      // Handle Word documents (placeholder, would use mammoth.js in production)
      else if (file.type.includes('word') || file.type.includes('document')) {
        clearTimeout(timeout);
        resolve(`[Word Document: ${file.name}]
        
This is a Word document with filename ${file.name} and size ${(file.size / 1024).toFixed(2)} KB.

For demonstration purposes, this placeholder text will be analyzed by Gemini AI.
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

Content extraction support would need to be added specifically for this file type.

The Legal Assistant can analyze the following document types:
- PDF documents (.pdf)
- Text files (.txt)
- Word documents (.doc, .docx) - limited support

For best results, consider converting this document to one of the supported formats.`);
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