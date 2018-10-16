import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

function editorValueToJson(editorValue) {
  const json = editorValue.toJSON();
  return json;
}

function editorValueToPlaintext(editorValue) {
  const text = Plain.serialize(editorValue);
  return text;
}

function plaintextToEditorValue(text) {
  const editorValue = Plain.deserialize(text);
  return editorValue;
}

function jsonToEditorValue(json) {
  if (!json) {
    return createEmptyEditorValue();
  }
  const editorValue = Value.fromJSON(json);
  return editorValue;
}

function createEmptyEditorValue() {
  return Plain.deserialize('');
}

function createEmptyJson() {
  return Plain.deserialize('').toJSON();
}

export {
  editorValueToJson,
  editorValueToPlaintext,
  jsonToEditorValue,
  plaintextToEditorValue,
  createEmptyEditorValue,
  createEmptyJson
};
