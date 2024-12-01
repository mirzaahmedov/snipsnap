import { Box, Popover, TextField } from "@radix-ui/themes";
import GColorPicker from "react-gcolor-picker";

type ChooseBGProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseBG = ({ selected, onChange }: ChooseBGProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <button>
          <TextField.Root
            value={isSolidColor(selected) ? selected : "Gradient"}
          >
            <TextField.Slot>
              <Box
                style={{
                  background: selected,
                }}
                className="size-4 rounded-sm"
              />
            </TextField.Slot>
          </TextField.Root>
        </button>
      </Popover.Trigger>
      <Popover.Content className="p-0">
        <GColorPicker
          gradient
          format="hex"
          value={selected}
          onChange={onChange}
        />
      </Popover.Content>
    </Popover.Root>
  );
};

const isSolidColor = (color: string) => {
  return /^#[0-9a-zA-Z]{6}([0-9a-zA-Z]{2})?$/.test(color);
};

export { ChooseBG };
