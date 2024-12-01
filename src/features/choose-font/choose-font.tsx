import "./style.css";
import { TextIcon } from "@radix-ui/react-icons";
import { ComboSelect } from "@app/common/components";
import { TextField } from "@radix-ui/themes";
import { fonts } from "./data";

type ChooseFontProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseFont = ({ selected, onChange }: ChooseFontProps) => {
  return (
    <ComboSelect
      onChange={onChange}
      trigger={
        <TextField.Root value={selected}>
          <TextField.Slot>
            <TextIcon />
          </TextField.Slot>
        </TextField.Root>
      }
    >
      {fonts.map((font) => (
        <ComboSelect.Item
          key={font}
          value={font}
        >
          {font}
        </ComboSelect.Item>
      ))}
    </ComboSelect>
  );
};

export { ChooseFont };
export type { ChooseFontProps };
