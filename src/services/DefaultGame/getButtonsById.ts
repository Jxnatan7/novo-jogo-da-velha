export const getButtonsById = (ids: Array<string>) => {
  const elements: HTMLElement[] = [];
  ids.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      elements.push(element);
    }
  });
  return elements;
};
