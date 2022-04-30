const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello form my smarty node nodemon with auto restart');
});
const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "01788888800" },
    { id: 2, name: "bobita", email: "bobita@gmail.com", phone: "01788888800" },
    { id: 3, name: "purnima", email: "purnima@gmail.com", phone: "01788888800" },
    { id: 4, name: "Mahi", email: "Mahi@gmail.com", phone: "01788888800" },
    { id: 5, name: "momo", email: "momo@gmail.com", phone: "01788888800" },
    { id: 6, name: "sobnom", email: "sobnom@gmail.com", phone: "01788888800" },
    { id: 7, name: "tanjin", email: "tanjin@gmail.com", phone: "01788888800" }

]
app.get('/users', (req, res) => {
    //filter by query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
    console.log('query', req.query)

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'apple']);
});
app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flavour');
})
app.listen(port, () => {
    console.log('Listening Port', port);
})