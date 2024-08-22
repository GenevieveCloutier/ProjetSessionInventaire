import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données:', err.message);
  } else {
    console.log('Connecté à la base de données SQLite');
  }
});

export default db;