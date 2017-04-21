export const changeKey = key => {
  return {
    type: "CHANGE_KEY",
    key
  };
};

export const changeChord = chord => {
  return {
    type: "CHANGE_CHORD",
    chord
  };
};
