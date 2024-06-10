// vscode namespace 下为 VS Code 插件 API
import * as vscode from "vscode";
import { loggerFactory } from '@opensumi/extension-logger';

import { Commands } from './commands';

const logger = loggerFactory('Command Sample', 'Trace');

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('popover-command', () => {
    vscode.window.showInformationMessage('Popover Clicked');
  });

  // 注册底部左侧工具栏
  const toolbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
  toolbar.text = 'Popover Demo';
  toolbar.command = 'popover-command';
  toolbar.show();
  context.subscriptions.push(toolbar);

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.sayHello, async () => {
      logger.info(`execute command: ${Commands.sayHello}`);
      vscode.window.showInformationMessage('Hello Kaitian');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.foo, async () => {
      logger.info(`execute command: ${Commands.foo}`);
      // console.log(document.body);
      console.log('window--> ', window);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.getWorkspaceFolder, async () => {
      logger.info(`execute command: ${Commands.getWorkspaceFolder}`);
      const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
      return workspaceFolder;
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.quickPick, async () => {
      logger.info(`execute command: ${Commands.quickPick}`);
      const item = await vscode.window.showQuickPick(['Item1', 'Item2', 'Item3']);
      if(item) {
        return item;
      }
    })
  );

}

// this method is called when your extension is deactivated
export function deactivate() {
  //
};
