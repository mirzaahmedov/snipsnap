import type { RefObject } from "react";

import { Box, Flex, Checkbox, Text } from "@radix-ui/themes";
import {
  ColumnSpacingIcon,
  FontSizeIcon,
  HeightIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  RowSpacingIcon,
  WidthIcon,
} from "@radix-ui/react-icons";
import {
  ChooseBG,
  ChooseColorscheme,
  ChooseFont,
  ChooseSyntax,
  DownloadImage,
} from "@app/features";
import { Fieldset, NumericField } from "@app/common/components";
import { useEditorParams } from "@app/shared/hooks/editor-params";
import { ChooseFrame } from "@app/features/choose-frame";
import { CopyImage } from "@app/features/copy-image";

type SidebarProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ editorRef }: SidebarProps) => {
  const { params, setParams } = useEditorParams();

  const {
    bg,
    ffamily,
    fsize,
    lheight,
    lspace,
    lang,
    theme,
    width,
    height,
    ph,
    pv,
    wrap,
    numbers,
    shadow,
    frame,
    rounded,
  } = params;

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
              <NumericField
                icon={<WidthIcon />}
                step={10}
                placeholder="Auto"
                value={width ? width : undefined}
                onChange={(width) =>
                  setParams({ width: width ? width : undefined })
                }
              />
            </Box>

            <Box>
              <NumericField
                icon={<HeightIcon />}
                step={10}
                placeholder="Auto"
                value={height ? height : undefined}
                onChange={(height) =>
                  setParams({ height: height ? height : undefined })
                }
              />
            </Box>

            <Box>
              <NumericField
                icon={<ColumnSpacingIcon />}
                step={10}
                value={ph}
                onChange={(ph) => setParams({ ph })}
              />
            </Box>

            <Box>
              <NumericField
                icon={<RowSpacingIcon />}
                step={10}
                value={pv}
                onChange={(pv) => setParams({ pv })}
              />
            </Box>

            <Box className="col-span-2">
              <ChooseFrame
                selected={frame}
                onChange={(frame) =>
                  setParams({
                    frame,
                  })
                }
              />
            </Box>
          </Fieldset>

          <Fieldset legend="Background">
            <Box>
              <ChooseBG
                selected={bg}
                onChange={(bg) => setParams({ bg })}
              />
            </Box>
          </Fieldset>

          <Fieldset legend="Font">
            <Box>
              <ChooseFont
                selected={ffamily}
                onChange={(ffamily) =>
                  setParams({
                    ffamily,
                  })
                }
              />
            </Box>
            <Box>
              <NumericField
                icon={<FontSizeIcon />}
                value={fsize}
                onChange={(fsize) =>
                  setParams({
                    fsize,
                  })
                }
              />
            </Box>
            <Box>
              <NumericField
                icon={<LineHeightIcon />}
                step={0.1}
                value={lheight}
                onChange={(lheight) =>
                  setParams({
                    lheight,
                  })
                }
              />
            </Box>
            <Box>
              <NumericField
                icon={<LetterSpacingIcon />}
                step={0.05}
                value={lspace}
                onChange={(lspace) =>
                  setParams({
                    lspace,
                  })
                }
              />
            </Box>
          </Fieldset>

          <Fieldset legend="Editor">
            <Box>
              <ChooseSyntax
                selected={lang}
                onChange={(lang) =>
                  setParams({
                    lang,
                  })
                }
              />
            </Box>
            <Box>
              <ChooseColorscheme
                selected={theme}
                onChange={(theme) => {
                  setParams({ theme });
                }}
              />
            </Box>
            <Flex
              direction="column"
              gap="5px"
              className="col-span-2"
            >
              <Flex
                gap="10px"
                align="center"
              >
                <Checkbox
                  name="line-numbers"
                  id="line-numbers"
                  checked={numbers}
                  onCheckedChange={(numbers) =>
                    setParams({
                      numbers: numbers === true,
                    })
                  }
                />
                <Text
                  as="label"
                  size="2"
                  htmlFor="line-numbers"
                >
                  Line numbers
                </Text>
              </Flex>
              <Flex
                gap="10px"
                align="center"
              >
                <Checkbox
                  name="text-wrap"
                  id="text-wrap"
                  checked={wrap}
                  onCheckedChange={(wrap) =>
                    setParams({
                      wrap: wrap === true,
                    })
                  }
                />
                <Text
                  as="label"
                  size="2"
                  htmlFor="text-wrap"
                >
                  Text wrap
                </Text>
              </Flex>

              <Flex
                gap="10px"
                align="center"
              >
                <Checkbox
                  name="box-shadow"
                  id="box-shadow"
                  checked={shadow}
                  onCheckedChange={(shadow) =>
                    setParams({
                      shadow: shadow === true,
                    })
                  }
                />
                <Text
                  as="label"
                  size="2"
                  htmlFor="box-shadow"
                >
                  Shadow
                </Text>
              </Flex>
              <Flex
                gap="10px"
                align="center"
              >
                <Checkbox
                  name="rounded"
                  id="rounded"
                  checked={rounded}
                  onCheckedChange={(rounded) =>
                    setParams({
                      rounded: rounded === true,
                    })
                  }
                />
                <Text
                  as="label"
                  size="2"
                  htmlFor="rounded"
                >
                  Rounded Corners
                </Text>
              </Flex>
            </Flex>
          </Fieldset>

          <Flex
            style={{ fontSize: "16px" }}
            gap="10px"
          >
            <DownloadImage editorRef={editorRef} />
            <CopyImage editorRef={editorRef} />
          </Flex>
        </Flex>
      </aside>
    </Box>
  );
};

export { Sidebar };
