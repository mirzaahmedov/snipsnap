import { Select } from "@radix-ui/themes";
import { colorschemes } from "./data";

type ChooseColorschemeProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseColorscheme = ({ selected, onChange }: ChooseColorschemeProps) => {
  return (
    <Select.Root
      value={selected}
      onValueChange={onChange}
    >
      <Select.Trigger></Select.Trigger>
      <Select.Content>
        {colorschemes.map(({ name }) => (
          <Select.Item
            key={name}
            value={name}
          >
            {name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export { ChooseColorscheme };
