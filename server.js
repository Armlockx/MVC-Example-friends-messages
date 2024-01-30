const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');  //load handlebars
app.set('views', path.join(__dirname, 'views'));    //find templates inside this folder

const PORT = 3000;

//MUST BE THE FIRST ROUT HANDLER!!!!!!!! 'logging'
app.use((req, res, next) => {
    const start = Date.now();
    next(); //goes to the next rout, going in
    const delta = Date.now() - start;   //going out
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);
});

app.use('/site', express.static(path.join(__dirname ,'public')));   //public becomes the root for the website
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Blender if VERY free',
        caption: 'Let\'s create 3D models!',
    })
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
