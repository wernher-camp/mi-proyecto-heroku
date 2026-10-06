const express = require('express');
const app = express();

// Heroku asignará automáticamente el puerto a través de process.env.PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Aplicación en Heroku</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin-top: 60px; background-color: #f4f5f9; }
        .box { background: white; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        h1 { color: #6762a6; }
        p { color: #333; }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>🚀 ¡Despliegue Exitoso en Heroku!</h1>
        <p>Esta es una aplicación de prueba hecha con <strong>Node.js</strong> y <strong>Express</strong>.</p>
        <p>Estado del servicio: <strong style="color: green;">Activo</strong></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
