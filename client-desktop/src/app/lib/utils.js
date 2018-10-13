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

export { toMapIndexedBy, unique, path, prop };
