const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/sales', (req, res) => {
    res.json([
        { day: "Mon", sales: 1000 },
        { day: "Tue", sales: 1500 },
        { day: "Wed", sales: 2000 }
    ]);
});

app.listen(5000, () => console.log("Server running"));