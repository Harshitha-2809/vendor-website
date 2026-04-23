const express = require('express');
const cors = require('cors');
const vendorRoutes = require('./routes/vendorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/vendors', vendorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
