import React from "react";
import { connect } from "react-redux";

import { changeKey, changeChord } from "./actions";
import NegativeDiagrams from "./components/NegativeDiagrams";

const AppComponent = ({ selectedKey, selectedChord, dispatch }) => {
  return (
    <div className="app">
      <h1>Negative Harmony</h1>
      <div className="inputs">
        <label className="keyInput">
          Key:
          <input
            type="text"
            value={selectedKey}
            onChange={e => dispatch(changeKey(e.target.value))}
          />
        </label>
        <label className="chordInput">
          Chord:
          <input
            type="text"
            value={selectedChord}
            onChange={e => dispatch(changeChord(e.target.value))}
          />
        </label>
      </div>
      <NegativeDiagrams />
    </div>
  );
};

const mapStateToProps = ({ selectedKey, selectedChord }, ownProps) => {
  return {
    selectedKey,
    selectedChord
  };
};

const App = connect(mapStateToProps)(AppComponent);
export default App;
