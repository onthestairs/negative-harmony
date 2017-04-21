import tonal from "tonal";

export const createNegativeMapping = note => {
  const allNotes = tonal.scale(`${note} chromatic`);
  console.log(allNotes);
  const tripleAllNotes = allNotes.concat(allNotes).concat(allNotes);
  const noteIndex = tripleAllNotes.indexOf(note, allNotes.length);
  const left = tripleAllNotes.slice(noteIndex - 2, noteIndex + 4).reverse();
  const right = tripleAllNotes.slice(noteIndex + 4, noteIndex + 10);
  console.log(left);
  console.log(right);
  let mapping = {};
  left.forEach((note, i) => {
    mapping[note] = right[i];
  });
  right.forEach((note, i) => {
    mapping[note] = left[i];
  });
  console.log(mapping);
  return note => {
    return mapping[note];
  };
};
