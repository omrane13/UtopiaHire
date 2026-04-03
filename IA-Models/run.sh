#!/bin/bash

# Exit on any error
set -e

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
else
    echo "Virtual environment already exists."
fi

# Activate the environment
echo "Activating virtual environment..."
source venv/bin/activate

# Check if requirements.txt exists
if [ ! -f "requirements.txt" ]; then
    echo "Creating requirements.txt file..."
    echo -e "streamlit\nscikit-learn" > requirements.txt
fi

# Install required packages
echo "Installing dependencies..."
pip install -r requirements.txt

echo "✅ Environment setup complete!"