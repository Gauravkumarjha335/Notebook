async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        // Process data
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error
    }
}


fetchData()