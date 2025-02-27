# Base64 Converter Extension

## Overview

The Base64 Converter Extension is a browser extension that allows users to easily convert files, text, and URLs to and from Base64 encoding. This tool is useful for developers and anyone who needs to encode or decode Base64 data.

## Features

- **File to Base64**: Convert a file to a Base64 string.
- **Base64 to File**: Decode a Base64 string and download it as a file.
- **Text to Base64**: Encode text to a Base64 string.
- **Base64 to Text**: Decode a Base64 string to text.
- **Text to URL**: Encode text to a URL-encoded string.
- **URL to Text**: Decode a URL-encoded string to text.

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/SharshenovJR/Base64ConverterExtension.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Base64ConverterExtension
    ```

3. Load the extension in your browser:
    - Open your browser's extensions page.
    - Enable "Developer mode".
    - Click "Load unpacked" and select the project directory.

## Usage

1. Click on the extension icon in your browser to open the popup.
2. Select the desired converter from the dropdown menu.
3. Follow the instructions for the selected converter:
    - For file conversion, select a file or enter Base64 data.
    - For text conversion, enter the text or Base64 data.
    - For URL conversion, enter the text or URL-encoded data.

## Development

### Project Structure

```
Base64ConverterExtension/
├── .gitignore
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── README.md
```

### Scripts

- **popup.js**: Contains the JavaScript logic for handling conversions and user interactions.
- **styles.css**: Contains the CSS styles for the popup interface.

### Manifest

- **manifest.json**: Defines the extension's metadata and permissions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
