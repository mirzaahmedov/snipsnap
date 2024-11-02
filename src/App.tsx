import { useRef, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { Editor } from "./editor";
import { Sidebar } from "./sidebar";
import { defaultContent } from "./data";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState<string>(defaultContent);

  return (
    <Flex
      direction="row"
      align="start"
      height="100%"
      overflow="auto"
      p="8"
    >
      <Flex
        flexGrow="1"
        direction="column"
        align="center"
        justify="center"
      >
        <Editor
          editorRef={editorRef}
          content={content}
          onChangeContent={setContent}
        />
      </Flex>
      <Sidebar editorRef={editorRef} />
    </Flex>
  );
};

export default App;
