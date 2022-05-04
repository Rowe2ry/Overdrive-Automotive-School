const express = require("express");
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');

// const hbs = exphbs.create({
//     extname: '.handlebars',
//     defaultLayout: 'main',
//     layoutsDir: 'views/layouts/'
// });

const hbs = exphbs.create({});


const app = express();

const PORT = process.env.PORT || 3001;

const connection = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models');

app.use(session({
    secret: 'Hush now',
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: connection
    })
}));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// much sadness

app.use(routes);

connection.sync({ force: false }). then(() => {
    app.listen(PORT, () => {
        console.log(`server now listening at http://localhost:${PORT}`);
    })
});