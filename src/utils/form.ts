// const formDataFromBase64 = (dataURL: string): FormData | null => {
//   const parts = dataURL.split(",");
//   const mimeType = parts[0]?.match(/:(.*?);/)?.[1];
//   if (!mimeType) {
//     return null;
//   }

//   const data = atob(parts[1]);
//   const array = new Uint8Array(data.length);
//   for (let i = 0; i < data.length; i++) {
//     array[i] = data.charCodeAt(i);
//   }
//   const blob = new Blob([array], { type: mimeType });
//   const file = new File([blob], "snippet.png", { type: mimeType });
//   const formData = new FormData();
//   formData.append("image", file);

//   return formData;
// };

// export { formDataFromBase64 };
