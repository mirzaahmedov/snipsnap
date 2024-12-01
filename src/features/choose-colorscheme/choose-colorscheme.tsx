import { TextField } from "@radix-ui/themes";
import { ComboSelect } from "@app/common/components";
import { colorschemes } from "./data";
import { Half2Icon } from "@radix-ui/react-icons";

type ChooseColorschemeProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseColorscheme = ({ selected, onChange }: ChooseColorschemeProps) => {
  return (
    <ComboSelect
      onChange={onChange}
      trigger={
        <TextField.Root value={selected}>
          <TextField.Slot>
            <Half2Icon />
          </TextField.Slot>
        </TextField.Root>
      }
    >
      {colorschemes.map(({ name }) => (
        <ComboSelect.Item
          key={name}
          value={name}
        >
          {name}
        </ComboSelect.Item>
      ))}
    </ComboSelect>
  );
};

export { ChooseColorscheme };
