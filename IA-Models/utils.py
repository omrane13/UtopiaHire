# utils.py

import re
import fitz  # PyMuPDF
import streamlit as st

def preprocess_text(text):
    """A simple text cleaner."""
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_text_from_pdf(pdf_file):
    """Extracts text from an uploaded PDF file using PyMuPDF."""
    try:
        pdf_bytes = pdf_file.getvalue()
        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        text = "".join(page.get_text() for page in doc)
        doc.close()
        return text
    except Exception as e:
        st.error(f"Error reading PDF file: {e}")
        return None