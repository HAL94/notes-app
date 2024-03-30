import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import MCE_PLUGINS from "./plugins";
import MCE_TOOLBARS from "./toolbar";
import './index.css';

const delay = 1000;
let editorTimeoutRef: any = null

export default function EditorView({
  initialValue,
}: {
  initialValue?: string;
}) {
  const [value, setValue] = useState<string>(initialValue ?? "");

  return (
    <Editor
      apiKey={"p9kdbosrtkiczl3ej1fdmk01rqw7qz082yhnrucymfg6olf1"}      
      initialValue={initialValue}
      value={value}
      onEditorChange={(newValue, _editor) => {
        setValue(newValue);
        if (editorTimeoutRef) {
          clearTimeout(editorTimeoutRef);
        }
        editorTimeoutRef = setTimeout(() => {
          console.log('should now save this', newValue);
        }, delay)        
      }}
      onContextMenu={(e) => console.log('menu?', e)}
      init={{
        plugins: MCE_PLUGINS,
        toolbar: MCE_TOOLBARS,
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        height: "100%",
        width: "100%",        
        statusbar: false,
        body_class: 'rounded-full'               
      }}
    />
  );
}
