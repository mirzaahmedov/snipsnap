import { useRef } from "react";
import { Flex, ScrollArea } from "@radix-ui/themes";
import { Sidebar, Editor, Header } from "@app/widgets";
import { ToastContainer } from "react-toastify";

import "react-toastify/ReactToastify.css";

const App = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <Flex
      direction="row"
      align="start"
      height="100%"
    >
      <ToastContainer />
      <Sidebar editorRef={editorRef} />
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
      >
        <Header />
        <Flex
          direction="column"
          justify="center"
          align="center"
          flexGrow="1"
          overflow="hidden"
        >
          <ScrollArea
            type="always"
            scrollbars="vertical"
            className="bg-red-500 h-fit"
          >
            <Editor editorRef={editorRef} />
          </ScrollArea>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
