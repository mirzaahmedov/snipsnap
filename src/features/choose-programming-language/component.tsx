import { Select } from "@radix-ui/themes";
import { languages } from "@codemirror/language-data";

type ChooseProgrammingLanguageProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseProgrammingLanguage = ({
  selected,
  onChange,
}: ChooseProgrammingLanguageProps) => {
  return (
    <Select.Root
      value={selected}
      onValueChange={onChange}
    >
      <Select.Trigger />
      <Select.Content>
        {languages.map((language) => (
          <Select.Item
            key={language.name}
            value={language.name}
          >
            {language.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export { ChooseProgrammingLanguage };
export type { ChooseProgrammingLanguageProps };
