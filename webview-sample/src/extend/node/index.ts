import * as sumi from "sumi";
import { webviewId } from "../common/constants";

export function activate(context: sumi.ExtensionContext) {
  /**
   * OpenSumi 扩展的 Webview
   */
  // 获取 webviewHandle
  const webview = sumi.webview.getPlainWebviewHandle(webviewId);
  // 指定加载某个 url
  webview.loadUrl('https://opensumi.com');


  /**
   * VS Code 原生 Webview
   */

  const webviewPanel = sumi.window.createWebviewPanel('my-webview', 'Webview Sample', {
    viewColumn: 1,
  });

  const todoMvcCdnBase = 'https://todomvc.com/examples/react';

  webviewPanel.webview.html = `
  <!doctype html>
  <html lang="en" data-framework="react">
    <head>
          <meta charset="UTF-8"/>
          <meta name="description" content="A TodoMVC written in React."/>
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <title>TodoMVC: React</title>
          <script defer="defer" src="https://todomvc.com/examples/react/dist/app.bundle.js"></script>
          <link href="https://todomvc.com/examples/react/dist/app.css" rel="stylesheet">
      </head>
      <body>
        <section class="todoapp" id="root"></section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Created by the TodoMVC Team</p>
            <p>
                Part of <a href="http://todomvc.com">TodoMVC</a>
            </p>
        </footer>
      </body>
  </html>
  `;

  webviewPanel.reveal();
}
