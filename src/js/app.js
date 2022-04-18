import "bootstrap/dist/css/bootstrap.css";
import "../css/style.css";

import UI from "./config/ui.config";
import { validate } from "./helpers/validate";
import { showImportError } from "./views/form";
import { removeImportError } from "./views/form";
import { login } from "./services/auth.service";
import { notify } from "./views/notifications";

import { getNews } from "./services/news.service";

const { form, inputEmail, inputPassword } = UI;
const inputs = [inputEmail, inputPassword];

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  onSubmit();
});

inputs.forEach((el) =>
  el.addEventListener("focus", () => removeImportError(el))
);

// Handlers
async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showImportError(el);
    }
    return isValidInput;
  });
  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    // show success notify
    notify({
      msg: "Login successs",
      className: "alert-success",
    });
  } catch {
    notify({
      msg: "Login fail",
      className: "alert-danger",
    });
    // show error notify
  }
}
