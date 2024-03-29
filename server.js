//Install express server
const express = require('express');
const path = require('path');
app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
    // Replace the '/dist/<to_your_project_name>/index.html'
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

