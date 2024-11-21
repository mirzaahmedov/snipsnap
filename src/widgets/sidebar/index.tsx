import type { RefObject } from "react";

import { Box, Flex, Slider, TextField } from "@radix-ui/themes";
import { useEditorOptions } from "@app/shared/stores/options";
import { gray } from "@radix-ui/colors";
import {
  ChooseFont,
  ChooseBackground,
  ChooseColorscheme,
  ChooseProgrammingLanguage,
  DownloadImage,
} from "@app/features";

type SidebarProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ editorRef }: SidebarProps) => {
  const {
    background,
    colorscheme,
    programmingLanguage,
    fontSize,
    fontFamily,
    setEditorOptions,
  } = useEditorOptions();

  return (
    <Box
      asChild
      px="6"
      py="8"
      className="w-full h-full max-w-sm sticky top-0 rounded-lg"
      style={{
        backgroundColor: gray.gray12,
      }}
    >
      <aside>
        <Flex
          direction="column"
          justify="start"
          gap="2"
        >
          <Flex
            gap="6"
            align="center"
          >
            <TextField.Root
              type="number"
              value={fontSize}
              onChange={(e) =>
                setEditorOptions({ fontSize: Number(e.target.value) })
              }
              className="w-24"
            />
            <Slider
              value={[fontSize]}
              onValueChange={(value) =>
                setEditorOptions({ fontSize: value[0] })
              }
              min={10}
              max={30}
              step={0.5}
              className="max-w-md"
            />
          </Flex>
          <Box>
            <ChooseFont
              selected={fontFamily}
              onChange={(fontFamily) => setEditorOptions({ fontFamily })}
            />
          </Box>
          <Box>
            <ChooseColorscheme
              selected={colorscheme}
              onChange={(colorscheme) => setEditorOptions({ colorscheme })}
            />
          </Box>
          <Box>
            <ChooseProgrammingLanguage
              selected={programmingLanguage}
              onChange={(programmingLanguage) =>
                setEditorOptions({ programmingLanguage })
              }
            />
          </Box>
          <Box>
            <ChooseBackground
              selected={background}
              onChange={(background) => setEditorOptions({ background })}
            />
          </Box>
          <Box>
            <DownloadImage editorRef={editorRef} />
          </Box>
        </Flex>
      </aside>
    </Box>
  );
};

export { Sidebar };
