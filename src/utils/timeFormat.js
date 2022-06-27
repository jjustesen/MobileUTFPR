export const timeFormat = (value) => {
  if (value.length > 5) {
    return value.substring(0, 5);
  }

  switch (value.length) {
    case 1:
      if (value > 2) {
        value = "2";
      }
      break;
    case 2:
      if (value > 24) {
        value = "24";
      }
      break;
    case 3:
    case 4:
      if (value[2] !== ":") {
        value = value.substr(0, 2) + ":" + value[2];
      }
      if (value[3] > 6) {
        value = value.substr(0, 3) + "6";
      }
      break;
    case 5:
      if (value.substr(3, 2) > 60) {
        value = value.substr(0, 3) + "60";
      }
      break;

    default:
      break;
  }

  return value;
};
