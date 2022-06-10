const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': 'Bin Abraham-Joseph',
    'birthLocation': 'London, England'
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancellor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'Unknown': {
    'age': 0,
    'birthName': 'Unknown',
    'birthLocation': 'Unknown'
  }

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  if (rappers[name]) {
    res.json(rappers[name]);
  }
  else {
    res.json(rappers['Unknown'])
  }

})

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)
})
