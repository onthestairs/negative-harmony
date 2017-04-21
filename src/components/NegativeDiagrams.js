import React from "react";
import { connect } from "react-redux";
import tonal from "tonal";
import Tone from "tone";

import { createNegativeMapping } from "../negative";

const NegativeDiagramsComponent = ({
  selectedKey,
  selectedChord,
  dispatch
}) => {
  const chordNotes = tonal.chord(selectedChord);
  const mapping = createNegativeMapping(selectedKey);
  const allNotes = tonal.scale(`${selectedKey} chromatic`);
  const left = allNotes.slice(0, 6);
  const right = left.map(mapping);
  const negativeChordNotes = chordNotes.map(mapping);
  const negativeChord = tonal.chord.detect(negativeChordNotes);

  const synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  const playChord = notes => {
    const notesWithOctave = notes.map(note => `${note}4`);
    synth.triggerAttackRelease(notesWithOctave, "1m");
  };
  return (
    <div className="drawings">

      <div className="chords">
        <div>
          <h2>Selected Chord</h2>
          {chordNotes.join(", ")} <br />
          <button onClick={() => playChord(chordNotes)}>Play</button>
        </div>
        <div>
          <h2>Negative Chord</h2>
          {negativeChordNotes.join(", ")} <br />
          {negativeChord.join(" or ")} <br />
          <button onClick={() => playChord(negativeChordNotes)}>
            Play
          </button>
        </div>
      </div>

      Key:
      <table className="mapping">
        <tbody>
          <tr>
            {left.map(n => <td key={n}>{n}</td>)}
          </tr>
          <tr>
            {right.map(n => <td key={n}>{n}</td>)}
          </tr>
        </tbody>
      </table>

    </div>
  );
};

const mapStateToProps = ({ selectedKey, selectedChord }, ownProps) => {
  return {
    selectedKey,
    selectedChord
  };
};

const NegativeDiagrams = connect(mapStateToProps)(NegativeDiagramsComponent);
export default NegativeDiagrams;
