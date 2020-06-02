const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    console.log(req.query.f);
    res.send(process.env);
    console.log(process.env);
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('Node.js has started on port ' + PORT));