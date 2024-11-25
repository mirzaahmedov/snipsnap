import type {
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
} from "react";

import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { useToggle } from "@app/hooks";
import { Command } from "cmdk";
import { Box, Flex, Popover, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import "./style.css";

type ComboSelectProps = PropsWithChildren<{
  trigger: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}>;
const ComboSelect = forwardRef<HTMLDivElement, ComboSelectProps>(
  ({ children, trigger, value }) => {
    const toggle = useToggle();

    const clonedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          onSelect: (value: string) => {
            toggle.close();
            child.props.onSelect?.(value);
          },
        });
      }
      return child;
    });

    return (
      <Popover.Root
        open={toggle.isOpen}
        onOpenChange={toggle.setState}
      >
        <Popover.Trigger>
          <Box>{trigger}</Box>
        </Popover.Trigger>
        <Popover.Content className="rt-BaseMenuContent rt-ComboboxContent">
          <Command value={value}>
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
              {clonedChildren}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover.Root>
    );
  },
);
ComboSelect.displayName = "ComboSelect";

const ComboSelectItem: typeof Command.Item = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Command.Item
        {...props}
        ref={ref}
        className={twMerge("rt-BaseMenuItem rt-ComboboxItem", className)}
      >
        {children}
      </Command.Item>
    );
  },
);
ComboSelectItem.displayName = "ComboSelect.Item";

const ComboSelectWithType =
  ComboSelect as ForwardRefExoticComponent<ComboSelectProps> & {
    Item: typeof Command.Item;
  };

ComboSelectWithType.Item = ComboSelectItem;

export { ComboSelectWithType as ComboSelect };
export type { ComboSelectProps };
