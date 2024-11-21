import { useId } from "react";
import { Button } from "@radix-ui/themes";

type ImagePickerProps = {
  value: string;
  onChange: (value: string) => void;
};
const ImagePicker = ({ value, onChange }: ImagePickerProps) => {
  const id = useId();
  return (
    <div>
      <input
        type="file"
        id={id}
        name={id}
        multiple={false}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (e) => {
            onChange(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }}
        className="hidden"
      />
      {value && (
        <img
          src={value}
          alt="Selected"
        />
      )}
      <Button className="cursor-pointer">
        <label
          htmlFor={id}
          className="cursor-pointer"
        >
          Upload Image
        </label>
      </Button>
    </div>
  );
};

export { ImagePicker };
