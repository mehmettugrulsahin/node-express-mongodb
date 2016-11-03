var fs = require('fs');

var inputfile = './users.json';
var outputfile = './out.json';

var readable = fs.createReadStream(inputfile);
var writeStream = fs.createWriteStream(outputfile);

readable.pipe(writeStream);