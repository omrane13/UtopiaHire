# app.py

import streamlit as st

from utils import extract_text_from_pdf
from core_functions import (
    calculate_similarity,
    extract_skills_with_model,
    find_skills_in_cv
)

st.set_page_config(page_title="AI CV Analyzer", page_icon="🤖")
st.title("AI-Powered CV Analyzer")

# Initialize session state
if 'current_step' not in st.session_state:
    st.session_state.current_step = 1
if 'cv_text' not in st.session_state:
    st.session_state.cv_text = ""
if 'jd_text' not in st.session_state:
    st.session_state.jd_text = ""

# --- STEP 1: CV UPLOAD AND CONFIRMATION ---
if st.session_state.current_step == 1:
    st.header("Step 1: Upload and Confirm Your CV")
    
    uploaded_file = st.file_uploader("Upload your CV in PDF format", type="pdf")
    
    if uploaded_file:
        extracted_text = extract_text_from_pdf(uploaded_file)
        if extracted_text:
            st.session_state.cv_text = extracted_text

    st.session_state.cv_text = st.text_area(
        "Review and edit the extracted CV text:",
        value=st.session_state.cv_text,
        height=300
    )

    if st.button("Confirm CV and Proceed to Step 2", disabled=not st.session_state.cv_text):
        st.session_state.current_step = 2
        st.rerun()

# --- STEP 2: JOB DESCRIPTION INPUT ---
elif st.session_state.current_step == 2:
    st.header("Step 2: Paste the Job Description")
    
    with st.expander("View Your Confirmed CV"):
        st.text(st.session_state.cv_text[:500] + "...") # Show a preview

    st.session_state.jd_text = st.text_area(
        "Paste the full job description here:",
        height=300
    )

    col1, col2 = st.columns([0.2, 1])
    with col1:
        if st.button("⬅️ Back"):
            st.session_state.current_step = 1
            st.rerun()
    with col2:
        if st.button("Analyze ✨", disabled=not st.session_state.jd_text):
            st.session_state.current_step = 3
            st.rerun()

# --- STEP 3: ANALYSIS AND RESULTS ---
elif st.session_state.current_step == 3:
    st.header("Step 3: Analysis Results")

    with st.spinner("AI is analyzing your documents..."):
        # Perform all analyses
        similarity_score = calculate_similarity(st.session_state.cv_text, st.session_state.jd_text)
        required_skills = extract_skills_with_model(st.session_state.jd_text)
        cv_skills = find_skills_in_cv(st.session_state.cv_text, required_skills)
        missing_skills = required_skills - cv_skills

    # Display results
    st.subheader(f"Overall Match Score: {similarity_score*100:.2f}%")
    st.progress(int(similarity_score * 100))

    st.divider()
    st.subheader("🤖 AI-Extracted Skill Analysis")

    if not required_skills:
        st.warning("The AI could not extract specific skills from this job description. The description might be too generic.")
    else:
        col1, col2 = st.columns(2)
        with col1:
            st.markdown("#### ✅ Matched Skills in Your CV")
            if cv_skills:
                for skill in sorted(list(cv_skills)):
                    st.write(f"- {skill.title()}")
            else:
                st.info("No direct matches for the required skills were found in your CV.")
        with col2:
            st.markdown("#### ⚠️ Missing Skills")
            if missing_skills:
                for skill in sorted(list(missing_skills)):
                    st.write(f"- {skill.title()}")
            else:
                st.success("Great news! Your CV seems to cover all identified skills.")

    if st.button("🔄 Start New Analysis"):
        for key in list(st.session_state.keys()):
            del st.session_state[key]
        st.rerun()