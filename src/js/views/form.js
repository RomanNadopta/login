//
//
// Function InputErorrTemplate
// @param {String} msg
//
function inputErorrTemplate(msg) {
  return `
  <div class="invalid-feedback">${msg}</div>
  `;
}

//
// function showInputError. add input error
// @param {HTMLInputElement} el
//
//
export function showImportError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || "invalid input";
  const template = inputErorrTemplate(msg);
  el.classList.add("is-invalid");
  parent.insertAdjacentHTML("beforeend", template);
}

//
// function RemoveImputError. remove input error
// @param {HTMLInputElement} el
//
//
export function removeImportError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector(".invalid-feedback");
  if (!err) return;

  el.classList.remove("is-invalid");
  parent.removeChild(err);
}
