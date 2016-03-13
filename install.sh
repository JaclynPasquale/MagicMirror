#!/bin/bash
SHOULD_EXIT=0;
hash python 2>/dev/null || { SHOULD_EXIT=1; echo >&2 "python is not installed. Follow the instructions at https://pip.pypa.io/en/stable/installing/ to install it."; } 
hash pip 2>/dev/null || { SHOULD_EXIT=1; echo >&2 "pip is not installed. Follow the instructions at https://pip.pypa.io/en/stable/installing/ to install it."; } 
hash chromium 2>/dev/null || { SHOULD_EXIT=1; echo >&2 "chromium is not installed. Follow the instructions at __ to install it."; }

if [ "$SHOULD_EXIT" = "1" ]; then
    echo "You did not have all the requirements. Please install.";
fi