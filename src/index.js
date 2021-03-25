var fs = require("fs");
var parseMidi = require("midi-file").parseMidi;

var input = fs.readFileSync("sequence.mid");

console.log(input);

var parsed = parseMidi(input);

console.log(parsed);

for (var i = 0; i < parsed.tracks[0].length; i++) {
  console.log(parsed.tracks[0][i]);
}
