import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

monaco.editor.defineTheme('myCustomTheme', {
	base: 'vs',
	inherit: true,
	rules: [
		{ token: '', foreground: 'ff0000' },
	],
	colors: {
		'editor.foreground': '#000000'
	}
})

monaco.editor.create(document.getElementById('root'), {
	value: 'test',
	language: 'plaintext',
	theme: 'myCustomTheme'
});