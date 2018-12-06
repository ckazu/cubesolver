const functions = require('firebase-functions');

exports.cubesolver = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
