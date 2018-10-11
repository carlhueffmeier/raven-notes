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

function prop(key) {
  return obj => obj[key];
}

export { toMapIndexedBy, unique, prop };
