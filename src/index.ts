import * as fs from "fs";
import { MidiFileTemplate, MidiMessage, writeMidi } from "midi-file";

function createMidiFileTemplate(): MidiFileTemplate {
  return {
    header: { format: 1, numTracks: 1, ticksPerBeat: 480 },
    tracks: [[]],
  };
}

function addMidiMessage(template: MidiFileTemplate, message: MidiMessage) {
  template.tracks[0].push(message);
}

var midiFileTemplate = createMidiFileTemplate();

addMidiMessage(midiFileTemplate, {
  deltaTime: 0,
  channel: 0,
  type: "noteOn",
  noteNumber: 65,
  velocity: 80,
});

addMidiMessage(midiFileTemplate, {
  deltaTime: 455,
  running: true,
  channel: 0,
  type: "noteOff",
  noteNumber: 65,
  velocity: 0,
  byte9: true,
});

addMidiMessage(midiFileTemplate, {
  deltaTime: 0,
  channel: 0,
  type: "noteOn",
  noteNumber: 62,
  velocity: 80,
});

addMidiMessage(midiFileTemplate, {
  deltaTime: 455,
  running: true,
  channel: 0,
  type: "noteOff",
  noteNumber: 62,
  velocity: 0,
  byte9: true,
});

addMidiMessage(midiFileTemplate, {
  deltaTime: 1,
  meta: true,
  type: "endOfTrack",
});

var output = writeMidi(midiFileTemplate);
var outputBuffer = Buffer.from(output);

fs.writeFileSync("result.mid", outputBuffer);
