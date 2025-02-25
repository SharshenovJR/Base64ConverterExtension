document.getElementById('converterSelect').addEventListener('change', function () {
    const sections = document.querySelectorAll('.converter-section');
    sections.forEach(section => section.style.display = 'none');

    const selectedValue = this.value;
    document.getElementById(selectedValue + 'Section').style.display = 'block';
});

document.getElementById('fileToBase64').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput').files[0];
    if (!fileInput) return alert("Выберите файл!");

    const reader = new FileReader();
    reader.readAsDataURL(fileInput);
    reader.onload = function () {
        document.getElementById('base64Output').value = reader.result.split(',')[1];
    };
    reader.onerror = function () {
        alert("Ошибка чтения файла!");
    };
});

document.getElementById('base64ToFile').addEventListener('click', function () {
    let base64Data = document.getElementById('base64Input').value.trim();
    if (!base64Data) return alert("Введите Base64!");

    try {
        let mimeType = 'application/octet-stream';
        let base64Content;

        if (base64Data.includes(',')) {
            const parts = base64Data.split(',');
            const header = parts[0];
            base64Content = parts[1];

            const mimeMatch = header.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64$/);
            if (mimeMatch) {
                mimeType = mimeMatch[1];
            }
        } else {
            if (base64Data.startsWith('JVBERi0')) {
                mimeType = 'application/pdf';
            } else if (base64Data.startsWith('/9j/')) {
                mimeType = 'image/jpeg';
            } else if (base64Data.startsWith('iVBORw0KGg')) {
                mimeType = 'image/png';
            }

            base64Content = base64Data.replace(/^data:[a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+;base64,/, '');
        }

        const extension = mimeType.split('/')[1] || 'txt';

        const byteCharacters = atob(base64Content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `decoded_file.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        alert("Ошибка декодирования Base64!");
    }
});

document.getElementById('textToBase64').addEventListener('click', function () {
    const text = document.getElementById('textInput').value;
    if (!text) return alert("Введите текст!");

    document.getElementById('base64TextOutput').value = btoa(text);
});

document.getElementById('base64ToText').addEventListener('click', function () {
    const base64Text = document.getElementById('base64TextInput').value;
    if (!base64Text) return alert("Введите Base64!");

    try {
        document.getElementById('textOutput').value = atob(base64Text);
    } catch (error) {
        alert("Ошибка декодирования! Проверьте Base64.");
    }
});

document.getElementById('textToUrl').addEventListener('click', function () {
    const text = document.getElementById('urlInput').value;
    if (!text) return alert("Введите текст!");

    document.getElementById('urlOutput').value = encodeURIComponent(text);
});

document.getElementById('urlToText').addEventListener('click', function () {
    const url = document.getElementById('urlDecodeInput').value;
    if (!url) return alert("Введите URL!");

    try {
        document.getElementById('urlDecodeOutput').value = decodeURIComponent(url);
    } catch (error) {
        alert("Ошибка декодирования! Проверьте URL.");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('converterSelect').dispatchEvent(new Event('change'));
});

function copyToClipboard(elementId) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    document.execCommand('copy');
}

document.getElementById('copyBase64Output').addEventListener('click', function () {
    copyToClipboard('base64Output');
});

document.getElementById('copyBase64TextOutput').addEventListener('click', function () {
    copyToClipboard('base64TextOutput');
});

document.getElementById('copyTextOutput').addEventListener('click', function () {
    copyToClipboard('textOutput');
});

document.getElementById('copyUrlOutput').addEventListener('click', function () {
    copyToClipboard('urlOutput');
});

document.getElementById('copyUrlDecodeOutput').addEventListener('click', function () {
    copyToClipboard('urlDecodeOutput');
});
