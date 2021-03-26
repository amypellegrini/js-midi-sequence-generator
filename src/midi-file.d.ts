declare module "midi-file" {
  export type MidiHeader = {
    format: number;
    numTracks: number;
    ticksPerBeat: number;
  };

  export type MidiMessage = {
    [key: string]: number | string | boolean;
  };

  export type MidiTrack = MidiMessage[];

  export type MidiFileTemplate = {
    header: MidiHeader;
    tracks: MidiTrack[];
  };

  export function writeMidi(template: MidiFileTemplate): number[];
}
