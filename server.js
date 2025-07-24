const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Rutas del backend
const authRoutes = require('./routes/auth.routes');
const dataRoutes = require('./routes/data.routes');
const uploadRoutes = require('./routes/upload.routes');
const auctionsRoutes = require('./routes/auctions.routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// API
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/auctions', auctionsRoutes);

// 👉 Servir el frontend
app.use(express.static(path.join(__dirname, 'dist')));

// 👉 Evitar errores 404 de rutas como /auctions/xyz
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Servidor en marcha
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
