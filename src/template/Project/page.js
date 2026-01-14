import { ProjectView } from "./index.js";
import { htmlToFragment } from "../../utils/utils.js";

let M = {};
M.data = [
  {
    projectTitle: "One page - Esthero, Breath from Another",
    titleColor: "pink",
    imageProject: "bfa.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "One page - Klimt, Adele Bloch Bauer",
    titleColor: "pink",
    imageProject: "bfa.svg",
    tagBgColor: "pink",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • academic",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "Site e-commerce - Evisu",
    titleColor: "pink",
    imageProject: "evisu.svg",
    tagBgColor: "orange",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "site de streaming fictif",
    titleColor: "pink",
    imageProject: "stream.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "cartes de mouvement artistique",
    titleColor: "pink",
    imageProject: "card.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "Portfolio de compétences",
    titleColor: "pink",
    imageProject: "portfolio.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "One page - Olive Oil",
    titleColor: "pink",
    imageProject: "oliveoil.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
  {
    projectTitle: "application - Hemera",
    titleColor: "pink",
    imageProject: "hemera.svg",
    tagBgColor: "light-blue",
    tagTextcolor: "white",
    tag: "web design • UX/UI • personnal • web design • UX/UI • personnal",
    description:
      "cE PROJET a été réalisé dans un cadre personnelle. Il a été inspiré par un travail réalisé lors d'un cours de où nous avions a designer un one page de présentation d'une oeuvre en incorporant l'identité visuelle de l'oeuvre dans la charte graphique du site designé",
  },
];

let V = {};

V.renderTemplate = function (data, template) {
  // let html = ProjectView.dom();
  // let templateElement = html.querySelector(`template.${template}`);
  // console.log(template);
  // let templateDOM = template.content.cloneNode(true);
  // console.log(templateDOM);
  let templateHTML = template.innerHTML;
  console.log(templateHTML);
  // console.log(templateHTML);
  const placeholderRegex = /{{([^}]+)}}/g;
  templateHTML = templateHTML.replace(
    placeholderRegex,
    (match, key) => data[key] || match
  );
  return templateHTML;
};

V.renderLayout = function () {
  let data = M.data;
  let html = ProjectView.dom();
  let container = html.querySelector("#container");
  let layoutElement = html.querySelector("template#basicLayout");
  let templates = html.querySelectorAll(".component");

  for (let i = 0; i < data.length; i += 3) {
    let layoutClone = layoutElement.content.cloneNode(true);
    let slots = layoutClone.querySelectorAll("slot");
    let layoutWrapper = document.createElement("div");

    layoutWrapper.classList.add(
      "flex",
      "flex-row",
      "md:flex-row",
      "md:justify-between",
      "md:gap-4",
      "mb-8"
    );

    for (let slotIndex = 0; slotIndex < slots.length && i + slotIndex < data.length; slotIndex++) {
      let slot = slots[slotIndex];
      let elt = V.renderTemplate(data[i + slotIndex], templates[slotIndex]);
      slot.replaceWith(htmlToFragment(elt));
    }

    layoutWrapper.appendChild(layoutClone);
    container.appendChild(layoutWrapper);
  }

  let temp = document.createElement("div");
  temp.appendChild(html.cloneNode(true));
  return temp.innerHTML;
};

V.render = function () {
  return ProjectView.html();
};

let C = {};
C.init = function () {
  return V.renderLayout();
};
export function ProjectPage() {
  return C.init();
}
