const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).send({ status: "ok" })
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + server.address().port);
});
