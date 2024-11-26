import { forwardRef, useRef } from "react";
import { Flex, IconButton, TextField } from "@radix-ui/themes";
import {
  CaretDownIcon,
  CaretUpIcon,
  FontSizeIcon,
} from "@radix-ui/react-icons";

type NumericFieldProps = Omit<
  TextField.RootProps & React.RefAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  value: number;
  onChange?: (value: number) => void;
};

const NumericField = forwardRef<HTMLInputElement, NumericFieldProps>(
  ({ value, onChange, ...props }, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <TextField.Root
        ref={(ref) => {
          inputRef.current = ref;
          if (!forwardedRef) return;
          if (typeof forwardedRef === "function") {
            forwardedRef(ref);
            return;
          }
          forwardedRef.current = ref;
        }}
        type="number"
        value={value}
        onChange={(e) => onChange?.(Number(e.currentTarget.value))}
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
              onClick={() => {
                if (!inputRef.current) return;
                onChange?.(inputRef.current.valueAsNumber + 1);
              }}
            >
              <CaretUpIcon />
            </IconButton>
            <IconButton
              size="1"
              variant="ghost"
              onClick={() => {
                if (!inputRef.current) return;
                onChange?.(inputRef.current.valueAsNumber - 1);
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

NumericField.displayName = "NumericField";

export { NumericField };
