import { getAppContainer } from './utils/helpers.js';
import { renderApp } from "./ui/renderers/appRenderer.js";

const app = getAppContainer();
renderApp(app);
