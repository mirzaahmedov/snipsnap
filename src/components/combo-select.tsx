import type {
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactNode,
} from "react";

import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { twMerge } from "tailwind-merge";
import { useToggle } from "@app/hooks";
import { Command } from "cmdk";
import { Popover, TextField, ScrollArea } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import "./combo-select.css";

type ComboSelectProps = PropsWithChildren<{
  trigger: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}>;
const ComboSelect = forwardRef<HTMLDivElement, ComboSelectProps>(
  ({ children, trigger, value, onChange }, ref) => {
    const toggle = useToggle();

    const clonedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, {
          // @ts-expect-error onSelect is not a valid prop for all children
          onSelect: (value: string) => {
            toggle.close();
            onChange?.(value);
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
          <button>{trigger}</button>
        </Popover.Trigger>
        <Popover.Content className="rt-BaseMenuContent rt-ComboboxContent">
          <Command
            value={value}
            ref={ref}
            className="flex flex-col gap-2 h-full overflow-hidden"
          >
            <Command.Input asChild>
              <TextField.Root placeholder="Search font">
                <TextField.Slot>
                  <MagnifyingGlassIcon />
                </TextField.Slot>
              </TextField.Root>
            </Command.Input>
            <ScrollArea
              type="auto"
              scrollbars="vertical"
              className="flex-1"
            >
              <Command.List className="rt-ComboboxList">
                {clonedChildren}
              </Command.List>
            </ScrollArea>
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
