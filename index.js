const express = require('express');
const app = express();
const cors = require('cors');
const Port = process.env.port|| 5000; 

app.use(cors());

const courses = require('./data/courses.json');
app.get('/courses', (req, res) => {
    res.send(courses);
})

const courseDetails = require('./data/courseDetails.json');

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourseDetails = courseDetails.find(course => course.id === id);
    if(!getSingleCourseDetails){
        res.send({})
    }
    res.send(getSingleCourseDetails);
})

app.listen(Port, () => {
    console.log('server is running ', Port);
})