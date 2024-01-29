const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

//MUST BE THE FIRST ROUT HANDLER!!!!!!!! 'logging'
app.use((req, res, next) => {
    const start = Date.now();
    next(); //goes to the next rout, going in
    const delta = Date.now() - start;   //going out
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);
});

app.use(express.json());    //req.body : content-type = application/json (when matching)

app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
