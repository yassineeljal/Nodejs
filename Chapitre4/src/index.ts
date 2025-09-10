import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur <http://localhost>:${port}`);
});