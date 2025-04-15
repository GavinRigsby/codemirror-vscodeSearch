# VSCode Style Search & Replace for CodeMirror

A VSCode-styled Search and Replace extension for [CodeMirror 6](https://codemirror.net/), built on top of the core `@codemirror/search` package. This plugin provides a familiar find/replace experience inspired by Visual Studio Code, complete with custom keybindings and inline input styling.

## ✨ Features

- Find and Replace support with UI controls
- Toggle options: Regex, Case Sensitivity, Whole Word
- Inline match highlighting
- Keyboard shortcuts modeled after VSCode
- Fully integrated with CodeMirror's state and view systems

## 🚀 Installation

Make sure you have `@codemirror/view`, `@codemirror/state`, and `@codemirror/search` installed:

```bash
npm install @rigstech/codemirror-vscodeSearch
```

Then include the plugin in your CodeMirror setup.
## 🛠️ Usage
Import
```ts
import { vscodeSearch, customSearchKeymap } from '@rigstech/codemirror-vscodeSearch';
import { keymap } from '@codemirror/view';
```

Add to Editor Extensions

```ts
const editor = new EditorView({
  state: EditorState.create({
    doc: 'Your initial content here...',
    extensions: [
      vscodeSearch,
      keymap.of([
        // Your other keymaps...
        ...customSearchKeymap
      ])
    ]
  }),
  parent: document.getElementById('editor')!
});
```

## 🎹 Default Keybindings

| Shortcut      | Action                          |
|---------------|---------------------------------|
| Mod+F         | Show Search UI                  |
| Mod+H         | Show Replace UI                 |
| Escape        | Hide Search UI                  |
| Enter         | Find/Replace Next               |
| Shift+Enter   | Find Previous                   |
| Mod+Alt+Enter | Replace All                     |
| Alt+C         | Toggle Case Sensitivity         |
| Alt+W         | Toggle Whole Word               |
| Alt+R         | Toggle Regex                    |
| Mod+A         | Select All (search/replace box) |

*Mod is Cmd on macOS and Ctrl on Windows/Linux.*

## 📦 Project Structure

This plugin is structured into:

    commands:               Codemirror commands for hotkeys
    keymap:                 Keymap defition
    plugin:                 Main ViewPlugin
    state:                  Extension States
    theme:                  Styling
    utility:                Helper Functions
    FindReplaceControl:     Extension Logic

## 📄 License

MIT — feel free to use and modify for your own projects!
