const express = require('express');
const app = express();

const bodyParser = require("body-parser");

app.set('port', (process.env.PORT || 3010))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to yordy's application." });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers','*',
    );
    next();
});

require('./controller/proveedores.controller')(app);
require('./controller/usuario.controller')(app);

app.listen(app.get('port'), function () {
    console.log(`Server running at:`, app.get('port'));
});