import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors()); // Permite que o Frontend acesse o Backend
app.use(express.json());

app.get('/api/mensagem', (req, res) => {
  res.json({ message: 'Olá do Backend com TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});