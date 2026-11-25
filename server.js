const express = require('express');
const session = require('express-session');
const path = require('path');
// const db = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'space-secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

async function startServer() {

    try {
        // await db.sequelize.sync({force: false});
        // console.log('Таблцы готовы');

        app.listen(PORT, () => {
            console.log(`Сервер работает: http://localhost:${PORT}`);
            // console.log(``)
        });
    } catch (error) {
        console.error('ОШИБКА:', error);
    }

};

startServer();