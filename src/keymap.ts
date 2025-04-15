import { KeyBinding } from "@codemirror/view";
import { deleteCharacterBackwards, deleteCharacterFowards, hideSearchVisibilityCommand, searchFindPrevious, searchFindReplaceMatch, searchMoveCursorLeft, searchMoveCursorRight, searchReplaceAll, searchShowReplace, searchToggleCase, searchToggleRegex, searchToggleWholeWord, selectAllCommand, showSearchVisibilityCommand } from "./commands";

export const customSearchKeymap: KeyBinding[] = [
    {
        key: 'Mod-a',
        run: selectAllCommand,
        scope: 'search'
    },
    {
        key: 'Mod-f',
        run: showSearchVisibilityCommand,
        scope: 'search'
    },
    {
        key: 'Escape',
        run: hideSearchVisibilityCommand, 
        scope: 'search'
    },
    {
        key: 'Alt-c',
        run: searchToggleCase,
        scope: 'search'
    },
    {
        key: 'Alt-w',
        run: searchToggleWholeWord,
        scope: 'search'
    },
    {
        key: 'Alt-r',
        run: searchToggleRegex,
        scope: 'search'
    },
    {
        key: 'Mod-h',
        run: searchShowReplace,
        scope: 'search'
    },
    {
        key: 'Enter',
        run: searchFindReplaceMatch,
        scope: 'search'
    },
    {
        key: 'Shift-Enter',
        run: searchFindPrevious,
        scope: 'search'
    },
    {
        key: 'Mod-Alt-Enter',
        run: searchReplaceAll,
        scope: 'search'
    },
    {
        key: 'Backspace',
        run: deleteCharacterBackwards,
        scope: 'search'
    },
    {
        key: 'Delete',
        run: deleteCharacterFowards,
        scope: 'search'
    },
    {
        key: "ArrowLeft",
        run: searchMoveCursorLeft,
      },
      {
        key: "ArrowRight",
        run: searchMoveCursorRight,
      },
];