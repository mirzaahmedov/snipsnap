import { TextField } from "@radix-ui/themes";
import { ComboSelect } from "@app/components";
import { GearIcon } from "@radix-ui/react-icons";
import { languages } from "@codemirror/language-data";
import { useSyntaxParam } from "./hooks";

const ChooseSyntax = () => {
  const [syntax, setSyntax] = useSyntaxParam();
  return (
    <ComboSelect
      onChange={setSyntax}
      trigger={
        <TextField.Root value={syntax}>
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
