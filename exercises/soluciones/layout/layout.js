const LARGE_SIZE = "LARGE_SIZE";
const MEDIUM_SIZE = "MEDIUM_SIZE";
const SMALL_SIZE = "SMALL_SIZE";

const Size = {
  LARGE: LARGE_SIZE,
  MEDIUM: MEDIUM_SIZE,
  SMALL: SMALL_SIZE,
};

const size = () => {
  const { orientation, width, height } = window.screen;
  const { angle, type } = orientation;

  if (type === "landscape-primary" && angle === 90) {
    return height >= 960
      ? Size.LARGE
      : height >= 660
      ? Size.MEDIUM
      : Size.SMALL;
  }
  return width >= 960 ? Size.LARGE : width >= 660 ? Size.MEDIUM : Size.SMALL;
};

const toString = (size) => {
  switch (size) {
    case Size.LARGE:
      return "large";
    case Size.MEDIUM:
      return "medium";
    case Size.SMALL:
      return "small";
    default:
      throw new TypeErro(`Invalid screen size value: ${size}`);
  }
};

const saludotext = document.querySelector("#saludo");

saludotext.classList.add(`text-${toString(size())}`);
