import * as sumi from 'sumi';
import * as vscode from 'vscode';
import { loggerFactory } from '@opensumi/extension-logger';

import { Commands } from '../../commands';

const logger = loggerFactory('Command Sample', 'Trace');

export async function activate(context: sumi.ExtensionContext) {
  console.log('activate from worker.......................')
  sumi.toolbar.registerToolbarAction({
    type: 'button',
    title: '开始',
    iconPath: './icons/start.svg',
    id: 'sample-start',
    description: 'This is description',
    states: {
      default: {
        titleForeground: '#FF004F',
      },
      clicked: {
        titleForeground: '#CCC',
      },
    },
  });
  sumi.toolbar.registerToolbarAction({
    type: 'button',
    title: '开始 by sumi',
    iconPath: './icons/start.svg',
    id: 'sample-start-sumi',
    description: 'This is description',
    states: {
      default: {
        titleForeground: '#FF004F',
      },
      clicked: {
        titleForeground: '#CCC',
      },
    },
  });
  const action = await sumi.toolbar.getToolbarActionButtonHandle('popover-start');
    setInterval(() => {
      action.setContext({			// 定时更新 context 值
        name: 'World' + Math.round(Math.random() * 100),
    });
  }, 1000);

  // sumi.toolbar.registerToolbarAction
  const printer = await sumi.toolbar.registerToolbarAction({
    type: 'button',
    title: '打印',
    iconPath: './icons/printer.svg',
    id: 'sample-printer',
    description: 'This is description',
    // 定义按钮的几种状态
    states: {
      // 默认将标题前景色设为红色
      default: {
        titleForeground: '#FF004F',
        // 按钮与图标使用左右布局
        btnTitleStyle: 'horizontal',
      },
      // clicked 状态下为灰色
      clicked: {
        titleForeground: '#CCC',
        btnTitleStyle: 'horizontal',
      },
    },
  });

  printer.onClick(() => {
    printer.setState('clicked');
    sumi.window.showInformationMessage('Print!');
  });

  const gift = await sumi.toolbar.registerToolbarAction({
    type: 'select', // 注册一个 select 类型的 toolbar action
    // 绑定 do-select command
    id: 'common-select',
    defaultValue: 'book',
    description: 'This is description',
    // select 下拉值列表
    options: [
      {
        iconPath: '/icons/gift.svg',
        label: '礼物',
        value: 'gift',
      },
      {
        iconPath: '/icons/book.svg',
        label: '五年高考',
        value: 'book',
      },
    ],
    states: {
      // 默认 state
      default: {
        labelForegroundColor: '#FF004F',
      },
      selected: {
        labelForegroundColor: '#CCC',
      },
    },
  });

  gift.onSelect((e) => {
    gift.setState('selected');
    sumi.window.showInformationMessage(`Select ${e}`);
  });

  // sumi.toolbar.getToolbarActionButtonHandle
  sumi.commands.registerCommand('sample-start', async () => {
    const action = await sumi.toolbar.getToolbarActionButtonHandle('sample-start');
    action.setState('clicked');
    sumi.window.showInformationMessage('Start!');
  });

  // 
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
