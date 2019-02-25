// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { DocsConfig } from "./docsConfig";
const opn = require("opn");
const docsConfig = require("./docsConfig");
let myStatusBarItem: vscode.StatusBarItem;
let currentLanguageId: string | undefined = undefined;
let currentDocsLink: string | undefined = undefined;
let config: DocsConfig;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    if (!vscode.workspace.getConfiguration().has("docs.languageConfig")) {
        console.log("creating default language config");
        vscode.workspace.getConfiguration().update("docs.languageConfig", docsConfig.defaults, false);
    }
    config = vscode.workspace.getConfiguration().get("docs.languageConfig") || docsConfig.default;

    context.subscriptions.push(vscode.commands.registerCommand("extension.gotodocs", goToDocs));

    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 0);
    myStatusBarItem.command = "extension.gotodocs";
    context.subscriptions.push(myStatusBarItem);

    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(updateLanguageConfig));
    updateStatusBarItem();
}

function goToDocs(): void {
    if (currentDocsLink) {
        opn(currentDocsLink);
    } else {
        let msg: string = `Doc link for ${currentLanguageId} has not been set.`;
        vscode.window.showInformationMessage(msg, "Goto configuration", "Help").then((value: string | undefined) => {
            switch (value) {
                case "Goto configuration": {
                    vscode.commands.executeCommand("workbench.action.openSettings");
                    break;
                }
                case "Help": {
                    vscode.window.showInformationMessage("Visit the readme"); // todo open readme of repo
                    break;
                }
            }
        });
    }
}

function updateStatusBarItem(): void {
    if (vscode.window.activeTextEditor &&  config[vscode.window.activeTextEditor.document.languageId]) {
            currentLanguageId = vscode.window.activeTextEditor.document.languageId;
            currentLanguageId
            vscode.languages.getLanguages
            vscode.languages.match
            let languageNames: any = docsConfig.languageNames;


            myStatusBarItem.text = `$(book) ${languageNames[currentLanguageId]} reference`;
            myStatusBarItem.show();
    } else {
        myStatusBarItem.hide();
    }

    if (!vscode.workspace.getConfiguration().has("docs.languageConfig")) {
        console.log("creating default language config");
        vscode.workspace.getConfiguration().update("docs.languageConfig", docsConfig.defaults, false);
    }
    if (currentLanguageId) {
        currentDocsLink = config[currentLanguageId];
    }
}

function updateLanguageConfig(): void {
    let languageConfig: DocsConfig | undefined = vscode.workspace.getConfiguration().get("docs.languageConfig");
    if (languageConfig) {
        config = languageConfig;
    }
}

// this method is called when your extension is deactivated
export function deactivate() {}
