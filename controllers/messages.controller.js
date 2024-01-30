const path = require('path');   // /folder/files.jpg

function getMessages(req, res) {
    res.render('messages', {    //looks for 'views/messages'
        title: 'Messages to my Friends!',
        friend: 'Elon Mushroom',
    }); 
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'Surface Laptop 2 - Default.jpg'));
}

function postMessage (req, res) {
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}