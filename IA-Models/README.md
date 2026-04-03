# CV Matcher: Step-by-Step Workflow

A Streamlit-based application that analyzes the compatibility between your CV and job descriptions using machine learning techniques. The app extracts text from PDF CVs, compares skills with job requirements, and provides detailed matching analysis.

## Features

- **PDF Text Extraction**: Upload your CV in PDF format and extract text automatically
- **Interactive Editing**: Review and edit extracted text before analysis
- **Skills Matching**: Compare your skills with job requirements using a comprehensive skills database
- **Similarity Analysis**: Calculate overall match percentage using TF-IDF vectorization and cosine similarity
- **Step-by-Step Workflow**: Guided process with clear navigation between steps
- **Actionable Insights**: Get specific recommendations for improving your CV

## Installation and Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### 1. Clone or Download the Project

```bash
# If using git
git clone <repository-url>
cd CSTSYP

# Or download and extract the project files to your desired directory
```

### 2. Create Virtual Environment

It's recommended to use a virtual environment to avoid conflicts with other Python projects.

#### On Linux/macOS:
```bash
# Create virtual environment
python3 -m venv cv_matcher_env

# Activate virtual environment
source cv_matcher_env/bin/activate
```

#### On Windows:
```bash
# Create virtual environment
python -m venv cv_matcher_env

# Activate virtual environment
cv_matcher_env\Scripts\activate
```

### 3. Install Dependencies

```bash
# Install required packages
pip install -r requirements.txt
```

**Note**: If you encounter any issues with the requirements.txt file, install packages individually:
```bash
pip install streamlit scikit-learn PyMuPDF
```

### 4. Verify Installation

Test that all dependencies are properly installed:
```bash
python -c "import streamlit, sklearn, fitz; print('All dependencies installed successfully!')"
```

## Running the Application

### Start the Application

```bash
streamlit run app.py
```

The application will automatically open in your default web browser at `http://localhost:8501`

### Alternative Run Method

If you have the `run.sh` script (make it executable first):
```bash
chmod +x run.sh
./run.sh
```

## Application Workflow

The CV Matcher follows a structured 4-step process:

### Step 1: Upload Your CV
- Click "Choose a PDF file" to upload your CV
- Supported format: PDF files only
- The app will automatically extract text from your PDF
- If extraction fails, it may indicate an image-based or corrupted PDF

### Step 2: Review and Edit CV Text
- Review the extracted text from your CV
- **Important**: Edit any OCR errors or missing information
- The text area allows you to make corrections before analysis
- Options:
  - **Confirm CV Text and Proceed**: Move to the next step
  - **Start Over**: Return to Step 1 to upload a different CV

### Step 3: Add Job Description and Analyze
- View your confirmed CV text in the expandable section
- Paste the complete job description in the text area
- **Tip**: Include the full job posting for better analysis accuracy
- Options:
  - **Analyze Match**: Process the comparison (requires job description)
  - **Go Back**: Return to Step 2 to edit CV text

### Step 4: View Analysis Results
The results page provides comprehensive insights:

#### Overall Match Score
- Percentage-based similarity score using TF-IDF and cosine similarity
- Visual progress bar for quick assessment

#### Skills Analysis Matrix
- **✅ Matched Skills**: Skills found in both your CV and job description
- **⚠️ Missing Skills**: Required skills not found in your CV
- Skills are identified from a comprehensive database of 50+ technical and soft skills

#### Improvement Suggestions
- Specific recommendations for CV enhancement
- Highlighted missing skills to focus on
- Success message if all required skills are matched

#### Navigation
- **Start New Analysis**: Reset the application to analyze a different CV/job combination

## Skills Database

The application recognizes skills across multiple categories:

- **Programming Languages**: Python, Java, C++, JavaScript, HTML, CSS, SQL, R, Bash
- **Machine Learning**: TensorFlow, PyTorch, Scikit-learn, Keras, OpenCV
- **Data Science**: Pandas, NumPy, Matplotlib, Seaborn, Plotly
- **Web Development**: React, Angular, Vue, Django, Flask, Node.js, FastAPI
- **Cloud & DevOps**: AWS, Azure, Google Cloud, Docker, Kubernetes, Git
- **Soft Skills**: Agile, Scrum, Communication, Leadership, Problem Solving
- **Specializations**: Machine Learning, NLP, Computer Vision, Data Engineering

## Tips for Best Results

1. **High-Quality PDFs**: Ensure your CV PDF has clear, readable text
2. **Complete Job Descriptions**: Paste the entire job posting for comprehensive analysis
3. **Review Extracted Text**: Always check Step 2 for any OCR errors
4. **Update Skills Database**: The app uses a predefined skills list; some specialized skills might not be recognized

## Troubleshooting

### Common Issues

**PDF extraction fails:**
- Ensure the PDF is text-based, not scanned images
- Try saving your CV as a new PDF file
- Check file permissions

**Low match scores:**
- Verify job description includes technical requirements
- Ensure your CV uses industry-standard terminology
- Check that extracted text captured all relevant content

**Missing skills not showing:**
- The app only recognizes skills in its database
- Some specialized or newer technologies might not be included

### Getting Help

If you encounter issues:
1. Check that all dependencies are properly installed
2. Ensure you're using Python 3.7+
3. Try restarting the Streamlit application
4. Check the terminal for error messages

## Technical Details

- **Framework**: Streamlit for web interface
- **Text Processing**: TF-IDF vectorization with scikit-learn
- **PDF Processing**: PyMuPDF (fitz) for text extraction
- **Similarity Calculation**: Cosine similarity between document vectors
- **Text Preprocessing**: Lowercase conversion, punctuation removal, whitespace normalization

## Development

To modify or extend the application:
- `app.py`: Main application file with all logic
- `requirements.txt`: Python dependencies
- `SKILLS_DB`: List of recognized skills (can be expanded)

---

**Note**: Remember to deactivate your virtual environment when done:
```bash
deactivate
```