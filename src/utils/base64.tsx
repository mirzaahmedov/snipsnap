const regex =
  /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;

const isDataURL = (str: string): boolean => {
  try {
    return regex.test(str);
  } catch {
    return false;
  }
};

export { isDataURL };
