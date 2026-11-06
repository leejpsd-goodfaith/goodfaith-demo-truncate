// Shortens text to a length, adding an ellipsis.
export function truncate(text, length) {
  return text.length <= length ? text : `${text.slice(0, length - 1)}…`;
}
