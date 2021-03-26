"use strict";
exports.__esModule = true;
var fs = require("fs");
var midi_file_1 = require("midi-file");
function createMidiFileTemplate() {
    return {
        header: { format: 1, numTracks: 1, ticksPerBeat: 480 },
        tracks: [[]]
    };
}
function addMidiMessage(template, message) {
    template.tracks[0].push(message);
}
var midiFile = createMidiFileTemplate();
addMidiMessage(midiFile, {
    deltaTime: 0,
    channel: 0,
    type: "noteOn",
    noteNumber: 65,
    velocity: 80
});
addMidiMessage(midiFile, {
    deltaTime: 455,
    running: true,
    channel: 0,
    type: "noteOff",
    noteNumber: 65,
    velocity: 0,
    byte9: true
});
addMidiMessage(midiFile, {
    deltaTime: 0,
    channel: 0,
    type: "noteOn",
    noteNumber: 62,
    velocity: 80
});
addMidiMessage(midiFile, {
    deltaTime: 455,
    running: true,
    channel: 0,
    type: "noteOff",
    noteNumber: 62,
    velocity: 0,
    byte9: true
});
addMidiMessage(midiFile, { deltaTime: 1, meta: true, type: "endOfTrack" });
var output = midi_file_1.writeMidi(midiFile);
var outputBuffer = Buffer.from(output);
fs.writeFileSync("result.mid", outputBuffer);
