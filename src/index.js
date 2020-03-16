import express from 'express';
import moment from 'moment'

const app = express ()
const port = 3005

app.get('/datum' , (req, res) => 
{
res.send(moment().format('MMM Do YY'))
});

app.get('/vrijeme' , (req, res) => 
{
    
    let t = ['kisovito', 'suncano', 'občacno']
     res.json(t[Math.floor(Math.random() * t.length)]);
    
});

app.get('/' , (req, res) =>  res.send('/datum i /vrijeme'))
app.listen (port, console.log('Na 3001 sam'));

 


        