#!/bin/bash

# Description: Given a text file file.txt, print just the 10th line of the file.

readNLine() {
    local n=$1       # Number of the line to read
    local inputfile=$2  # Input file name
    
    # Check if the file exists
    if [[ ! -f $inputfile ]]; then
        echo "File does not exist!"
        return 1
    fi
    
    # Use awk to print the n-th line and exit
    awk -v n="$n" 'NR==n {print; exit}' "$inputfile"
}

# Example usage
readNLine 10 './resources/text_file_1.txt'