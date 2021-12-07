export function checkFlexGap() {
  // create flex container with row-gap set
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  // create two, elements inside it
  flex.append(document.createElement("div"));
  flex.append(document.createElement("div"));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.append(flex);
  const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  flex.remove();

  return isSupported;
}
