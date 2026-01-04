import template from "./template.html?raw";
import { htmlToFragment } from "../../utils/utils.js";

let LayoutView = {
  html: function () {
    return template;
  },

  dom: function () {
    return htmlToFragment(template);
  },

};


export { LayoutView };