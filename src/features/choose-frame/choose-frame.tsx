import { RadioCards } from "@radix-ui/themes";
import {
  DefaultWindowControls,
  MacOSWindowControls,
  WindowsWindowControls,
} from "@app/common/components/window-frame";

type ChooseFrameProps<T> = {
  selected: T;
  onChange: (value: T) => void;
};
const ChooseFrame = <T extends string>({
  selected,
  onChange,
}: ChooseFrameProps<T>) => {
  return (
    <RadioCards.Root
      value={selected}
      onValueChange={onChange}
      gap="1"
      className="grid grid-cols-2"
    >
      <RadioCards.Item value="default">
        <DefaultWindowControls />
      </RadioCards.Item>
      <RadioCards.Item value="macos">
        <MacOSWindowControls />
      </RadioCards.Item>
      <RadioCards.Item value="windows">
        <WindowsWindowControls />
      </RadioCards.Item>
    </RadioCards.Root>
  );
};

export { ChooseFrame };
