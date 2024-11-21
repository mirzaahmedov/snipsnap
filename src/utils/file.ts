type GetUniqueFileNameParams = {
  name: string;
  ext: string;
};
const getUniqueFileName = ({ name, ext }: GetUniqueFileNameParams) => {
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}_${date.getHours()}-${date.getMinutes()}`;
  return `${name}-${formattedDate}.${ext}`;
};

export { getUniqueFileName };
