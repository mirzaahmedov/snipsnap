import type { RefObject } from "react";

import { toPng, toJpeg, toSvg } from "html-to-image";
import { saveAs } from "file-saver";
import { Button, DropdownMenu, IconButton, Spinner } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import { getUniqueFileName } from "@app/utils/file";
import { toast } from "react-toastify";

type DownloadImageProps = {
  editorRef: RefObject<HTMLElement>;
};
const DownloadImage = ({ editorRef }: DownloadImageProps) => {
  const { mutate: downloadJPEG, isPending: isJPEGPending } = useMutation({
    mutationFn: async () => {
      if (!editorRef.current) return;
      const dataURL = await toJpeg(editorRef.current, {
        quality: 1,
      });
      saveAs(dataURL, getUniqueFileName({ name: "snippet", ext: "jpeg" }));
    },
    onError() {
      toast.error("Failed to download image");
    },
  });

  const { mutate: downloadPNG, isPending: isPNGPending } = useMutation({
    mutationFn: async () => {
      if (!editorRef.current) return;
      const dataURL = await toPng(editorRef.current, {
        quality: 1,
      });
      saveAs(dataURL, getUniqueFileName({ name: "snippet", ext: "png" }));
    },
    onError() {
      toast.error("Failed to download image");
    },
  });

  const { mutate: downloadSVG, isPending: isSVGPending } = useMutation({
    mutationFn: async () => {
      if (!editorRef.current) return;
      const dataURL = await toSvg(editorRef.current, {
        quality: 1,
      });
      saveAs(dataURL, getUniqueFileName({ name: "snippet", ext: "svg" }));
    },
    onError() {
      toast.error("Failed to download image");
    },
  });

  const isPending = isJPEGPending || isPNGPending || isSVGPending;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div>
          <Button
            type="button"
            className="rounded-r-none cursor-pointer"
            onPointerDown={(e) => {
              e.stopPropagation();
              downloadJPEG();
            }}
            disabled={isPending}
          >
            Download
          </Button>
          <IconButton
            type="button"
            className="rounded-l-none border-solid border-0 border-l border-white/20 cursor-pointer"
            disabled={isPending}
          >
            <Spinner loading={isPending}>
              <DropdownMenu.TriggerIcon />
            </Spinner>
          </IconButton>
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item
          onClick={() => downloadJPEG()}
          className="cursor-pointer"
        >
          Download JPG
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => downloadPNG()}
          className="cursor-pointer"
        >
          Download PNG
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => downloadSVG()}
          className="cursor-pointer"
        >
          Download SVG
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { DownloadImage };
