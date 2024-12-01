import type { ComponentProps } from "react";

import { Box, Button, Popover } from "@radix-ui/themes";
import GColorPicker from "react-gcolor-picker";

type ColorPickerProps = ComponentProps<typeof GColorPicker>;
const ColorPicker = (props: ColorPickerProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant="ghost"
          className="p-1 cursor-pointer"
        >
          <Box
            className="size-6 rounded"
            style={{ background: props.value }}
          />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="p-0 overflow-visible">
        <GColorPicker
          gradient
          {...props}
        />
      </Popover.Content>
    </Popover.Root>
  );
};

export { ColorPicker };
export type { ColorPickerProps };
