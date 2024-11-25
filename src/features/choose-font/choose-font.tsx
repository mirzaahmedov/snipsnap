import { Popover, TextField } from "@radix-ui/themes";
import { Command } from "cmdk";
import { useToggle } from "@app/hooks";
import { fonts } from "./data";

import "./style.css";
import { TextIcon } from "@radix-ui/react-icons";

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
        <TextField.Root
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="rt-ComboboxTrigger"
        >
          <TextField.Slot>
            <TextIcon />
          </TextField.Slot>
        </TextField.Root>
      </Popover.Trigger>
      <Popover.Content className="rt-BaseMenuContent rt-ComboboxContent">
        <Command>
          <Command.Input />
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
