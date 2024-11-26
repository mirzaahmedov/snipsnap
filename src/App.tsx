import { useRef } from "react";
import { Flex } from "@radix-ui/themes";
import { Sidebar, Editor } from "@app/widgets";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);

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
        <Editor editorRef={editorRef} />
      </Flex>
    </Flex>
  );
};

export default App;
