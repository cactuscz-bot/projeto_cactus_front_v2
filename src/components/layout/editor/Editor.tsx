"use client";
import dynamic from "next/dynamic";
import Loading from "../../ui/loading/Loading";

const TEditor = dynamic(() => import("@tinymce/tinymce-react").then((m) => m.Editor), {
  ssr: false,
  loading: () => <Loading />,
});

interface EditorProps {
  initialValue?: string;
  onEditorChange?: (content: string) => void;
  style?: string;
}

export default function Editor({ initialValue = "", onEditorChange, style = "" }: EditorProps) {
  return (
    <TEditor
      licenseKey="gpl"
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      initialValue={initialValue}
      onEditorChange={(newContent: string) => onEditorChange?.(newContent)}
      init={{
        placeholder: "Comece a escrever seu conteúdo aqui...",
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "fullscreen",
        ],
        toolbar:
          "undo preview fullscreen | blocks | bold italic | fontfamily fontsize | alignleft aligncenter alignright | bullist numlist",
        content_style: style,
      }}
    />
  );
}
