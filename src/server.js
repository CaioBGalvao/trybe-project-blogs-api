require('dotenv').config();
const app = require('./api');
require('express-async-errors');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use((err, _req, res, _next) => {
  if (err.message === 'connect ECONNREFUSED 127.0.0.1:3306') {
    return res.status(500).json({ message: 'banco esta off' });
  }
  
  console.error('Erro desconhecido:', err);
  res.status(500).json({ message: 'Erro do middleware', code: err.code });
});

app.listen(port, () => console.log('ouvindo porta', port));
