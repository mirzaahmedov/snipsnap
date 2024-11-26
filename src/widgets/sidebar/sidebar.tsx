import type { RefObject } from "react";

import { Box, Button, Flex, Switch, TextField } from "@radix-ui/themes";
import {
  ClipboardCopyIcon,
  ColumnSpacingIcon,
  HeightIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  RowSpacingIcon,
  WidthIcon,
} from "@radix-ui/react-icons";
import {
  ChooseColorscheme,
  ChooseFont,
  ChooseSyntax,
  DownloadImage,
} from "@app/features";
import { Fieldset, NumericField } from "@app/components";
import { useEditorParams } from "@app/shared/hooks/editor-params";

type SidebarProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ editorRef }: SidebarProps) => {
  const { editorParams, setEditorParams } = useEditorParams();

  console.log({ editorParams });

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
              <TextField.Root value={editorParams.background}>
                <TextField.Slot>
                  <Box
                    style={{
                      background: editorParams.background,
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
                onChange={(fontFamily) =>
                  setEditorParams({
                    fontFamily,
                  })
                }
              />
            </Box>
            <Box>
              <NumericField
                type="number"
                step="1"
                min="10"
                max="30"
                value={editorParams.fontSize}
                onChange={(fontSize) =>
                  setEditorParams({
                    fontSize,
                  })
                }
              />
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
              <ChooseSyntax
                selected={editorParams.syntax}
                onChange={(syntax) =>
                  setEditorParams({
                    syntax,
                  })
                }
              />
            </Box>
            <Box>
              <ChooseColorscheme
                selected={editorParams.colorscheme}
                onChange={(colorscheme) => {
                  setEditorParams({ colorscheme });
                }}
              />
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
