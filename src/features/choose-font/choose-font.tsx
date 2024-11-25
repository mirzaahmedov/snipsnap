import { Box, Flex, Popover, TextField } from "@radix-ui/themes";
import { Command } from "cmdk";
import { useToggle } from "@app/hooks";
import { fonts } from "./data";

import "./style.css";
import { MagnifyingGlassIcon, TextIcon } from "@radix-ui/react-icons";

type ChooseFontProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseFont = ({ selected, onChange }: ChooseFontProps) => {
  const toggle = useToggle();
  return (
    <Popover.Root
      open={toggle.isOpen}
      onOpenChange={toggle.setState}
    >
      <Popover.Trigger>
        <Box>
          <TextField.Root value={selected}>
            <TextField.Slot>
              <TextIcon />
            </TextField.Slot>
          </TextField.Root>
        </Box>
      </Popover.Trigger>
      <Popover.Content className="rt-BaseMenuContent rt-ComboboxContent">
        <Command>
          <Flex
            align="center"
            gap="2"
          >
            <Command.Input asChild>
              <TextField.Root placeholder="Search font">
                <TextField.Slot>
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </Command.Input>
          </Flex>
          <Command.List className="rt-ComboboxList">
            {fonts.map((font) => (
              <Command.Item
                key={font}
                value={font}
                className="rt-BaseMenuItem rt-ComboboxItem"
                onSelect={() => {
                  onChange(font);
                  toggle.close();
                }}
                style={{
                  fontFamily: font,
                }}
              >
                {font}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </Popover.Content>
    </Popover.Root>
  );
};

export { ChooseFont };
export type { ChooseFontProps };
