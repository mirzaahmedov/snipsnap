import type { RefObject } from "react";
import { toBlob } from "html-to-image";
import { useMutation } from "@tanstack/react-query";
import { Button, Spinner } from "@radix-ui/themes";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { toast } from "react-toastify";

type CopyImageProps = {
  editorRef: RefObject<HTMLDivElement>;
};
const CopyImage = ({ editorRef }: CopyImageProps) => {
  const { mutate: copyImage, isPending } = useMutation({
    mutationFn: async () => {
      if (!editorRef.current) {
        throw new Error("Editor ref is not available");
      }
      const blob = await toBlob(editorRef.current, {
        quality: 1,
      });
      if (!blob) {
        throw new Error("Failed to create image blob");
      }
      navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    },
    onSuccess() {
      toast.success("Image copied to clipboard");
    },
    onError() {
      toast.error("Failed to copy image to clipboard");
    },
  });

  return (
    <Button
      variant="outline"
      disabled={isPending}
      onClick={() => copyImage()}
    >
      Copy
      <Spinner loading={isPending}>
        <ClipboardCopyIcon />
      </Spinner>
    </Button>
  );
};

export { CopyImage };
