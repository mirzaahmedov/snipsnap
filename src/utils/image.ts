import { toPng } from "html-to-image";

const saveElementAsImage = async (target: HTMLElement) => {
  const dataURL = await toPng(target);

  const link = document.createElement("a");
  link.download = "image.png";
  link.href = dataURL;
  link.click();
};

export { saveElementAsImage };
