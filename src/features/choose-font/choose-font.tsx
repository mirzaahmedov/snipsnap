import { DropdownMenu, TextField } from "@radix-ui/themes";
import { Command } from "cmdk";
import { fonts } from "./data";

import "./style.css";

type ChooseFontProps = {
  selected: string;
  onChange: (value: string) => void;
};
// const ChooseFont = ({ selected, onChange }: ChooseFontProps) => {
//   return (
//     <Select.Root
//       value={selected}
//       onValueChange={onChange}
//     >
//       <Select.Trigger className="w-full" />
//       <Select.Content>
//         {fonts.map((font) => (
//           <Select.Item
//             key={font}
//             value={font}
//             style={{ fontFamily: font }}
//           >
//             {font}
//           </Select.Item>
//         ))}
//       </Select.Content>
//     </Select.Root>
//   );
// };
const ChooseFont = ({ selected, onChange }: ChooseFontProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <TextField.Root
          disabled={false}
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="rt-ComboboxTrigger"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="rt-ComboboxContent">
        <Command>
          <Command.Input autoFocus />
          <Command.List>
            {fonts.map((font) => (
              <DropdownMenu.Item asChild>
                <Command.Item
                  key={font}
                  value={font}
                  className="rt-ComboboxItem"
                  onSelect={onChange}
                >
                  {font}
                </Command.Item>
              </DropdownMenu.Item>
            ))}
          </Command.List>
        </Command>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { ChooseFont };
export type { ChooseFontProps };
