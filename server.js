const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

//MUST BE THE FIRST ROUT HANDLER!!!!!!!! 'logging'
app.use((req, res, next) => {
    const start = Date.now();
    next(); //goes to the next rout, going in
    const delta = Date.now() - start;   //going out
    console.log(`${req.method} ${req.url} ${delta} ms`);
});

app.use(express.json());    //req.body : content-type = application/json (when matching)

app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});
