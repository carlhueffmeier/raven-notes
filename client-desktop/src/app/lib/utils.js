function toMapIndexedBy(key, array) {
  return array.reduce(
    (map, entry) => ({
      ...map,
      [entry[key]]: entry
    }),
    {}
  );
}

function unique(array) {
  return [...new Set(array)];
}

function path(keys, obj) {
  return keys.reduce((target, key) => (target || {})[key], obj);
}

function prop(key) {
  return obj => obj[key];
}

function sortBy(evaluate, array) {
  return [...array].sort((a, b) => (evaluate(a) < evaluate(b) ? -1 : 1));
}

function dateAscending(getDate) {
  return item => new Date(getDate(item));
}

function dateDescending(getDate) {
  return item => -new Date(getDate(item));
}

export { toMapIndexedBy, unique, path, prop, sortBy, dateAscending, dateDescending };
