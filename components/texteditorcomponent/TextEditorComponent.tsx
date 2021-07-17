import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface ITextEditorProps {
  setDetails: (property: string, value: any) => void;
}

export default function TextEditorComponent(props: ITextEditorProps) {
  const placeHolder: string = "Let's create something awesome...";
  return (
    <ReactQuill
      defaultValue={placeHolder}
      onChange={() =>
        props.setDetails("details", "Let's create something awesome...")
      }
    />
  );
}
