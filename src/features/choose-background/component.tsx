import { Tabs } from "@radix-ui/themes";
import { ColorPicker, ImagePicker } from "@app/components";

type ChooseBackgroundProps = {
  selected: string;
  onChange: (value: string) => void;
};
const ChooseBackground = ({ selected, onChange }: ChooseBackgroundProps) => {
  return (
    <Tabs.Root defaultValue="color">
      <Tabs.List>
        <Tabs.Trigger value="color">Color</Tabs.Trigger>
        <Tabs.Trigger value="image">Image</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="color">
        <ColorPicker
          value={selected}
          onChange={onChange}
        />
      </Tabs.Content>
      <Tabs.Content value="image">
        <ImagePicker
          value={selected}
          onChange={onChange}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export { ChooseBackground };
