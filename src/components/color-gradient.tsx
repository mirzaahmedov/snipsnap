import { useOptions } from "@app/stores/options";
import { Flex } from "@radix-ui/themes";
import GradientPicker from "react-gcolor-picker";

const ColorGradientTool = () => {
  const { bgColor, setOptions } = useOptions();
  return (
    <Flex
      direction="column"
      align="center"
      gap="1"
    >
      <GradientPicker
        gradient
        value={bgColor}
        onChange={(color) => setOptions({ bgColor: color })}
      />
    </Flex>
  );
};

export { ColorGradientTool };
