const url = 'http://localhost:3000/incidencia';
const data = {
  tipo: 'Iluminación pública',
  descripcion: 'La comunidad reporta que una lámpara del parque no funciona desde hace varios días.'
};

(async () => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const text = await res.text();
    console.log(text);
  } catch (err) {
    console.error('Error:', err.message);
  }
})();
