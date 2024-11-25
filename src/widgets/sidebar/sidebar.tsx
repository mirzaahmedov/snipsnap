import type { RefObject } from "react";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Switch,
  TextField,
} from "@radix-ui/themes";
import {
  CaretDownIcon,
  CaretUpIcon,
  ClipboardCopyIcon,
  ColumnSpacingIcon,
  FontSizeIcon,
  GearIcon,
  Half2Icon,
  HeightIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  RowSpacingIcon,
  TextIcon,
  WidthIcon,
} from "@radix-ui/react-icons";
import { useEditorOptions } from "@app/shared/stores/options";
import { ChooseFont, DownloadImage } from "@app/features";
import { Fieldset } from "@app/components";
import { useEditorParams } from "@app/shared/hooks/editor-params";

type SidebarProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ editorRef }: SidebarProps) => {
  const { editorParams, setEditorParams } = useEditorParams();
  const { background, colorscheme, programmingLanguage } = useEditorOptions();

  return (
    <Box
      asChild
      px="20px"
      py="20px"
      width="100%"
      maxWidth="360px"
      height="100%"
      className="bg-surface-1"
    >
      <aside>
        <Flex
          direction="column"
          justify="start"
          gap="1.25rem"
        >
          <Fieldset legend="Window">
            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <WidthIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>

            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <HeightIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>

            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <ColumnSpacingIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>

            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <RowSpacingIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Fieldset>

          <Fieldset legend="Background">
            <Box>
              <TextField.Root value={background}>
                <TextField.Slot>
                  <Box
                    style={{
                      background: background,
                    }}
                    className="size-4 rounded-sm"
                  />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Fieldset>

          <Fieldset legend="Font">
            <Box>
              <ChooseFont
                selected={editorParams.fontFamily}
                onChange={(value) =>
                  setEditorParams({
                    fontFamily: value,
                  })
                }
              />
              <TextField.Root
                value={editorParams.fontFamily}
                onChange={(e) =>
                  setEditorParams({
                    fontFamily: e.target.value,
                  })
                }
              >
                <TextField.Slot>
                  <TextIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Box>
              <TextField.Root
                type="number"
                step="1"
                min="10"
                max="30"
                value={editorParams.fontSize.toString()}
                onChange={(e) =>
                  setEditorParams({
                    fontSize: Number(e.target.value),
                  })
                }
              >
                <TextField.Slot>
                  <FontSizeIcon />
                </TextField.Slot>
                <TextField.Slot>
                  <Flex gap="2">
                    <IconButton
                      size="1"
                      variant="ghost"
                      onClick={() => {
                        setEditorParams((params) => ({
                          fontSize: params.fontSize + 1,
                        }));
                      }}
                    >
                      <CaretUpIcon />
                    </IconButton>
                    <IconButton
                      size="1"
                      variant="ghost"
                      onClick={() => {
                        setEditorParams((params) => ({
                          fontSize: params.fontSize - 1,
                        }));
                      }}
                    >
                      <CaretDownIcon />
                    </IconButton>
                  </Flex>
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <LineHeightIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Box>
              <TextField.Root>
                <TextField.Slot>
                  <LetterSpacingIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Fieldset>

          <Fieldset legend="Editor">
            <Box>
              <TextField.Root value={programmingLanguage}>
                <TextField.Slot>
                  <GearIcon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Box>
              <TextField.Root value={colorscheme}>
                <TextField.Slot>
                  <Half2Icon />
                </TextField.Slot>
              </TextField.Root>
            </Box>
            <Flex
              direction="column"
              gap="5px"
            >
              <Flex
                gap="10px"
                align="center"
              >
                <Switch name="line-numbers" />
                <label htmlFor="line-numbers">Line numbers</label>
              </Flex>
              <Flex
                gap="10px"
                align="center"
              >
                <Switch name="text-wrap" />
                <label htmlFor="text-wrap">Text wrap</label>
              </Flex>
            </Flex>
          </Fieldset>

          <Flex
            style={{ fontSize: "16px" }}
            gap="10px"
          >
            <DownloadImage editorRef={editorRef} />
            <Button variant="outline">
              Copy <ClipboardCopyIcon />
            </Button>
          </Flex>
        </Flex>
      </aside>
    </Box>
  );
};

{
  /* <Fieldset>
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
</Fieldset>
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
</Box> */
}

export { Sidebar };
