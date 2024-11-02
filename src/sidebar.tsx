import { useState, type FormEvent, type RefObject } from "react";

import { Box, Button, Flex, Slider, TextField } from "@radix-ui/themes";
import { saveElementAsImage } from "./utils/image";
import { useOptions } from "./stores/options";
import { gray } from "@radix-ui/colors";
import { ColorPicker } from "./components";

type SidebarProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ editorRef }: SidebarProps) => {
  const { fontSize, bgColor, setOptions } = useOptions();

  const [color, setColor] = useState<string>("#000000");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!editorRef.current) return;
    saveElementAsImage(editorRef.current);
  };

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
        <form onSubmit={onSubmit}>
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
                  setOptions({ fontSize: Number(e.target.value) })
                }
                className="w-24"
              />
              <Slider
                value={[fontSize]}
                onValueChange={(value) => setOptions({ fontSize: value[0] })}
                min={10}
                max={30}
                step={0.5}
                className="max-w-md"
              />
            </Flex>
            <Box>
              <ColorPicker
                value={bgColor}
                onChange={(color) => setOptions({ bgColor: color })}
              />
            </Box>
            <Box ml="auto">
              <Button type="submit">Download</Button>
            </Box>
          </Flex>
        </form>
      </aside>
    </Box>
  );
};

export { Sidebar };
