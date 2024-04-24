export const changeButtonBackground = (
  buttons: HTMLElement[],
  color: "#FFF" | "#D299FF",
) => {
  buttons.forEach(button => {
    button.style.backgroundColor = color;
  });
};
