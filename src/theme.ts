import { EditorView } from "@codemirror/view";

const sharedTheme = {
    ".find-replace-container": {
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(34, 33, 33, 0.25)",
        top: "5px",
        position: "sticky !important",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minWidth: "420px",
        display: "flex",
        flex: "0 0 auto",
        height: "auto",
    },
    ".resize-handle": {
        width: "4px",
        background: "transparent",
        cursor: "col-resize",
        position: "absolute",
        left: "0",
        top: "0",
        bottom: "0",
    },
    ".resize-handle:hover": {
        background: "#007acc",
    },
    ".toggle-section": {
        display: "flex",
        flexDirection: "column",
        padding: "8px 4px",
        position: "relative",
        flex: "0 0 auto"
    },
    ".toggle-replace": {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        width: "15px",
        height: "100%",
    },
    ".inputs-section": {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px 0",
        minWidth: "0",
    },
    ".input-row": {
        display: "flex",
        alignItems: "center",
        height: "24px",
    },
    ".input-section": {
        alignContent: "center",
        flex: "1 1 auto"
    },
    ".input-container": {
        position: "relative",
        flex: "1",
        minWidth: "0",
    },
    ".search-bar": {
        display: "flex",
        position: "relative",
        margin: "2px",
    },
    ".find-input, .replace-input": {
        width: "100%",
        borderRadius: "4px",
        padding: "4px 80px 4px 8px",
        outline: "none",
        fontSize: "13px",
        height: "24px",
    },
    ".replace-input": {
        padding: "4px 8px 4px 8px",
    },
    ".find-input:focus, .replace-input:focus": {
        boxShadow: "none"
    },
    ".search-controls": {
        display: "flex",
        position: "absolute",
        right: "10px",
        top: "10%"
    },
    ".search-controls div": {
        borderRadius: "5px",
        alignContent: "center",
        margin: "2px 3px",
        cursor: "pointer",
    },
    ".search-controls svg": {
        margin: "0px 2px"
    },
    ".actions-section": {
        alignContent: "center",
        marginRight: "10px",
        flex: "0 0 auto"
    },
    ".button-group": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "24px",
        alignContent: "center",
    },
    ".search-icons": {
        display: "flex",
    },
    ".search-icons div": {
        cursor: "pointer",
        borderRadius: "4px",
    },
    ".replace-bar": {
        margin: "2px",
    },
    ".replace-buttons": {
        display: "flex",
        height: "24px",
    },
    ".replace-button": {
        border: "none",
        padding: "4px 4px",
        borderRadius: "4px",
        fontSize: "12px",
        cursor: "pointer",
        height: "24px",
    },
    ".match-count": {
        fontSize: "12px",
        marginLeft: "8px",
        whiteSpace: "nowrap",
    },
    ".search-options": {
        position: "absolute",
        right: "4px",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "2px",
    },
}

const lightTheme = {
    ".find-replace-container": {
        backgroundColor: "var(--cm-background, #f3f3f3);",
        color: "var(--cm-foreground, #cccccc)",
        border: "1px solid var(--cm-caret, #d4d4d4)",
    },
    ".toggle-replace:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #e1e1e1)",
    },
    ".find-input, .replace-input": {
        width: "100%",
        background: "var(--cm-gutter-background, #fffff)",
        color: "var(--cm-foreground, #cccccc)",
        border: "1px solid var(--cm-gutter-foreground, #e1e1e1)",
    },
    ".find-input:focus, .replace-input:focus": {
        borderColor: "var(--cm-caret, #c4c4c4)",
    },
    ".search-controls div:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #e1e1e1)"
    },
    ".search-controls div.active": {
        backgroundColor: "var(--cm-gutter-foreground, #e1e1e1)"
    },
    ".search-icons div:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #e1e1e1)"
    },
    ".replace-button:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #e1e1e1)"
    },
};

const darkTheme = {
    ".find-replace-container": {
        backgroundColor: "var(--cm-background, #252526);",
        color: "var(--cm-foreground, #c4c4c4)",
        border: "1px solid var(--cm-caret, #454545)",
    },
    ".toggle-replace:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #3c3c3c)",
    },
    ".find-input, .replace-input": {
        background: "var(--cm-gutter-background, #3c3c3c)",
        color: "var(--cm-foreground, #b4b4b4)",
        border: "1px solid var(--cm-gutter-foreground, #3c3c3c)",
    },
    ".find-input:focus, .replace-input:focus": {
        borderColor: "var(--cm-caret, #1e51db)",
    },
    ".search-controls div:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #3c3c3c)"
    },
    ".search-controls div.active": {
        backgroundColor: "var(--cm-gutter-foreground, #3c3c3c)"
    },
    ".search-icons div:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #3c3c3c)"
    },
    ".replace-button:hover": {
        backgroundColor: "var(--cm-gutter-foreground, #3c3c3c)"
    },
};

export const searchBaseTheme = EditorView.baseTheme({
    ...sharedTheme,

    "&light": lightTheme,

    "&dark": darkTheme,
})