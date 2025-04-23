// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const logInfo = vscode.commands.registerCommand('laravel-log-snippets.logInfo', () => {
		insertLog('info');
	});

	const logError = vscode.commands.registerCommand('laravel-log-snippets.logError', () => {
		insertLog('error');
	});

	context.subscriptions.push(logInfo, logError);
}

function insertLog(type: 'info' | 'error') {
	const editor = vscode.window.activeTextEditor;
	if (!editor) {
		vscode.window.showErrorMessage('No active editor found!');
		return;
	}

	const selection = editor.selection;
	const text = editor.document.getText(selection);
	const line = editor.document.lineAt(selection.end.line);

	let logStatement = '';
	if (text) {
		logStatement = `\nLog::${type}('${text}: ' . ${text});`;
	} else {
		logStatement = `\nLog::${type}('');`;
	}

	const position = line.range.end;

	editor.edit(editBuilder => {
		editBuilder.insert(position, logStatement);
	});
}


// This method is called when your extension is deactivated
export function deactivate() {}
