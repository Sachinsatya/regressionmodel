// app.js

const proxyUrl = 'http://localhost:3001'; // Replace with the actual URL of your proxy server

function predict() {
    const inputValue = document.getElementById('inputValue').value;

    fetch(`${proxyUrl}/predict`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ x: inputValue }),
    })
    .then(response => response.json())
    .then(data => {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `<p>Predicted Y: ${data.predictedY}</p>`;
    })
    .catch(error => console.error('Error:', error));
}
