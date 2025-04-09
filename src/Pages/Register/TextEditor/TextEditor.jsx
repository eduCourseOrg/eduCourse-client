import React, { useRef, useState } from "react";
import {
  FaBold,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaUnderline,
} from "react-icons/fa";

const RichTextEditor = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const applyFormat = (command, value = null) => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    if (command === "createLink") {
      const url = prompt("Enter URL:");
      if (url) {
        document.execCommand("createLink", false, url);
      }
      return;
    }

    if (command === "insertImage") {
      const imgUrl = prompt("Enter Image URL:");
      if (imgUrl) {
        document.execCommand("insertImage", false, imgUrl);
      }
      return;
    }

    if (command === "insertUnorderedList" || command === "insertOrderedList") {
      document.execCommand(command, false, null);
      return;
    }

    document.execCommand(command, false, value);
    setContent(editorRef.current.innerHTML);
  };


  const handleInput = () => {
    setContent(editorRef.current.innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting content:", content);
    fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Server response:", data))
      .catch((err) => console.error("Error submitting content:", err));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold">Course Description*</label>

        {/* Toolbar */}
        <div className="flex items-center gap-2 border p-2 mb-2 bg-gray-100 rounded-t-lg">
          <button
            type="button"
            onClick={() => applyFormat("bold")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaBold />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("italic")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaItalic />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("underline")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaUnderline />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("createLink")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaLink />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("insertImage")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaImage />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("insertUnorderedList")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaListUl />
          </button>
          <button
            type="button"
            onClick={() => applyFormat("insertOrderedList")}
            className="p-2 bg-gray-200 rounded"
          >
            <FaListOl />
          </button>
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          className="min-h-[200px] p-2 border rounded-b-lg outline-none bg-white"
          onInput={handleInput}
        ></div>

        {/* Output */}
        <h3 className="mt-4 text-lg font-semibold">HTML Output:</h3>
        <div className="p-2 border bg-gray-100 rounded-lg text-sm">
          {content}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RichTextEditor;
