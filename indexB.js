import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

const el = document.createElement("div");
monaco.editor.create(el, {
	value: 'foo',
	language: 'plaintext'
});
