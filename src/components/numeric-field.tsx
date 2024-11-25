import { forwardRef, useRef } from "react";
import { Flex, IconButton, TextField } from "@radix-ui/themes";
import {
  CaretDownIcon,
  CaretUpIcon,
  FontSizeIcon,
} from "@radix-ui/react-icons";

type NumericFieldProps = TextField.RootProps &
  React.RefAttributes<HTMLInputElement>;

const NumericField = forwardRef<HTMLInputElement, NumericFieldProps>(
  (props, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const ref = forwardedRef ?? inputRef;
    return (
      <TextField.Root
        ref={ref}
        type="number"
        step="1"
        min="10"
        max="30"
        {...props}
      >
        <TextField.Slot>
          <FontSizeIcon />
        </TextField.Slot>
        <TextField.Slot>
          <Flex gap="2">
            <IconButton
              size="1"
              variant="ghost"
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
    );
  },
);

export { NumericField };
