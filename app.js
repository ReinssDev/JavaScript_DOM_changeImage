import { createUI } from "./modules/createUI.js";
import { styleUI } from "./modules/styleUI.js";
import { initLogic } from "./modules/logic.js";

const ui = createUI();
styleUI(ui);
initLogic(ui);