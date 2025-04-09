
// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaBold,
//   FaHeading,
//   FaItalic,
//   FaListOl,
//   FaListUl,
//   FaRedo,
//   FaUnderline,
//   FaUndo
// } from "react-icons/fa";

// const EnhancedTextEditor = ({
//   initialContent = "",
//   onSubmit,
//   onContentChange,
//   height = "300px",
//   showSubmitButton = true,
//   submitButtonText = "Submit",
// }) => {
//   const [content, setContent] = useState(initialContent);
//   const [history, setHistory] = useState([initialContent]);
//   const [historyIndex, setHistoryIndex] = useState(0);
//   const editorRef = useRef(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.innerHTML = initialContent;
//     }
//   }, [initialContent]);

//   const saveToHistory = (newContent) => {
//     if (newContent !== history[historyIndex]) {
//       const newHistory = history.slice(0, historyIndex + 1);
//       newHistory.push(newContent);
//       setHistory(newHistory);
//       setHistoryIndex(newHistory.length - 1);
//     }
//   };

//   const updateContent = () => {
//     if (editorRef.current) {
//       const newContent = editorRef.current.innerHTML;
//       setContent(newContent);
//       saveToHistory(newContent);
//       if (onContentChange) {
//         onContentChange(newContent);
//       }
//     }
//   };

//   const insertHeading = (level) => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection.getRangeAt(0);
//     const heading = document.createElement(`h${level}`);
//     heading.textContent = selection.toString() || `Heading ${level}`;

//     range.deleteContents();
//     range.insertNode(heading);
//     updateContent();
//   };

//   const insertList = (ordered) => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection.getRangeAt(0);
//     const list = document.createElement(ordered ? "ol" : "ul");
//     const listItem = document.createElement("li");
//     listItem.textContent = selection.toString() || "List Item";

//     list.appendChild(listItem);
//     range.deleteContents();
//     range.insertNode(list);
//     updateContent();
//   };

//   const applyStyle = (tag) => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection.getRangeAt(0);
//     const span = document.createElement("span");
//     span.style.fontWeight = tag === "bold" ? "bold" : "";
//     span.style.fontStyle = tag === "italic" ? "italic" : "";
//     span.style.textDecoration = tag === "underline" ? "underline" : "";

//     span.appendChild(range.extractContents());
//     range.insertNode(span);
//     updateContent();
//   };

//   const applyColor = (color) => {
//     const selection = window.getSelection();
//     if (!selection?.rangeCount) return;

//     const range = selection.getRangeAt(0);
//     const span = document.createElement("span");
//     span.style.color = color;
//     span.appendChild(range.extractContents());
//     range.insertNode(span);
//     updateContent();
//   };

//   const undo = () => {
//     if (historyIndex > 0) {
//       setHistoryIndex(historyIndex - 1);
//       if (editorRef.current && history[historyIndex - 1]) {
//         editorRef.current.innerHTML = history[historyIndex - 1];
//         setContent(history[historyIndex - 1]);
//         if (onContentChange) {
//           onContentChange(history[historyIndex - 1]);
//         }
//       }
//     }
//   };

//   const redo = () => {
//     if (historyIndex < history.length - 1) {
//       setHistoryIndex(historyIndex + 1);
//       if (editorRef.current && history[historyIndex + 1]) {
//         editorRef.current.innerHTML = history[historyIndex + 1];
//         setContent(history[historyIndex + 1]);
//         if (onContentChange) {
//           onContentChange(history[historyIndex + 1]);
//         }
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(content);
//     }
//   };

//   return (
//     <div className="w-full rounded-lg shadow-md bg-card">
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-wrap items-center gap-1 border p-2 bg-muted rounded-t-lg">
//           <button type="button" onClick={() => applyStyle("bold")} title="Bold">
//             <FaBold className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={() => applyStyle("italic")}
//             title="Italic"
//           >
//             <FaItalic className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={() => applyStyle("underline")}
//             title="Underline"
//           >
//             <FaUnderline className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={() => insertHeading(2)}
//             title="Heading"
//           >
//             <FaHeading className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={() => insertList(false)}
//             title="Bullet List"
//           >
//             <FaListUl className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={() => insertList(true)}
//             title="Numbered List"
//           >
//             <FaListOl className="w-4 h-4" />
//           </button>
//           <input
//             type="color"
//             onChange={(e) => applyColor(e.target.value)}
//             className="ml-2 cursor-pointer"
//           />
//           <button
//             type="button"
//             onClick={undo}
//             disabled={historyIndex <= 0}
//             title="Undo"
//           >
//             <FaUndo className="w-4 h-4" />
//           </button>
//           <button
//             type="button"
//             onClick={redo}
//             disabled={historyIndex >= history.length - 1}
//             title="Redo"
//           >
//             <FaRedo className="w-4 h-4" />
//           </button>
//         </div>

//         <ScrollArea className="border rounded-b-lg">
//           <div
//             ref={editorRef}
//             contentEditable
//             className="w-full p-4 outline-none prose prose-sm max-w-none"
//             style={{ minHeight: height }}
//             onInput={updateContent}
//             onBlur={updateContent}
//           ></div>
//         </ScrollArea>

//         <details className="mt-4">
//           <summary className="cursor-pointer font-medium">HTML Output</summary>
//           <div className="p-2 mt-2 border bg-muted rounded-lg text-sm overflow-x-auto">
//             <pre className="whitespace-pre-wrap">{content}</pre>
//           </div>
//         </details>

//         {showSubmitButton && (
//           <button
//             type="submit"
//             className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
//           >
//             {submitButtonText}
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default EnhancedTextEditor;
