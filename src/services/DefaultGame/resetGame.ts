import {changeButtonBackground} from "./changeButtonBackground";
import {getButtonsById} from "./getButtonsById";

export const resetGame = () => {
  const ids = ["0-0", "0-1", "0-2", "1-0", "1-1", "1-2", "2-0", "2-1", "2-2"];

  const allButtons = getButtonsById(ids);

  changeButtonBackground(allButtons, "#FFF");
};
