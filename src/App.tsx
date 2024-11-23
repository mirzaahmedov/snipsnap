import { useRef, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { Sidebar, Editor } from "@app/widgets";
import { defaultContent } from "./data";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState<string>(defaultContent);

  return (
    <Flex
      direction="row"
      align="start"
      height="100%"
    >
      <Sidebar editorRef={editorRef} />
      <Flex
        width="100%"
        height="100%"
        flexGrow="1"
        direction="column"
        align="center"
        justify="center"
        overflowY="auto"
      >
        <Editor
          editorRef={editorRef}
          content={content}
          onChangeContent={setContent}
        />
      </Flex>
    </Flex>
  );
};

export default App;
