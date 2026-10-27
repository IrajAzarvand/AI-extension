
const vscode = require('vscode');

function activate(context) {
    const provider = {
        resolveWebviewView(webviewView) {
            webviewView.webview.options = {
                enableScripts: true
            };

            webviewView.webview.html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    >
                    <style>
                        body {
                            font-family: var(--vscode-font-family);
                            color: var(--vscode-foreground);
                            padding: 12px;
                        }

                        iframe {
                            width: 100%;
                            height: 65vh;
                            border: 1px solid var(--vscode-panel-border);
                            border-radius: 6px;
                        }

                        a {
                            color: var(--vscode-textLink-foreground);
                        }
                    </style>
                </head>
                <body>
                    <h3>ChatGPT</h3>
                    <p>
                        Testing whether ChatGPT can be displayed
                        inside a VS Code panel.
                    </p>

                    <iframe
                        src="https://chatgpt.com/"
                        title="ChatGPT"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    ></iframe>

                    <p>
                        If the page does not load,
                        <a href="https://chatgpt.com/">
                            open ChatGPT in your browser
                        </a>.
                    </p>
                </body>
                </html>
            `;
        }
    };

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(
            'chatgptSidePanel.view',
            provider
        )
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
