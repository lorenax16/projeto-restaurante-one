require('dotenv').config({ path: '.env' });
const app = require('./app');

const PORT = process.env.PORT || 3001


app.listen(PORT, () => console.log(`servidor rodando em: http://localhost:${PORT}`))
