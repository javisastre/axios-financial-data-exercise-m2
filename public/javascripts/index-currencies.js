const key = 'U2OW8E1XZOHIZB67';
const functionName = "FX_MONTHLY";
const from_symbol = "EUR";
const to_symbol = "USD"

const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&from_symbol=${from_symbol}&to_symbol=${to_symbol}&apikey=${key}`

axios.get(apiUrl)
    .then((response) => {
        const monthlyData = response.data["Time Series FX (Monthly)"];
        const dateArray = Object.keys(monthlyData);
        
        const closeData = dateArray.map((dateString) => {
            return monthlyData[dateString]["4. close"];
        });

        const ctx = document.querySelector('#drawing').getContext('2d');
        const chart = new Chart (ctx, {
            type: 'bar',
            data: {
                labels: dateArray,
                datasets: [
                    {
                        label: `Closing values of ${to_symbol} & ${from_symbol}`,
                        backgroundColor: 'rgb(202, 0, 70)',
                        borderColor: 'rgb(202, 0, 70)',
                         data: closeData
                    }
                ]
            }
        })
    })
    .catch( (err) => console.log(err));