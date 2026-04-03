# core_functions.py

import spacy
import streamlit as st
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from spacy.pipeline import EntityRuler

from utils import preprocess_text
from constants import CUSTOM_SKILL_PATTERNS

# Use st.cache_resource to load the model only once
@st.cache_resource
def load_spacy_model():
    """Loads the spaCy model and adds a custom EntityRuler."""
    nlp = spacy.load("en_core_web_sm")
    ruler = nlp.add_pipe("entity_ruler", before="ner")
    
    # Create patterns for the EntityRuler
    patterns = [{"label": "SKILL", "pattern": skill} for skill in CUSTOM_SKILL_PATTERNS]
    ruler.add_patterns(patterns)
    
    return nlp

nlp = load_spacy_model()

def extract_skills_with_model(text):
    """Extracts skills from text using our spaCy NER model."""
    doc = nlp(text)
    skills = set()
    
    # Predefined entity labels that often represent skills or technologies
    skill_labels = ["SKILL", "PRODUCT", "ORG", "TECHNOLOGY"]
    
    for ent in doc.ents:
        if ent.label_ in skill_labels:
            skills.add(ent.text.lower())
            
    return skills

def find_skills_in_cv(cv_text, required_skills):
    """Scans the CV for the presence of the required skills."""
    found_skills = set()
    preprocessed_cv = preprocess_text(cv_text)
    for skill in required_skills:
        if skill in preprocessed_cv:
            found_skills.add(skill)
    return found_skills

def calculate_similarity(cv_text, job_desc_text):
    """Calculates the TF-IDF cosine similarity."""
    documents = [cv_text, job_desc_text]
    try:
        vectorizer = TfidfVectorizer(stop_words='english')
        tfidf_matrix = vectorizer.fit_transform(documents)
        return cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
    except ValueError:
        return 0.0