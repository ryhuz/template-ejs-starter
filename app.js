    /* imports */
const methodOverride = require("method-override");
const express = require('express');
const app = express();
require('dotenv').config();

/* connections */
require('./lib/connection');

/* middleware */
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(require('express-ejs-layouts'));

/* routes */





/* listen */
app.listen(process.env.PORT, () => {
    console.log('running on ', process.env.PORT);
})