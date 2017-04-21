const initialState = {
  selectedKey: "C",
  selectedChord: "Dm7"
};

const music = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_KEY": {
      return {
        ...state,
        selectedKey: action.key
      };
    }
    case "CHANGE_CHORD": {
      return {
        ...state,
        selectedChord: action.chord
      };
    }
    default:
      return state;
  }
};

export default music;
