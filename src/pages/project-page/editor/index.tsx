import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import MCE_PLUGINS from "./plugins";
import MCE_TOOLBARS from "./toolbar";

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
        height: "calc(100% - 20px)",
        width: "100%",        
        statusbar: false
      }}
    />
  );
}
