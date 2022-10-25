const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.port|| 5000; 
app.use(cors());

const courses = require('./data/courses.json');
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(Port, () => {
    console.log('server is running ', Port);
})