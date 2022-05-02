const express = require("express");
const connection = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

app.engide('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, './public')));

app.use(session({
    secret: 'Hush now',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: connection
    })
}));

app.use(routes);

connection.sync({ force: false }). then(() => {
    app.listen(PORT, () => {
        console.log(`server now listening at http://localhost:${PORT}`);
    })
});