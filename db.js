const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // ← si tu MySQL tiene contraseña, la escribes aquí
  database: 'proyecto'  // ← Nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
  } else {
    console.log('Conectado a MySQL correctamente.');
  }
});

module.exports = connection;
