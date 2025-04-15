import { EditorView } from "codemirror";

export const customSearchTheme = EditorView.theme({
    ".find-replace-container": {
      backgroundColor: "#252526",
      border: "1px solid #454545",
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
      color: "#ffffff",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minWidth: "420px",
      display: "flex",
      flex: "0 0 auto",
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
      color: "#cccccc",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0",
      width: "15px",
      height: "100%",
    },
    ".toggle-replace:hover": {
      color: "#ffffff",
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
      backgroundColor: "#3c3c3c",
      color: "white",
      border: "1px solid transparent",
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
      borderColor: "#007acc",
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
    ".search-controls div:hover": {
        backgroundColor: "#909090",
    },
    ".search-controls div.active": {
        backgroundColor: "#909090",
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
    ".search-icons div:hover": {
        backgroundColor: "#909090",
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
      color: "white",
      padding: "4px 4px",
      borderRadius: "4px",
      fontSize: "12px",
      cursor: "pointer",
      height: "24px",
    },
    ".replace-button:hover": {
      backgroundColor: "#4d4d4d",
    },
    ".match-count": {
      fontSize: "12px",
      color: "#cccccc",
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
}, { dark: true });