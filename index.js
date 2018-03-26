const express = require('express')
const app = express()

const attendenceData = require('./attendence_mock.json');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/scripts', express.static(__dirname + '/node_modules/'));
app.use('/', express.static(__dirname + '/'));

app.get('/api/attendence-data', (req, res) => {
  
    let employee = req.query.employee;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;

    res.send(attendenceData);

});

app.listen(3000, function () {
  console.log('Attendence system listening on port 3000!');
});

