var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
 keyPath: '/home/pii/Documents/newraspb.private.key',
 certPath: '/home/pii/Documents/newraspb.cert.pem',
 caPath: '/home/pii/Documents/root-CA.crt',
 host: 'a2...03gw8kx5q-ats.iot.us-west-1.amazonaws.com',
 clientId: 'user-testing',
 region: 'ap-west-'
 });

device
 .on('connect', function() {
 console.log('connected');
 device.subscribe('sensorroom');
 });
 
device
 .on('message', function(topic, payload) {
 console.log('recv:', topic, payload.toString());
});

console.log('Sensor subscriber started.');
