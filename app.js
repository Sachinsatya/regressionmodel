// app.js

function predict() {
    const inputValue = document.getElementById('inputValue').value;

    // Call the API (replace with your actual API endpoint)
    const apiUrl = 'https://your-api-endpoint.com/predict';
    fetch(apiUrl, {
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
