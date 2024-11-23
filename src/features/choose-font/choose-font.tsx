import { Select } from "@radix-ui/themes";
import { fonts } from "./data";

type ChooseFontProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseFont = ({ selected, onChange }: ChooseFontProps) => {
  return (
    <Select.Root
      value={selected}
      onValueChange={onChange}
    >
      <Select.Trigger className="w-full" />
      <Select.Content>
        {fonts.map((font) => (
          <Select.Item
            key={font}
            value={font}
            style={{ fontFamily: font }}
          >
            {font}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export { ChooseFont };
export type { ChooseFontProps };
