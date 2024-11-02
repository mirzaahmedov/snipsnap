import type { ComponentProps } from "react";

import { Box, Button, Popover } from "@radix-ui/themes";
import GradientPicker from "react-gcolor-picker";

const ColorPicker = (props: ComponentProps<typeof GradientPicker>) => {
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
          ></Box>
          {props.value}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="p-0 overflow-visible">
        <GradientPicker {...props} />
      </Popover.Content>
    </Popover.Root>
  );
};

export { ColorPicker };
