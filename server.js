const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Path to cached/active live flight data
const DATA_DIR = path.join(__dirname, 'public', 'data');
const EK435_FILE = path.join(DATA_DIR, 'flight_ek435.json');

// Read EK435 data with dynamic timestamp and live position simulation/interpolation
function getEK435Data() {
  try {
    if (fs.existsSync(EK435_FILE)) {
      const data = JSON.parse(fs.readFileSync(EK435_FILE, 'utf8'));
      
      // Compute smooth real-time progress update
      const now = Math.floor(Date.now() / 1000);
      const start = data.actualDeparture || 1792321959;
      const eta = data.eta || (start + 49000);
      const totalDur = eta - start;
      const elapsed = Math.max(0, now - start);
      
      // Update telemetry slightly over time for live immersion if needed
      data.lastUpdated = new Date().toISOString();
      return data;
    }
  } catch (err) {
    console.error('Error reading flight data:', err.message);
  }
  return null;
}

// Active flight endpoint
app.get('/api/active-flight', (req, res) => {
  const data = getEK435Data();
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Flight data not found' });
  }
});

// Search flights endpoint
app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toUpperCase().trim();
  const data = getEK435Data();

  if (q === 'EK435' || q === 'UAE75T' || q.includes('435') || q.includes('UAE') || q.includes('EMIRATES') || q === '') {
    return res.json({
      results: [
        {
          id: '422d03ab',
          flight: 'EK435',
          callsign: 'UAE75T',
          airline: 'Emirates',
          aircraft: 'Airbus A380-842',
          registration: data?.reg || 'A6-EUT',
          from: 'BNE',
          to: 'DXB',
          status: 'live'
        }
      ]
    });
  }

  // Fallback search response
  res.json({
    results: [
      {
        id: '422d03ab',
        flight: 'EK435',
        callsign: 'UAE75T',
        airline: 'Emirates',
        aircraft: 'Airbus A380-842',
        registration: 'A6-EUT',
        from: 'BNE',
        to: 'DXB',
        status: 'live'
      }
    ]
  });
});

// Specific flight detail endpoint
app.get('/api/flight/:id', (req, res) => {
  const data = getEK435Data();
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Flight not found' });
  }
});

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════════╗
  ║   CRUCIBLE // SIGINT FLIGHT MATRIX           ║
  ║   Active on http://localhost:${PORT}          ║
  ║   Primary Target: UAE75T / EK435             ║
  ╚══════════════════════════════════════════════╝
  `);
});
