import express from 'express';
import dodaj from './dodaj'
import dohvati from './dohvati'

const app = express()  // instanciranje aplikacije 
const port = 3000  // port na kojem će web server slušati


app.get('/dodaj', dodaj.dod);
app.get('/dohvati', dohvati.doh);

app.listen(port, () => console.log(`Slušam na portu ${port}!`))
