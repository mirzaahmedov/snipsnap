import { TextField } from "@radix-ui/themes";
import { ComboSelect } from "@app/common/components";
import { GearIcon } from "@radix-ui/react-icons";
import { languages } from "@codemirror/language-data";

type ChooseSyntaxProps = {
  selected: string;
  onChange: (syntax: string) => void;
};
const ChooseSyntax = ({ selected, onChange }: ChooseSyntaxProps) => {
  return (
    <ComboSelect
      onChange={onChange}
      trigger={
        <TextField.Root value={selected}>
          <TextField.Slot>
            <GearIcon />
          </TextField.Slot>
        </TextField.Root>
      }
    >
      {languages.map((language) => (
        <ComboSelect.Item
          key={language.name}
          value={language.name}
        >
          {language.name}
        </ComboSelect.Item>
      ))}
    </ComboSelect>
  );
};

export { ChooseSyntax };
