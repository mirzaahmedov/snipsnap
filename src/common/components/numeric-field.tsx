import type { ReactNode } from "react";

import { forwardRef, useRef } from "react";
import { Flex, IconButton, TextField } from "@radix-ui/themes";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { roundNumberToDecimalPlaces } from "../utils/number";

type NumericFieldProps = Omit<
  TextField.RootProps & React.RefAttributes<HTMLInputElement>,
  "value" | "onChange"
> & {
  icon: ReactNode;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
};

const NumericField = forwardRef<HTMLInputElement, NumericFieldProps>(
  ({ icon, step = 1, value, onChange, ...props }, forwardedRef) => {
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
        value={value ? Number(value).toString() : undefined}
        onChange={(e) =>
          onChange?.(
            roundNumberToDecimalPlaces(Number(e.currentTarget.value), 2),
          )
        }
        {...props}
      >
        <TextField.Slot>{icon}</TextField.Slot>
        <TextField.Slot>
          <Flex gap="2">
            <IconButton
              size="1"
              variant="ghost"
              onClick={() => {
                if (!inputRef.current || isNaN(inputRef.current.valueAsNumber))
                  return;
                onChange?.(
                  roundNumberToDecimalPlaces(
                    inputRef.current.valueAsNumber + step,
                    2,
                  ),
                );
              }}
            >
              <CaretUpIcon />
            </IconButton>
            <IconButton
              size="1"
              variant="ghost"
              onClick={() => {
                if (!inputRef.current || isNaN(inputRef.current.valueAsNumber))
                  return;
                onChange?.(
                  roundNumberToDecimalPlaces(
                    inputRef.current.valueAsNumber - step,
                    2,
                  ),
                );
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
