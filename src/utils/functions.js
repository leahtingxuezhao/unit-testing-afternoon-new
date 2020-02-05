export const shortenText = text => {
  let shortened = text.trim();
  if (shortened.length < 100) {
    return shortened;
  } else {
    return shortened.substr(0, 100) + "...";
  }
};
