import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function TextEditorComponent() {
  const [value, setValue] = useState("Let's create something awesome...");
  return <ReactQuill value={value} onChange={setValue} />;
}
