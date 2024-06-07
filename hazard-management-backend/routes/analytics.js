const express = require('express');
const app = express();

// Sample data for alerts, risk controls, and hazards
const alerts = [a,b,c]; // Your array of alerts
const riskControls = [1,2,3]; // Your array of risk controls
const hazards = [airquality,fire]; // Your array of hazards

// Route to get at least 10 alerts
app.get('/api/alerts', (req, res) => {
    const slicedAlerts = alerts.slice(0, 10); // Get the first 10 alerts
    res.json(slicedAlerts);
});

// Route to get at least 10 risk controls
app.get('/api/risk', (req, res) => {
    const slicedRiskControls = riskControls.slice(0, 10); // Get the first 10 risk controls
    res.json(slicedRiskControls);
});

// Route to get at least 10 hazards
app.get('/api/hazards', (req, res) => {
    const slicedHazards = hazards.slice(0, 10); // Get the first 10 hazards
    res.json(slicedHazards);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
