const express = require('express');
const app = express();

//Serve static files from the "public" directory
app.use(express.static('public'));
app.use(express.static('./'));

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});