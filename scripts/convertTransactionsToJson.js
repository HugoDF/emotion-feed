const fs = require('fs');

const transactionsCsv = fs.readFileSync('./emotion-transaction-feed/data/transactions.csv', 'utf-8');

const [headerRow, ...rows] = transactionsCsv.split('\n').map(row => row.split(','));

const transactions = rows.reduce((prev, curr) => {
    const transaction = curr.reduce((prev, curr, i) => {
        if (headerRow[i] === 'description') {
            prev[headerRow[i]] = curr.replace(/"/g, '');
        } else {
            prev[headerRow[i]] = curr;
        }
        return prev;
    }, {});
    return prev.concat(transaction);
}, []);

fs.writeFileSync('./src/data/transactions.json', JSON.stringify(transactions));